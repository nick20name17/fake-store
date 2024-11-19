import { NuqsAdapter } from 'nuqs/adapters/react'
import { type PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import { ThemeProvider } from './theme-provider'
import { store } from '@/store'

export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <NuqsAdapter>
            <Provider store={store}>
                <ThemeProvider defaultTheme='light'>{children}</ThemeProvider>
            </Provider>
        </NuqsAdapter>
    )
}
