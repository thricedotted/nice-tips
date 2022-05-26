import vercel from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel(),
		prerender: {
			entries: [
				// TODO: automatically generate prerender months past
				'/archive/2021/11',
				'/archive/2021/12',
				'/archive/2022/01',
				'/archive/2022/02',
				'/archive/2022/03',
				'/archive/2022/04'
			]
		},
	}
};

export default config;
