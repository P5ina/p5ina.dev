<script lang="ts">
	import type { BlogPostMetadata } from '$lib/types/blog';

	let { post }: { post: BlogPostMetadata } = $props();

	function formatDate(dateString: string): string {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<article class="rounded-lg border border-gray-800 bg-gray-900 p-6 transition-colors hover:border-gray-700">
	<a href="/blog/{post.slug}" class="block space-y-4">
		<time class="text-sm text-gray-500">{formatDate(post.date)}</time>
		<h2 class="text-xl font-semibold text-white hover:text-gray-300">{post.title}</h2>
		<p class="text-gray-400">{post.description}</p>
		<span class="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-white">
			Read more
			<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
			</svg>
		</span>
	</a>
</article>
