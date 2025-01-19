import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  css: {
    preprocessorOptions: {
      sass: {
        api: 'modern',
      },
      scss: {
        api: 'modern',
      },
    },
  },
  server: {
    host: process.env.VITE_HOST,
    port: Number(process.env.VITE_PORT ?? 5173),
  },
});
