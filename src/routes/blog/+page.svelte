<script lang="ts">
	import BlogPostCard from '$lib/components/BlogPostCard.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Blog - P5ina</title>
	<meta name="description" content="Articles about game development, programming, and more" />
</svelte:head>

<main class="min-h-screen bg-black text-white">
	<section class="container mx-auto max-w-4xl px-6 py-24">
		<div class="mb-12 space-y-4">
			<a href="/" class="inline-flex items-center gap-2 text-gray-400 hover:text-white">
				<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
				Back to home
			</a>
			<h1 class="text-4xl font-bold md:text-5xl">Blog</h1>
			<p class="text-lg text-gray-400">Thoughts on game development, programming, and more</p>
		</div>

		{#if data.posts.length > 0}
			<div class="space-y-6">
				{#each data.posts as post}
					<BlogPostCard {post} />
				{/each}
			</div>
		{:else}
			<p class="text-gray-500">No blog posts yet. Check back soon!</p>
		{/if}
	</section>
</main>
