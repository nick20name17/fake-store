import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { LoginForm } from './components/login-form'
import { MetaHead } from '@/components/meta-head'
import { buttonVariants } from '@/components/ui/button'
import { Toaster } from '@/components/ui/sonner'
import { routes } from '@/config/routes'
import { cn } from '@/lib/utils'

export const LoginPage = () => {
    const isAuth = !!localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuth) {
            navigate(routes.home)
        }
    }, [isAuth])

    return (
        <>
            <MetaHead title='Fake Store | Login' />
            <main>
                <div className='relative z-20 flex items-center text-lg font-medium md:hidden'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='mr-2 h-6 w-6'>
                        <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
                    </svg>
                    Acme Inc
                </div>
                <div className='container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
                    <Link
                        to={routes.home}
                        className={cn(
                            buttonVariants({ variant: 'ghost' }),
                            'absolute right-4 top-4 md:right-8 md:top-8'
                        )}>
                        Home
                    </Link>
                    <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
                        <div className='absolute inset-0 bg-zinc-900' />
                        <div className='relative z-20 flex items-center text-lg font-medium'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                className='mr-2 h-6 w-6'>
                                <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
                            </svg>
                            Acme Inc
                        </div>
                        <div className='relative z-20 mt-auto'>
                            <blockquote className='space-y-2'>
                                <p className='text-lg'>
                                    &ldquo;Fake store rest API for your e-commerce or
                                    shopping website prototype.&rdquo;
                                </p>
                                <footer className='text-sm'>Nazar</footer>
                            </blockquote>
                        </div>
                    </div>
                    <div className='lg:p-8'>
                        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
                            <div className='flex flex-col space-y-2 text-center'>
                                <h1 className='text-2xl font-semibold tracking-tight'>
                                    Log In
                                </h1>
                                <p className='text-sm text-muted-foreground'>
                                    Enter your email and password to log in into your
                                    account
                                </p>
                            </div>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </main>
            <Toaster />
        </>
    )
}