<script lang="ts">
	import { scrollReveal, stagger } from '$lib/actions/scrollReveal';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import godotIcon from '$lib/images/godotengine.svg?raw';
	import unityIcon from '$lib/images/unity.svg?raw';
	import swiftIcon from '$lib/images/swift.svg?raw';

	const CDN_URL = 'https://cdn.p5ina.dev';

	// Projects data - add video property for video previews
	const projects = [
		{
			title: 'Logi.Charm',
			description: 'Funny little puzzle game about logic gates.',
			video: `${CDN_URL}/projects/logi-charm.mp4`,
			image: `${CDN_URL}/projects/logi-charm.png`,
			tags: ['Godot', 'GDScript', 'Web'],
			link: 'https://p5ina.itch.io/logi-charm'
		},
		{
			title: 'ESC',
			description: 'Puzzle game about the control flow, with hidden twist.',
			video: `${CDN_URL}/projects/esc.mp4`,
			image: `${CDN_URL}/projects/esc.png`,
			tags: ['Godot', 'GDScript', 'Web'],
			link: 'https://p5ina.itch.io/logi-charm'
		},
		{
			title: 'Package',
			description: 'GPS game about building logistics empire.',
			video: `${CDN_URL}/projects/package.mp4`,
			image: `${CDN_URL}/projects/package.jpg`,
			tags: ['Unity', 'C#', 'iOS', 'Android'],
			link: 'https://package-landing.vercel.app'
		},
	];

	// Current status
	const currentStatus = {
		project: 'New logistics game',
		description: 'Working on a new game inspired by Package',
		status: 'In Development'
	};

	// Timeline data
	const timeline = [
		{
			year: '2017',
			title: 'Started Game Development',
			description: 'Began learning game development with basic engines and tutorials'
		},
		{
			year: '2019',
			title: 'First Published Game',
			description: 'Released my first game on Android, built with Unity'
		},
		{
			year: '2021',
			title: 'Package Released',
			description: 'Launched Package on April 13, reaching 1000 monthly users'
		},
		{
			year: '2025',
			title: 'Professional Freelancing',
			description: 'Started taking freelance projects on Fiverr and Upwork'
		}
	];

	// Technologies data
	const technologies = [
		{
			name: 'Godot Engine',
			description: 'Advanced experience in GDScript and C#',
			color: 'bg-blue-600',
			icon: godotIcon
		},
		{
			name: 'Unity Engine',
			description: 'Proficient in C# and Unity ecosystem',
			color: 'bg-gray-700',
			icon: unityIcon
		},
		{
			name: 'Swift',
			description: 'iOS and macOS app development',
			color: 'bg-gray-800',
			icon: swiftIcon
		}
	];
</script>

<svelte:head>
	<title>P5ina - Game Developer</title>
	<meta
		name="description"
		content="Timur Turatbekov (P5ina) - Game Developer with 8 years of experience in Godot and Unity engines"
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
				class="animate-gradient-shift-delayed absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-[120px]"
			></div>
		</div>

		<div class="container relative z-10 mx-auto max-w-5xl px-6">
			<div class="space-y-8 text-center">
				<!-- Animated name reveal -->
				<div class="overflow-hidden">
					<h1 class="animate-slide-up text-7xl font-bold tracking-tight md:text-9xl">
						<span class="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
							P5ina
						</span>
					</h1>
				</div>

				<!-- Elegant divider -->
				<div class="flex items-center justify-center gap-4">
					<div class="animate-expand-left h-px w-16 bg-gradient-to-r from-transparent to-white/50"></div>
					<div class="animate-fade-in-delayed h-2 w-2 rotate-45 bg-white/80"></div>
					<div class="animate-expand-right h-px w-16 bg-gradient-to-l from-transparent to-white/50"></div>
				</div>

				<div class="animate-fade-in-slow space-y-3">
					<h2 class="text-2xl font-light tracking-wide text-gray-300 md:text-3xl">
						Timur Turatbekov
					</h2>
					<p class="text-lg tracking-widest text-gray-500 uppercase">Game Developer</p>
				</div>

				<div
					class="animate-fade-in-delayed flex flex-col items-center gap-4 pt-8 sm:flex-row sm:justify-center"
				>
					<a
						href="#contact"
						class="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 font-medium text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
					>
						<span class="relative z-10">Get In Touch</span>
						<svg
							class="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</a>
					<a
						href="/blog"
						class="group inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/5"
					>
						<span>Read Blog</span>
						<svg
							class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>

		<!-- Scroll indicator -->
		<div class="absolute bottom-8 left-1/2 -translate-x-1/2">
			<div class="animate-bounce-slow flex flex-col items-center gap-2 text-gray-500">
				<span class="text-xs tracking-widest uppercase">Scroll</span>
				<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			</div>
		</div>
	</section>

	<!-- Status Section -->
	<section class="border-b border-white/5 py-6">
		<div class="container mx-auto max-w-5xl px-6">
			<div
				use:scrollReveal={{ duration: 800 }}
				class="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-6 py-4 backdrop-blur-sm sm:flex-row"
			>
				<div class="flex items-center gap-4">
					<div class="relative flex h-3 w-3">
						<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
						<span class="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
					</div>
					<div>
						<p class="text-sm text-gray-400">Currently working on</p>
						<p class="font-medium text-white">{currentStatus.project}</p>
					</div>
				</div>
				<div class="flex items-center gap-3">
					<span class="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
						{currentStatus.status}
					</span>
					<span class="text-sm text-gray-500">{currentStatus.description}</span>
				</div>
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section id="about" class="relative py-32">
		<div class="container mx-auto max-w-5xl px-6">
			<div class="grid items-center gap-16 lg:grid-cols-2">
				<div use:scrollReveal={{ origin: 'left', duration: 1000 }}>
					<span class="mb-4 inline-block text-sm tracking-widest text-gray-500 uppercase">About Me</span>
					<h2 class="mb-8 text-4xl font-bold leading-tight md:text-5xl">
						Crafting Digital<br />
						<span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
							>Experiences</span
						>
					</h2>
					<div class="space-y-6 text-lg leading-relaxed text-gray-400">
						<p>
							I'm a passionate game developer with <span class="font-medium text-white">8 years of experience</span>
							creating interactive experiences. I specialize in bringing creative visions to life through
							code and design.
						</p>
						<p>
							My expertise spans multiple game engines and platforms, with a focus on creating
							engaging gameplay mechanics and polished user experiences.
						</p>
					</div>
				</div>

				<div use:scrollReveal={{ origin: 'right', duration: 1000, delay: 200 }}>
					<div class="relative">
						<!-- Decorative elements -->
						<div class="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl"></div>
						<div class="relative rounded-2xl border border-white/10 bg-gray-900/80 p-8 backdrop-blur-sm">
							<h3 class="mb-8 text-xl font-semibold">Experience Overview</h3>
							<div class="space-y-6">
								<div class="group flex items-center justify-between border-b border-white/5 pb-4">
									<span class="text-gray-300 transition-colors group-hover:text-white">Game Development</span>
									<span class="rounded-full bg-white/10 px-4 py-1 text-sm text-white">8+ years</span>
								</div>
								<div class="group flex items-center justify-between border-b border-white/5 pb-4">
									<span class="text-gray-300 transition-colors group-hover:text-white">Engines</span>
									<span class="rounded-full bg-white/10 px-4 py-1 text-sm text-white">Godot, Unity</span>
								</div>
								<div class="group flex items-center justify-between border-b border-white/5 pb-4">
									<span class="text-gray-300 transition-colors group-hover:text-white">Projects Completed</span>
									<span class="rounded-full bg-white/10 px-4 py-1 text-sm text-white">10+</span>
								</div>
								<div class="group flex items-center justify-between">
									<span class="text-gray-300 transition-colors group-hover:text-white">Focus Areas</span>
									<span class="rounded-full bg-white/10 px-4 py-1 text-sm text-white">Prototyping, Full Dev</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Technologies Section -->
	<section class="relative py-32">
		<div class="container mx-auto max-w-5xl px-6">
			<div class="mb-16 text-center" use:scrollReveal>
				<span class="mb-4 inline-block text-sm tracking-widest text-gray-500 uppercase">Skills</span>
				<h2 class="text-4xl font-bold md:text-5xl">Technologies</h2>
			</div>

			<div class="flex flex-wrap justify-center gap-6">
				{#each technologies as tech, i}
					<div
						use:scrollReveal={{ delay: stagger(i, 100), origin: 'bottom', scale: 0.95 }}
						class="group relative w-full overflow-hidden rounded-xl border border-white/5 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-gray-900/80 sm:w-64"
					>
						<div
							class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
						></div>
						<div class="relative">
							<div class="tech-icon mb-4 flex h-12 w-12 items-center justify-center rounded-lg {tech.color}">
								{@html tech.icon}
							</div>
							<h3 class="mb-2 text-lg font-semibold">{tech.name}</h3>
							<p class="text-sm text-gray-500">{tech.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Projects Section -->
	<section id="projects" class="relative py-32">
		<div class="container mx-auto max-w-6xl px-6">
			<div class="mb-16 text-center" use:scrollReveal>
				<span class="mb-4 inline-block text-sm tracking-widest text-gray-500 uppercase">Portfolio</span>
				<h2 class="text-4xl font-bold md:text-5xl">Featured Projects</h2>
			</div>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each projects as project, i}
					<ProjectCard
						title={project.title}
						description={project.description}
						video={project.video}
						image={project.image}
						tags={project.tags}
						link={project.link}
						delay={stagger(i, 150)}
					/>
				{/each}
			</div>

			<div class="mt-12 text-center" use:scrollReveal={{ delay: 400 }}>
				<a
					href="#projects"
					class="group inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
				>
					<span>View All Projects</span>
					<svg
						class="h-4 w-4 transition-transform group-hover:translate-x-1"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</a>
			</div>
		</div>
	</section>

	<!-- Timeline Section -->
	<section id="journey" class="relative py-32">
		<div class="container mx-auto max-w-4xl px-6">
			<div class="mb-16 text-center" use:scrollReveal>
				<span class="mb-4 inline-block text-sm tracking-widest text-gray-500 uppercase">Journey</span>
				<h2 class="text-4xl font-bold md:text-5xl">My Timeline</h2>
			</div>

			<div class="relative">
				<!-- Timeline line -->
				<div class="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:left-1/2"></div>

				{#each timeline as item, i}
					<div
						use:scrollReveal={{ delay: stagger(i, 150), origin: i % 2 === 0 ? 'left' : 'right' }}
						class="relative mb-12 last:mb-0 {i % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:ml-auto'}"
					>
						<!-- Timeline dot -->
						<div
							class="absolute left-8 top-0 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2"
						>
							<div class="h-4 w-4 rounded-full border-2 border-white bg-black"></div>
							<div class="absolute h-4 w-4 animate-ping rounded-full bg-white/30"></div>
						</div>

						<div class="{i % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} ml-16 md:ml-0">
							<div class="rounded-xl border border-white/5 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20">
								<span class="mb-2 inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-blue-400">
									{item.year}
								</span>
								<h3 class="mb-2 text-xl font-semibold">{item.title}</h3>
								<p class="text-gray-500">{item.description}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section id="contact" class="relative py-32">
		<!-- Background gradient -->
		<div class="absolute inset-0 opacity-20">
			<div
				class="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-[150px]"
			></div>
		</div>

		<div class="container relative z-10 mx-auto max-w-4xl px-6">
			<div class="text-center" use:scrollReveal>
				<span class="mb-4 inline-block text-sm tracking-widest text-gray-500 uppercase">Contact</span>
				<h2 class="mb-4 text-4xl font-bold md:text-5xl">Let's Work Together</h2>
				<p class="mx-auto mb-12 max-w-xl text-lg text-gray-400">
					Ready to bring your game idea to life? I'm available for freelance projects and
					collaborations.
				</p>
			</div>

			<div class="flex flex-col justify-center gap-4 sm:flex-row" use:scrollReveal={{ delay: 200 }}>
				<a
					href="https://www.fiverr.com/p5ina_21"
					target="_blank"
					rel="noopener noreferrer"
					class="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-green-600 px-8 py-4 font-medium text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(22,163,74,0.4)]"
				>
					<svg class="h-5 w-5" role="img" viewBox="0 0 24 24" fill="currentColor">
						<path
							d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z"
						/>
					</svg>
					<span>Hire me on Fiverr</span>
				</a>

				<a
					href="https://www.upwork.com/freelancers/~0125b910191564f773"
					target="_blank"
					rel="noopener noreferrer"
					class="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-blue-600 px-8 py-4 font-medium text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
				>
					<svg class="h-5 w-5" role="img" viewBox="0 0 24 24" fill="currentColor">
						<path
							d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"
						/>
					</svg>
					<span>Hire me on Upwork</span>
				</a>
			</div>

			<div class="mt-12 text-center" use:scrollReveal={{ delay: 300 }}>
				<p class="text-gray-500">
					Or reach out directly at
					<a
						href="mailto:timatur242005@gmail.com"
						class="text-white underline decoration-white/20 underline-offset-4 transition-all hover:decoration-white/60"
					>
						timatur242005@gmail.com
					</a>
				</p>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="border-t border-white/5 py-8">
		<div class="container mx-auto max-w-5xl px-6">
			<div class="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
				<p>&copy; {new Date().getFullYear()} P5ina. All rights reserved.</p>
				<div class="flex gap-6">
					<a href="#about" class="transition-colors hover:text-white">About</a>
					<a href="#projects" class="transition-colors hover:text-white">Projects</a>
					<a href="#journey" class="transition-colors hover:text-white">Journey</a>
					<a href="#contact" class="transition-colors hover:text-white">Contact</a>
				</div>
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

	/* Tech icon SVG styling */
	.tech-icon :global(svg) {
		width: 1.5rem;
		height: 1.5rem;
		fill: currentColor;
		color: white;
	}

	/* Smooth scrolling */
	:global(html) {
		scroll-behavior: smooth;
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
