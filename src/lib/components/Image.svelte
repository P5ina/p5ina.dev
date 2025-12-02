<script lang="ts">
	let {
		src,
		alt,
		caption = ''
	}: {
		src: string;
		alt: string;
		caption?: string;
	} = $props();
</script>

<figure class="my-6">
	<img {src} {alt} class="w-full rounded-lg" loading="lazy" />
	{#if caption}
		<figcaption class="mt-2 text-center text-sm text-gray-500">{caption}</figcaption>
	{/if}
</figure>
