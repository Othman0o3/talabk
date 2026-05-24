import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic' // Automatically handles JSX without needing "import React" everywhere
    })
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx', // Fallback support for any plain .js files containing JSX
      },
    },
  },
})