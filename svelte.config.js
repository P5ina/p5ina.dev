import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { createHighlighter } from 'shiki';

const highlighter = await createHighlighter({
	themes: ['github-dark'],
	langs: ['javascript', 'typescript', 'svelte', 'bash', 'json', 'css', 'html', 'markdown', 'python', 'rust', 'go']
});

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang) => {
			const html = highlighter.codeToHtml(code, {
				lang: lang || 'text',
				theme: 'github-dark'
			});
			return `{@html \`${html.replace(/[{}`]/g, (c) => ({ '{': '&#123;', '}': '&#125;', '`': '&#96;' })[c])}\`}`;
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapter()
	}
};

export default config;
