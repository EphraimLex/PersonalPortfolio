import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Configure React and the GitHub Pages website path.
export default defineConfig({
  plugins: [react()],

  // Must match the GitHub repository name, including capital letters.
  base: '/PersonalPortfolio/',
})
