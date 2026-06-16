<script lang="ts">
	import { IsInViewport } from 'runed';
	import type { Snippet } from 'svelte';
	import { Motion } from 'svelte-motion';

	let {
		children,
		delay = 0,
		className = ''
	}: { children: Snippet; delay?: number; className?: string } = $props();

	let elem = $state<HTMLElement>();
	const inViewport = new IsInViewport(() => elem, {
		scrollMargin: '-80px',
		once: true
	});
</script>

<Motion
	initial={{ opacity: 0, y: 40 }}
	animate={inViewport.current ? { opacity: 1, y: 0 } : {}}
	transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
	let:motion
>
	<div bind:this={elem} class={className} use:motion>
		{@render children()}
	</div>
</Motion>
