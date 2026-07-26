import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  envPrefix: ['VITE_', 'NEXT_PUBLIC_', 'ADMIN_', 'CLOUDINARY_'],
})
