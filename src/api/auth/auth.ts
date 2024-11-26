import { api } from '..'

import type { AuthPayload, AuthResponse } from './auth.types'

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        addAuth: builder.mutation<AuthResponse, AuthPayload>({
            query: (data) => {
                return {
                    url: '/auth/login',
                    method: 'POST',
                    body: data
                }
            }
        })
    })
})

export const { useAddAuthMutation } = authApi
