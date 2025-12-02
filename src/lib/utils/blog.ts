import type { BlogPostMetadata, BlogPost } from '$lib/types/blog';

export async function getPosts(): Promise<BlogPostMetadata[]> {
	const posts: BlogPostMetadata[] = [];

	const modules = import.meta.glob<BlogPost>('/src/content/blog/*.md', { eager: true });

	for (const path in modules) {
		const post = modules[path];
		const slug = path.split('/').pop()?.replace('.md', '') ?? '';

		if (post.metadata) {
			posts.push({
				...post.metadata,
				slug
			});
		}
	}

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return posts;
}
