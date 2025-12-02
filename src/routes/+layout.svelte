<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="relative min-h-screen">
	<div class="neon-grid"></div>
	<div class="noise-overlay min-h-full"></div>
	{@render children()}
</div>
