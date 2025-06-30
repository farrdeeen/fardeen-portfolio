import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Optional if you're having tsconfig path issues:
  // root: './',
  // build: {
  //   outDir: 'dist'
  // }
});
