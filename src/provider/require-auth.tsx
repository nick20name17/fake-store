import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { publicRoutes, routes } from '@/config/routes'
import { useAuth } from '@/hooks/use-auth'

export const RequireAuthProvider = ({ children }: React.PropsWithChildren) => {
    const navigate = useNavigate()
    const location = useLocation()

    const isPublicRoute = publicRoutes.includes(location.pathname)

    const { isAuth } = useAuth()

    if (!isAuth && !isPublicRoute) {
        navigate(routes.login, { replace: true })
    }

    return children
}
