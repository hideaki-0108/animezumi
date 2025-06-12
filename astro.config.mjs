// @ts-check
import {
  defineConfig
} from 'astro/config';
import {
  BASE_PATH
} from './src/assets/js/lib/config';

// https://astro.build/config
export default defineConfig({
  base: BASE_PATH,
  outDir: 'dist/animezumi/',
  build: {
    assets: '_astro'
  }
});