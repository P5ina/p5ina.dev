<script lang="ts">
	let {
		src = '',
		youtube = '',
		title = 'Video',
		autoplay = false,
		loop = false,
		muted = false
	}: {
		src?: string;
		youtube?: string;
		title?: string;
		autoplay?: boolean;
		loop?: boolean;
		muted?: boolean;
	} = $props();

	function getYouTubeId(url: string): string {
		const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^&?/]+)/);
		return match ? match[1] : url;
	}
</script>

<figure class="my-6 flex justify-center">
	{#if youtube}
		<iframe
			src="https://www.youtube.com/embed/{getYouTubeId(youtube)}{autoplay ? '?autoplay=1' : ''}"
			{title}
			class="aspect-video w-full max-w-2xl rounded-lg"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	{:else if src}
		<!-- svelte-ignore a11y_media_has_caption -->
		<video
			class="max-h-[70vh] max-w-full rounded-lg"
			controls
			autoplay={autoplay}
			loop={loop || autoplay}
			muted={muted || autoplay}
			playsinline
		>
			<source {src} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	{/if}
</figure>
