import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { routes } from './config/routes'
import { Layout } from './layout'
import { CartPage } from './pages/cart'
import { ErrorPage } from './pages/error'
import { HomePage } from './pages/home'
import { ProductsPage } from './pages/products'
import { UsersPage } from './pages/users'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
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
        path: '*',
        element: <ErrorPage />
    }
])

export const App = () => <RouterProvider router={router} />
