import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  plugins: [
    mdx(),
    react()
  ],
  server: {
    hmr: {
      overlay: false
    }
  },
  base: '/portfolio/', // Use your repo name here  
});