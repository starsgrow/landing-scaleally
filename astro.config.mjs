// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://scaleally.co',
  integrations: [],
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
