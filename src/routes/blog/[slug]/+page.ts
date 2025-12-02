import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, url }) => {
	try {
		const post = await import(`../../../content/blog/${params.slug}.md`);
		return {
			content: post.default,
			metadata: post.metadata,
			slug: params.slug,
			url: url.href
		};
	} catch {
		throw error(404, `Blog post "${params.slug}" not found`);
	}
};
