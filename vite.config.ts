import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib'),
			$src: path.resolve('./src'),
			$components: path.resolve('./src/lib/components'),
			$config: path.resolve('./src/config')
		}
	}
});
