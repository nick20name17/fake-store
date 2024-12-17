import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NuqsAdapter } from 'nuqs/adapters/react'
import { type PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import { ThemeProvider } from './theme'
import { TooltipProvider } from '@/components/ui/tooltip'
import { store } from '@/store'

const queryClient = new QueryClient()

export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <QueryClientProvider client={queryClient}>
            <NuqsAdapter>
                <Provider store={store}>
                    <ThemeProvider defaultTheme='light'>
                        <TooltipProvider>{children}</TooltipProvider>
                    </ThemeProvider>
                </Provider>
            </NuqsAdapter>
        </QueryClientProvider>
    )
}
