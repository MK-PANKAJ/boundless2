import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VERCEL ? '/' : '/boundless2/',
  plugins: [react()],
  envPrefix: ['VITE_', 'NEXT_PUBLIC_', 'ADMIN_'],
})
