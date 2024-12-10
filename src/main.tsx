import { disableReactDevTools } from '@fvilers/disable-react-devtools'
import { createRoot } from 'react-dom/client'

import { App } from '@/app'
import '@/index.css'
import '@/lib/i18n'
import { Providers } from '@/provider'

if (process.env.NODE_ENV === 'production') {
    disableReactDevTools()
}

createRoot(document.getElementById('root')!).render(
    <Providers>
        <App />
    </Providers>
)
