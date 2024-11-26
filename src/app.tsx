import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { routes } from './config/routes'
import { Layout } from './layout'
import { CartPage } from './pages/cart'
import { DashboardPage } from './pages/dashboard'
import { ErrorPage } from './pages/error'
import { HomePage } from './pages/home'
import { LoginPage } from './pages/login'
import { ProductsPage } from './pages/products'
import { UsersPage } from './pages/users'
import { RequireAuthProvider } from './provider/require-auth'

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <RequireAuthProvider>
                <Layout />
            </RequireAuthProvider>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: routes.dashboard,
                element: <DashboardPage />
            },
            {
                path: routes.cart,
                element: <CartPage />
            },
            {
                path: routes.products,
                element: <ProductsPage />
            },
            {
                path: routes.users,
                element: <UsersPage />
            }
        ]
    },
    {
        path: routes.login,
        element: <LoginPage />
    },
    {
        path: '*',
        element: <ErrorPage />
    }
])

export const App = () => <RouterProvider router={router} />
