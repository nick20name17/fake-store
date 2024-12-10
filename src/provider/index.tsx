import { NuqsAdapter } from 'nuqs/adapters/react'
import { type PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import { ThemeProvider } from './theme'
import { TooltipProvider } from '@/components/ui/tooltip'
import { store } from '@/store'

export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <NuqsAdapter>
            <Provider store={store}>
                <ThemeProvider defaultTheme='light'>
                    <TooltipProvider>{children}</TooltipProvider>
                </ThemeProvider>
            </Provider>
        </NuqsAdapter>
    )
}
