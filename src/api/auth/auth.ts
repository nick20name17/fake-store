import { api } from '..'

import type { User } from '../users/users.types'

import type { AuthPayload, AuthResponse } from './auth.types'

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, AuthPayload>({
            query: (data) => {
                return {
                    url: 'https://api.escuelajs.co/api/v1/auth/login/',
                    method: 'POST',
                    body: data
                }
            }
        }),
        getCurrentUser: builder.query<User, void | null>({
            query: () => ({ url: 'https://api.escuelajs.co/api/v1/auth/auth/user' })
        })
    })
})

export const { useLoginMutation, useGetCurrentUserQuery } = authApi
