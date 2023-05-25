import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
//@ts-ignore
import autoprefixer from 'autoprefixer'

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'https://localhost:7249',
                changeOrigin: true,
                secure: false,
                ws: true,
            }
        }
        
    },
    css: {
        postcss: {
            plugins: [
                tailwindcss,
                autoprefixer
            ]
        }
    }
})