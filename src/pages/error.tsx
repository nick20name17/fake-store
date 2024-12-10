import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { routes } from '@/config/routes'

export const ErrorPage = () => {
    return (
        <main className='container flex h-screen flex-col items-center justify-center gap-y-10'>
            <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl'>
                Something went wrong
            </h1>

            <Button asChild>
                <Link to={routes.home}>Go to Home</Link>
            </Button>
        </main>
    )
}
