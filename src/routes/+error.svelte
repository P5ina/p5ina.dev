<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} - Page Not Found</title>
</svelte:head>

<main class="flex min-h-screen items-center justify-center bg-black text-white">
	<!-- Background gradient -->
	<div class="absolute inset-0 opacity-20">
		<div
			class="animate-gradient-shift absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-red-600 to-purple-600 blur-[150px]"
		></div>
	</div>

	<div class="relative z-10 px-6 text-center">
		<!-- Error code -->
		<h1 class="mb-4 text-[10rem] font-bold leading-none tracking-tight md:text-[14rem]">
			<span class="bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
				{$page.status}
			</span>
		</h1>

		<!-- Divider -->
		<div class="mb-8 flex items-center justify-center gap-4">
			<div class="h-px w-16 bg-gradient-to-r from-transparent to-white/50"></div>
			<div class="h-2 w-2 rotate-45 bg-white/80"></div>
			<div class="h-px w-16 bg-gradient-to-l from-transparent to-white/50"></div>
		</div>

		<!-- Message -->
		<p class="mb-2 text-2xl font-light text-gray-300 md:text-3xl">
			{$page.status === 404 ? 'Page Not Found' : 'Something went wrong'}
		</p>
		<p class="mb-12 text-gray-500">
			{$page.error?.message || "The page you're looking for doesn't exist or has been moved."}
		</p>

		<!-- Back home button -->
		<a
			href="/"
			class="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
		>
			<svg
				class="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
			<span>Back to Home</span>
		</a>
	</div>
</main>

<style>
	@keyframes gradient-shift {
		0%,
		100% {
			transform: translate(-50%, -50%) scale(1);
		}
		50% {
			transform: translate(-50%, -50%) scale(1.1);
		}
	}

	.animate-gradient-shift {
		animation: gradient-shift 15s ease-in-out infinite;
	}
</style>
