import vercel from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: 'body',

		// that's right! no JS!!! smiling imp emoji!!!
		router: false,
		hydrate: false,

		adapter: vercel()
	}
};

export default config;
