import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useGetCurrentUserQuery, useLoginMutation } from '@/api/auth/auth'
import type { User } from '@/api/users/users.types'
import { routes } from '@/config/routes'

export const useAuth = () => {
    const navigate = useNavigate()
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
        } catch (err: any) {
            console.error(err)
        }
    }

    const logout = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        setUser(null)
        navigate(routes.login)
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
