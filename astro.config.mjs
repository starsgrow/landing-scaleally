// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://scaleally.co',
  integrations: [tailwind()],
  server: {
    host: true,
    port: 4321
  },
  // Add custom routes
  vite: {
    build: {
      rollupOptions: {
        input: {
          landing: 'src/pages/landing.astro'
        }
      }
    }
  }
});
