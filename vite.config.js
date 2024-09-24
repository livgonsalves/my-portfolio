import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  base: 'my-portfolio', // Replace 'repo-name' with the actual name of your GitHub repository
  plugins: [react()],
};
