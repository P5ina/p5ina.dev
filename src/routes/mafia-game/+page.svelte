<script lang="ts">
	import { scrollReveal, stagger } from '$lib/actions/scrollReveal';

	const CDN_URL = 'https://cdn.p5ina.dev';

	// Core game features
	const features = [
		{
			icon: '🃏',
			title: 'Cards',
			description: 'Collect cards with Health, Damage, Durability and Quality stats'
		},
		{
			icon: '✨',
			title: 'Effects',
			description: 'Deathrattle, Rampage, No Attack and more strategic abilities'
		},
		{
			icon: '🎒',
			title: 'Inventory',
			description: 'Unlimited storage with a focused 5-card battle deck'
		},
		{
			icon: '🌍',
			title: 'World',
			description: 'Point-and-click exploration across procedural planets'
		},
		{
			icon: '⚔️',
			title: 'Combat',
			description: 'Auto-battler mechanics with tactical card positioning'
		}
	];

	// Video sections showcasing different game aspects
	const videoSections = [
		{
			title: 'Lootboxes',
			subtitle: 'Open Cases',
			description:
				'Discover rare cards in procedurally generated lootboxes. Each case contains unique rewards based on difficulty and region.',
			video: `${CDN_URL}/videos/clip-1.mp4`
		},
		{
			title: 'Battles',
			subtitle: 'Auto Combat',
			description:
				'Watch your carefully assembled deck fight in real-time. Cards attack in turns based on positioning and speed stats.',
			video: `${CDN_URL}/videos/clip-4.mp4`
		},
		{
			title: 'Movement',
			subtitle: 'World Exploration',
			description:
				'Navigate between points of interest on each planet. Discover dungeons, shops, and mysterious encounters.',
			video: `${CDN_URL}/videos/clip-5.mp4`
		},
		{
			title: 'Spawn Region',
			subtitle: 'Choose Your Start',
			description:
				'Select your starting region with unique challenges and rewards. Each region offers different card types and difficulties.',
			video: `${CDN_URL}/videos/clip-2.mp4`
		},
		{
			title: 'Inventory & Deck',
			subtitle: 'Card Management',
			description:
				'Manage unlimited card storage while crafting the perfect 5-card battle deck. Upgrade, enchant, and combine cards.',
			video: `${CDN_URL}/videos/clip-3.mp4`
		}
	];

	// Card rarity system
	const cardRarities = [
		{ name: 'Common', color: 'from-gray-400 to-gray-600', borderColor: 'border-gray-500' },
		{ name: 'Uncommon', color: 'from-green-400 to-green-600', borderColor: 'border-green-500' },
		{ name: 'Rare', color: 'from-blue-400 to-blue-600', borderColor: 'border-blue-500' },
		{ name: 'Epic', color: 'from-purple-400 to-purple-600', borderColor: 'border-purple-500' },
		{
			name: 'Legendary',
			color: 'from-yellow-400 to-orange-500',
			borderColor: 'border-yellow-500'
		}
	];

	const cardStats = ['Health', 'Damage', 'Durability', 'Quality'];
</script>

<svelte:head>
	<title>Mafia Game - Card Autobattler Game</title>
	<meta
		name="description"
		content="Mafia Game is a card-based autobattler where strategy meets chaos. Collect cards, build your deck, and dominate the battlefield."
	/>
</svelte:head>

<main class="min-h-screen overflow-x-hidden bg-black text-white">
	<!-- Hero Section -->
	<section class="relative flex min-h-screen items-center justify-center overflow-hidden">
		<!-- Animated background gradient -->
		<div class="absolute inset-0 opacity-30">
			<div
				class="animate-gradient-shift absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-[120px]"
			></div>
			<div
				class="animate-gradient-shift-delayed absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-purple-600 to-red-600 blur-[120px]"
			></div>
		</div>

		<div class="container relative z-10 mx-auto max-w-5xl px-6">
			<div class="space-y-8 text-center">
				<!-- Development Badge -->
				<div class="flex justify-center">
					<span
						class="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-400"
					>
						<span class="relative flex h-2 w-2">
							<span
								class="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"
							></span>
							<span class="relative inline-flex h-2 w-2 rounded-full bg-yellow-500"></span>
						</span>
						In Development
					</span>
				</div>

				<!-- Game Title -->
				<div class="overflow-hidden">
					<h1 class="animate-slide-up text-7xl font-bold tracking-tight md:text-9xl">
						<span
							class="bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent"
						>
							Mafia Game
						</span>
					</h1>
				</div>

				<!-- Elegant divider -->
				<div class="flex items-center justify-center gap-4">
					<div
						class="animate-expand-left h-px w-16 bg-gradient-to-r from-transparent to-white/50"
					></div>
					<div class="animate-fade-in-delayed h-2 w-2 rotate-45 bg-white/80"></div>
					<div
						class="animate-expand-right h-px w-16 bg-gradient-to-l from-transparent to-white/50"
					></div>
				</div>

				<!-- Tagline -->
				<div class="animate-fade-in-slow">
					<p class="text-xl text-gray-400 md:text-2xl">
						A card-based autobattler where strategy meets chaos
					</p>
				</div>
			</div>
		</div>

		<!-- Scroll indicator -->
		<div class="absolute bottom-8 left-1/2 -translate-x-1/2">
			<div class="animate-bounce-slow flex flex-col items-center gap-2 text-gray-500">
				<span class="text-xs uppercase tracking-widest">Scroll</span>
				<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</div>
		</div>
	</section>

	<!-- Feature Overview Section -->
	<section class="py-32">
		<div class="container mx-auto max-w-5xl px-6">
			<div class="mb-16 text-center" use:scrollReveal>
				<span class="mb-4 inline-block text-sm uppercase tracking-widest text-gray-500"
					>Core Features</span
				>
				<h2 class="text-4xl font-bold md:text-5xl">
					<span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
						Game Mechanics
					</span>
				</h2>
			</div>

			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
				{#each features as feature, i}
					<div
						use:scrollReveal={{ delay: stagger(i, 100), origin: 'bottom', scale: 0.95 }}
						class="group rounded-xl border border-white/5 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-gray-900/80"
					>
						<div
							class="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
						></div>
						<div class="relative">
							<div class="mb-4 text-4xl">{feature.icon}</div>
							<h3 class="mb-2 text-lg font-semibold">{feature.title}</h3>
							<p class="text-sm text-gray-500">{feature.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Video Sections -->
	{#each videoSections as section, i}
		<section class="py-32 {i % 2 === 1 ? 'bg-gray-900/30' : ''}">
			<div class="container mx-auto max-w-5xl px-6">
				<div
					class="grid items-center gap-12 lg:grid-cols-2 {i % 2 === 1
						? 'lg:grid-flow-col-dense'
						: ''}"
				>
					<!-- Video Side -->
					<div
						use:scrollReveal={{ origin: i % 2 === 0 ? 'left' : 'right', duration: 1000 }}
						class={i % 2 === 1 ? 'lg:col-start-2' : ''}
					>
						<div class="relative overflow-hidden rounded-2xl border border-white/10">
							<!-- svelte-ignore a11y_media_has_caption -->
							<video
								src={section.video}
								autoplay
								loop
								muted
								playsinline
								class="w-full"
							></video>
							<div
								class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
							></div>
						</div>
					</div>

					<!-- Text Side -->
					<div
						use:scrollReveal={{
							origin: i % 2 === 0 ? 'right' : 'left',
							duration: 1000,
							delay: 200
						}}
						class={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
					>
						<span class="mb-2 inline-block text-sm uppercase tracking-widest text-gray-500">
							{section.subtitle}
						</span>
						<h2 class="mb-6 text-4xl font-bold md:text-5xl">
							<span
								class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
							>
								{section.title}
							</span>
						</h2>
						<p class="text-lg leading-relaxed text-gray-400">
							{section.description}
						</p>
					</div>
				</div>
			</div>
		</section>
	{/each}

	<!-- Card Showcase Section -->
	<section class="py-32">
		<div class="container mx-auto max-w-5xl px-6">
			<div class="mb-16 text-center" use:scrollReveal>
				<span class="mb-4 inline-block text-sm uppercase tracking-widest text-gray-500"
					>Card System</span
				>
				<h2 class="text-4xl font-bold md:text-5xl">Build Your Deck</h2>
				<p class="mx-auto mt-4 max-w-2xl text-gray-400">
					Every card has unique stats and abilities. Collect, upgrade, and combine cards to create
					the ultimate battle deck.
				</p>
			</div>

			<!-- Rarity Display -->
			<div class="mb-12 flex flex-wrap justify-center gap-4" use:scrollReveal={{ delay: 200 }}>
				{#each cardRarities as rarity, i}
					<div
						use:scrollReveal={{ delay: stagger(i, 100), scale: 0.9 }}
						class="relative overflow-hidden rounded-lg border {rarity.borderColor} bg-gray-900/50 px-6 py-4 backdrop-blur-sm transition-all duration-300 hover:scale-105"
					>
						<div class="absolute inset-0 bg-gradient-to-br {rarity.color} opacity-10"></div>
						<span
							class="relative bg-gradient-to-r {rarity.color} bg-clip-text font-medium text-transparent"
						>
							{rarity.name}
						</span>
					</div>
				{/each}
			</div>

			<!-- Stats Preview -->
			<div class="mx-auto max-w-lg" use:scrollReveal={{ delay: 400 }}>
				<div class="rounded-xl border border-white/5 bg-gray-900/50 p-6 backdrop-blur-sm">
					<h3 class="mb-4 text-center text-lg font-semibold">Card Stats</h3>
					<div class="space-y-3">
						{#each cardStats as stat, i}
							<div
								class="flex items-center justify-between border-b border-white/5 pb-3 last:border-0"
							>
								<span class="text-gray-300">{stat}</span>
								<div class="flex gap-1">
									{#each Array(5) as _, j}
										<div
											class="h-2 w-6 rounded-full {j < 3 + (i % 2) ? 'bg-blue-500' : 'bg-gray-700'}"
										></div>
									{/each}
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="border-t border-white/5 py-8">
		<div class="container mx-auto max-w-5xl px-6">
			<div
				class="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row"
			>
				<p>Mafia Game - A P5ina Game</p>
				<a
					href="/"
					class="group inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
				>
					<svg
						class="h-4 w-4 transition-transform group-hover:-translate-x-1"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
					Back to Home
				</a>
			</div>
		</div>
	</footer>
</main>

<style>
	/* Custom animations */
	@keyframes slide-up {
		from {
			opacity: 0;
			transform: translateY(60px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes expand-left {
		from {
			width: 0;
			opacity: 0;
		}
		to {
			width: 4rem;
			opacity: 1;
		}
	}

	@keyframes expand-right {
		from {
			width: 0;
			opacity: 0;
		}
		to {
			width: 4rem;
			opacity: 1;
		}
	}

	@keyframes gradient-shift {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		50% {
			transform: translate(50px, 30px) scale(1.1);
		}
	}

	@keyframes bounce-slow {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(10px);
		}
	}

	.animate-slide-up {
		animation: slide-up 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
	}

	.animate-fade-in-slow {
		animation: fade-in 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards;
		opacity: 0;
	}

	.animate-fade-in-delayed {
		animation: fade-in 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s forwards;
		opacity: 0;
	}

	.animate-expand-left {
		animation: expand-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s forwards;
		width: 0;
	}

	.animate-expand-right {
		animation: expand-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s forwards;
		width: 0;
	}

	.animate-gradient-shift {
		animation: gradient-shift 15s ease-in-out infinite;
	}

	.animate-gradient-shift-delayed {
		animation: gradient-shift 15s ease-in-out infinite;
		animation-delay: -7.5s;
	}

	.animate-bounce-slow {
		animation: bounce-slow 2s ease-in-out infinite;
	}

	/* Container utility */
	.container {
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		padding-left: 1rem;
		padding-right: 1rem;
	}

	@media (min-width: 640px) {
		.container {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}
	}

	@media (min-width: 1024px) {
		.container {
			padding-left: 2rem;
			padding-right: 2rem;
		}
	}
</style>
