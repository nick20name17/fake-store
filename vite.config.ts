import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
        define: {
            'process.env': env,
            __APP_ENV__: process.env.VITE_VERCEL_ENV
        },
        plugins: [react()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        }
    }
})
