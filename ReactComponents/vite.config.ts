/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTest.ts',
  },
  // optimizeDeps: {
  //   include: [
  //     'src/**/*.ts',
  //     'src/**/*.tsx',
  //     'src/**/*.js',
  //     'src/**/*.jsx',
  //     'public/index.html',
  //     'src/**/*.css',
  //     'src/**/*.scss',
  //   ],
  // },
});
