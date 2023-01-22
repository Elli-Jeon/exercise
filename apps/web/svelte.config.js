import adapter from '@sveltejs/adapter-auto';
// import { vitePreprocess } from '@sveltejs/kit/vite';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	// preprocess: vitePreprocess(),
	preprocess: sveltePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			'@routes/*': 'src/routes/*',
			'@components/*': 'src/components/*',
			'@type/*': 'src/types/*',
			'@assets/*': 'src/assets/*'
		}
	}
};

export default config;
