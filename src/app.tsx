import { Suspense, lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { PageLoader } from './components/ui/page-loader'
import { routes } from './config/routes'
import { Layout } from './layout'
import { CartPage } from './pages/cart'
import { HomePage } from './pages/home'
import { RequireAuthProvider } from './provider/require-auth'

const DashboardPage = lazy(() => import('./pages/dashboard'))
const ErrorPage = lazy(() => import('./pages/error'))
const ProductsPage = lazy(() => import('./pages/products'))
const UsersPage = lazy(() => import('./pages/users'))
const LoginPage = lazy(() => import('./pages/login'))

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <RequireAuthProvider>
                <Layout />
            </RequireAuthProvider>
        ),
        errorElement: (
            <Suspense fallback={<PageLoader />}>
                <ErrorPage />
            </Suspense>
        ),
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: routes.dashboard,
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <DashboardPage />
                    </Suspense>
                )
            },
            {
                path: routes.cart,
                element: <CartPage />
            },
            {
                path: routes.products,
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <ProductsPage />
                    </Suspense>
                )
            },
            {
                path: routes.users,
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <UsersPage />
                    </Suspense>
                )
            }
        ]
    },
    {
        path: routes.login,
        element: (
            <Suspense fallback={<PageLoader />}>
                <LoginPage />
            </Suspense>
        )
    },
    {
        path: '*',
        element: (
            <Suspense fallback={<PageLoader />}>
                <ErrorPage />
            </Suspense>
        )
    }
])

export const App = () => <RouterProvider router={router} />
