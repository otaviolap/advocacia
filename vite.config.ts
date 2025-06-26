import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/advocacia/', // Importante para GitHub Pages
  build: {
    outDir: 'docs'     // Gera na pasta docs
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});