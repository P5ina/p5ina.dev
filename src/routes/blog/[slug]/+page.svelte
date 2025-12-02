<script lang="ts">
	let { data } = $props();

	function formatDate(dateString: string): string {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>{data.metadata.title} - P5ina</title>
	<meta name="description" content={data.metadata.description} />

	<!-- Open Graph -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.metadata.title} />
	<meta property="og:description" content={data.metadata.description} />
	<meta property="og:url" content={data.url} />
	<meta property="og:site_name" content="P5ina" />
	{#if data.metadata.image}
		<meta property="og:image" content={data.metadata.image} />
	{/if}

	<!-- Article metadata -->
	<meta property="article:published_time" content={new Date(data.metadata.date).toISOString()} />
	<meta property="article:author" content="P5ina" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={data.metadata.title} />
	<meta name="twitter:description" content={data.metadata.description} />
	{#if data.metadata.image}
		<meta name="twitter:image" content={data.metadata.image} />
	{/if}
</svelte:head>

<main class="min-h-screen bg-black text-white">
	<article class="container mx-auto max-w-3xl px-6 py-24">
		<header class="mb-12 space-y-4">
			<a href="/blog" class="inline-flex items-center gap-2 text-gray-400 hover:text-white">
				<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
				Back to blog
			</a>
			<h1 class="text-4xl font-bold md:text-5xl">{data.metadata.title}</h1>
			<time class="block text-gray-500">{formatDate(data.metadata.date)}</time>
		</header>

		<div class="prose">
			<data.content />
		</div>
	</article>
</main>

<style>
	:global(.prose) {
		color: #d1d5db;
		line-height: 1.75;
	}

	:global(.prose h2) {
		color: white;
		font-size: 1.5rem;
		font-weight: 700;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	:global(.prose h3) {
		color: white;
		font-size: 1.25rem;
		font-weight: 600;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}

	:global(.prose p) {
		margin-bottom: 1.25rem;
	}

	:global(.prose a) {
		color: #60a5fa;
		text-decoration: underline;
	}

	:global(.prose a:hover) {
		color: #93c5fd;
	}

	:global(.prose code) {
		background-color: #1f2937;
		padding: 0.125rem 0.375rem;
		border-radius: 0.25rem;
		font-size: 0.875rem;
	}

	:global(.prose pre) {
		background-color: #0d1117;
		border: 1px solid #374151;
		border-radius: 0.5rem;
		padding: 1rem;
		overflow-x: auto;
		margin: 1.5rem 0;
	}

	:global(.prose pre code) {
		background-color: transparent;
		padding: 0;
		font-size: 0.875rem;
	}

	:global(.prose ul) {
		list-style-type: disc;
		padding-left: 1.5rem;
		margin-bottom: 1.25rem;
	}

	:global(.prose ol) {
		list-style-type: decimal;
		padding-left: 1.5rem;
		margin-bottom: 1.25rem;
	}

	:global(.prose li) {
		margin-bottom: 0.5rem;
	}

	:global(.prose blockquote) {
		border-left: 4px solid #374151;
		padding-left: 1rem;
		font-style: italic;
		color: #9ca3af;
	}
</style>
