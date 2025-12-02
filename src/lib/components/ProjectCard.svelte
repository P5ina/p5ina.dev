<script lang="ts">
	import { scrollReveal } from '$lib/actions/scrollReveal';

	interface Props {
		title: string;
		description: string;
		video?: string | null;
		image?: string | null;
		tags: string[];
		link: string;
		delay?: number;
	}

	let { title, description, video, image, tags, link, delay = 0 }: Props = $props();

	let videoRef: HTMLVideoElement | null = $state(null);
	let isHovering = $state(false);

	function handleMouseEnter() {
		isHovering = true;
		if (videoRef) {
			videoRef.play();
		}
	}

	function handleMouseLeave() {
		isHovering = false;
		// Wait for image fade-in (300ms) before stopping video
		setTimeout(() => {
			if (videoRef && !isHovering) {
				videoRef.pause();
				videoRef.currentTime = 0;
			}
		}, 300);
	}
</script>

<a
	href={link}
	use:scrollReveal={{ delay, scale: 0.95 }}
	class="group relative overflow-hidden rounded-2xl border border-white/5 bg-gray-900/30 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
>
	<!-- Project video/image preview -->
	<div class="relative aspect-video overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
		{#if video}
			<video
				bind:this={videoRef}
				src={video}
				loop
				muted
				playsinline
				class="h-full w-full object-cover"
				class:hidden={!isHovering}
			></video>
			{#if image}
				<img
					src={image}
					alt={title}
					class="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
					class:opacity-0={isHovering}
				/>
			{/if}
		{:else if image}
			<img
				src={image}
				alt={title}
				class="h-full w-full object-cover"
			/>
		{:else}
			<div class="absolute inset-0 flex items-center justify-center">
				<div class="text-6xl opacity-20">🎮</div>
			</div>
		{/if}
		<div
			class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"
		></div>
	</div>

	<div class="p-6">
		<h3 class="mb-2 text-xl font-semibold transition-colors group-hover:text-blue-400">
			{title}
		</h3>
		<p class="mb-4 text-sm text-gray-500">{description}</p>
		<div class="flex flex-wrap gap-2">
			{#each tags as tag}
				<span class="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400">{tag}</span>
			{/each}
		</div>
	</div>

	<!-- Hover arrow -->
	<div
		class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 opacity-0 transition-all duration-300 group-hover:opacity-100"
	>
		<svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
		</svg>
	</div>
</a>
