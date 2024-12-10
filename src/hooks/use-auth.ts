import { useEffect, useState } from 'react'

import { useGetCurrentUserQuery, useLoginMutation } from '@/api/auth/auth'
import type { User } from '@/api/users/users.types'

export const useAuth = () => {
    const [loginMutation, { isLoading, isError }] = useLoginMutation()

    const isAuth = !!localStorage.getItem('accessToken')

    const [user, setUser] = useState<User | null>(null)

    const { data: currentUser } = useGetCurrentUserQuery(null, {
        skip: !localStorage.getItem('accessToken')
    })

    useEffect(() => {
        if (currentUser) {
            setUser(currentUser)
        }
    }, [currentUser])

    const login = async (email: string, password: string) => {
        try {
            const res = await loginMutation({
                email,
                password
            }).unwrap()

            const { access_token, refresh_token } = res
            localStorage.setItem('accessToken', access_token)
            localStorage.setItem('refreshToken', refresh_token)
        } catch (error: any) {
            console.log(error)
        }
    }

    const logout = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        setUser(null)
    }

    return {
        user,
        logout,
        login,
        isLoading,
        isError,
        isAuth
    }
}
