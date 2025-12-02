<svelte:head>
	<title>P5ina's Portfolio</title>
	<meta
		name="description"
		content="Timur Turatbekov (P5ina) - Game Developer with 8 years of experience in Godot and Unity engines"
	/>
</svelte:head>

<main class="min-h-screen bg-black text-white">
	<!-- Hero Section -->
	<section class="container mx-auto max-w-4xl px-6 py-32">
		<div class="space-y-8 text-center">
			<div class="space-y-4">
				<h1 class="text-6xl font-bold tracking-tight md:text-8xl">P5ina</h1>
				<div class="mx-auto h-0.5 w-24 bg-white"></div>
			</div>

			<div class="space-y-2">
				<h2 class="text-xl font-medium text-gray-400 md:text-2xl">Timur Turatbekov</h2>
				<p class="text-lg text-gray-500">Game Developer</p>
			</div>

			<div class="flex flex-col items-center gap-4 pt-8 sm:flex-row sm:justify-center">
				<a
					href="#contact"
					class="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-gray-200"
				>
					Get In Touch
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
					class="inline-flex items-center gap-2 rounded-md border border-gray-700 px-6 py-3 font-medium text-white transition-colors hover:border-gray-500 hover:bg-gray-900"
				>
					Read Blog
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
	</section>

	<!-- About Section -->
	<section id="about" class="border-t border-gray-800">
		<div class="container mx-auto max-w-4xl px-6 py-24">
			<div class="grid items-start gap-16 md:grid-cols-2">
				<div class="space-y-6">
					<h2 class="text-3xl font-bold">About</h2>
					<div class="space-y-4 leading-relaxed text-gray-300">
						<p>
							I'm a passionate game developer with <span class="font-medium text-white"
								>8 years of experience</span
							>
							creating interactive experiences. I specialize in bringing creative visions to life through
							code and design.
						</p>
						<p class="text-gray-400">
							My expertise spans multiple game engines and platforms, with a focus on creating
							engaging gameplay mechanics and polished user experiences.
						</p>
					</div>
				</div>

				<div class="rounded-lg border border-gray-800 bg-gray-900 p-6">
					<h3 class="mb-6 text-xl font-semibold">Experience</h3>
					<div class="space-y-4">
						<div
							class="flex items-center justify-between border-b border-gray-800 py-2 last:border-b-0"
						>
							<span class="font-medium">Game Development</span>
							<span class="text-gray-400">8 years</span>
						</div>
						<div
							class="flex items-center justify-between border-b border-gray-800 py-2 last:border-b-0"
						>
							<span class="font-medium">Engines</span>
							<span class="text-gray-400">Godot, Unity</span>
						</div>
						<div class="flex items-center justify-between py-2">
							<span class="font-medium">Focus</span>
							<span class="text-gray-400">Prototyping, Full Dev</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Skills Section -->
	<section class="border-t border-gray-800">
		<div class="container mx-auto max-w-4xl px-6 py-24">
			<div class="space-y-12">
				<h2 class="text-center text-3xl font-bold">Technologies</h2>

				<div class="grid gap-6 md:grid-cols-2">
					<div
						class="rounded-lg border border-gray-800 bg-gray-900 p-8 transition-colors hover:border-gray-700"
					>
						<div class="mb-4 flex items-center gap-4">
							<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
								<svg role="img" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor"
									><path
										d="M9.5598.683c-1.096.244-2.1812.5831-3.1983 1.0951.023.8981.081 1.7582.199 2.6323-.395.253-.81.47-1.178.766-.375.288-.7581.564-1.0971.9011-.6781-.448-1.3962-.869-2.1352-1.2411C1.3532 5.6934.608 6.6186 0 7.6546c.458.7411.936 1.4352 1.4521 2.0942h.014v6.3565c.012 0 .023 0 .035.003l3.8963.376c.204.02.364.184.378.3891l.12 1.7201 3.3994.242.234-1.587c.03-.206.207-.358.415-.358h4.1114c.208 0 .385.152.415.358l.234 1.587 3.3993-.242.12-1.72a.4196.4196 0 01.378-.3891l3.8954-.376c.012 0 .023-.003.035-.003v-.5071h.002V9.7498h.014c.516-.659.994-1.3531 1.4521-2.0942-.608-1.036-1.3541-1.9611-2.1512-2.8192-.739.372-1.4571.793-2.1352 1.2411-.339-.337-.721-.613-1.096-.901-.369-.296-.7841-.5131-1.1781-.7661.117-.8741.175-1.7342.199-2.6323-1.0171-.512-2.1012-.851-3.1983-1.095-.438.736-.838 1.533-1.1871 2.3121-.414-.069-.829-.094-1.2461-.099h-.016c-.417.005-.832.03-1.2461.099-.349-.779-.749-1.576-1.1881-2.3121l.001-.001zM6.4765 9.9889c1.2971 0 2.3492 1.0511 2.3492 2.3482s-1.052 2.3482-2.3492 2.3482c-1.296 0-2.3482-1.051-2.3482-2.3482 0-1.297 1.0511-2.3482 2.3482-2.3482zm11.049 0c1.296 0 2.3482 1.0511 2.3482 2.3482s-1.0511 2.3482-2.3482 2.3482-2.3492-1.051-2.3492-2.3482c0-1.297 1.051-2.3482 2.3492-2.3482zm-10.824.9301c-.861 0-1.559.698-1.559 1.5591s.698 1.5582 1.559 1.5582c.8611 0 1.5592-.698 1.5592-1.5582 0-.86-.697-1.559-1.5591-1.559zm10.598 0c-.8611 0-1.5582.698-1.5582 1.5591s.697 1.5582 1.5581 1.5582c.8611 0 1.5592-.698 1.5592-1.5582 0-.86-.697-1.559-1.5592-1.559zm-5.2985.453c.417 0 .757.308.757.6871v2.1622c0 .379-.339.687-.757.687s-.756-.308-.756-.687V12.059c0-.379.339-.687.756-.687zM1.4601 16.9464c.002.377.006.789.006.871 0 3.7014 4.6944 5.4795 10.5269 5.5005h.014c5.8325-.02 10.5259-1.7991 10.5259-5.5004 0-.084.005-.495.007-.871l-3.5023.338-.121 1.729a.421.421 0 01-.389.3901l-4.1814.296a.4203.4203 0 01-.415-.358l-.238-1.6141h-3.3863l-.238 1.6141a.4192.4192 0 01-.4451.357l-4.1513-.296c-.208-.015-.375-.181-.389-.389l-.12-1.7292-3.5044-.337z"
									/></svg
								>
							</div>
							<h3 class="text-xl font-semibold">Godot Engine</h3>
						</div>
						<p class="text-gray-400">Advanced experience in GDScript and C#</p>
					</div>

					<div
						class="rounded-lg border border-gray-800 bg-gray-900 p-8 transition-colors hover:border-gray-700"
					>
						<div class="mb-4 flex items-center gap-4">
							<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-700">
								<svg role="img" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
									<path
										d="m12.9288 4.2939 3.7997 2.1929c.1366.077.1415.2905 0 .3675l-4.515 2.6076a.4192.4192 0 0 1-.4246 0L7.274 6.8543c-.139-.0745-.1415-.293 0-.3675l3.7972-2.193V0L1.3758 5.5977V16.793l3.7177-2.1456v-4.3858c-.0025-.1565.1813-.2682.318-.1838l4.5148 2.6076a.4252.4252 0 0 1 .2136.3676v5.2127c.0025.1565-.1813.2682-.3179.1838l-3.7996-2.1929-3.7178 2.1457L12 24l9.6954-5.5977-3.7178-2.1457-3.7996 2.1929c-.1341.082-.3229-.0248-.3179-.1838V13.053c0-.1565.087-.2956.2136-.3676l4.5149-2.6076c.134-.082.3228.0224.3179.1838v4.3858l3.7177 2.1456V5.5977L12.9288 0Z"
									/>
								</svg>
							</div>
							<h3 class="text-xl font-semibold">Unity Engine</h3>
						</div>
						<p class="text-gray-400">Proficient in C# and Unity's ecosystem</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section id="contact" class="border-t border-gray-800">
		<div class="container mx-auto max-w-4xl px-6 py-24">
			<div class="space-y-12 text-center">
				<div class="space-y-4">
					<h2 class="text-3xl font-bold">Let's Work Together</h2>
					<p class="mx-auto max-w-2xl text-gray-400">
						Ready to bring your game idea to life? I'm available for freelance projects.
					</p>
				</div>

				<div class="flex flex-col justify-center gap-4 sm:flex-row">
					<a
						href="https://www.fiverr.com/p5ina_21"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-3 rounded-md bg-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-green-700"
					>
						<svg class="h-5 w-5" role="img" viewBox="0 0 24 24" fill="currentColor">
							<path
								d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z"
							/>
						</svg>
						Hire me on Fiverr
					</a>

					<a
						href="https://www.upwork.com/freelancers/~0125b910191564f773"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-3 rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
					>
						<svg class="h-5 w-5" role="img" viewBox="0 0 24 24" fill="currentColor">
							<path
								d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"
							/>
						</svg>
						Hire me on Upwork
					</a>
				</div>

				<div class="border-t border-gray-800 pt-8">
					<p class="text-gray-500">
						Or reach out directly at
						<a
							href="mailto:timatur242005@gmail.com"
							class="text-white underline decoration-gray-600 transition-colors hover:text-gray-300 hover:decoration-gray-400"
						>
							timatur242005@gmail.com
						</a>
					</p>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
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
