import { createRoot } from 'react-dom/client'

import { App } from '@/app'
import '@/index.css'
import '@/lib/i18n'
import { Providers } from '@/provider'

createRoot(document.getElementById('root')!).render(
    <Providers>
        <App />
    </Providers>
)
