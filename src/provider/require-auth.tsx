import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { publicRoutes } from '@/config/routes'

export const RequireAuthProvider = ({ children }: React.PropsWithChildren) => {
    const navigate = useNavigate()
    const location = useLocation()

    const isPublicRoute = publicRoutes.includes(location.pathname)

    // const { isAuth } = useAuth()

    // if (!isAuth && !isPublicRoute) {
    //     navigate(routes.login, { replace: true })
    // }

    return children
}
