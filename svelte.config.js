import vercel from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		target: 'body',
		adapter: vercel(),
		prerender: {
			entries: [
				// TODO: automatically generate prerender entries
				'/archive/2021/11',
				'/archive/2021/12',
				'/archive/2022/01'
			]
		},
	}
};

export default config;
