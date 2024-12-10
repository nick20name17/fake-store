import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { AuthResponse } from './auth/auth.types'

const baseQuery = fetchBaseQuery({
    prepareHeaders(headers) {
        const token = localStorage.getItem('accessToken')

        if (token) {
            headers.set('authorization', `Bearer ${token}}`)
        }

        return headers
    },
    baseUrl: 'https://fakestoreapi.com'
})

const baseQueryWithReauth: any = async (args: any, api: any, extraOptions: any) => {
    let res = await baseQuery(args, api, extraOptions)

    const refreshToken = localStorage.getItem('refreshToken')

    if (res.error && res.error.status === 401 && refreshToken) {
        const refreshRes = await baseQuery(
            {
                url: 'https://api.escuelajs.co/api/v1/auth/refresh-token',
                method: 'POST',
                body: { refreshToken }
            },
            api,
            extraOptions
        )

        if (refreshRes.data) {
            localStorage.setItem(
                'accessToken',
                (refreshRes.data as AuthResponse).access_token
            )
            localStorage.setItem(
                'accessToken',
                (refreshRes.data as AuthResponse).refresh_token
            )

            res = await baseQuery(args, api, extraOptions)
        } else {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('accessToken')
        }
    }
}

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
    tagTypes: ['Users', 'Products']
})
