<script lang="ts">
	import { motion } from '@humanspeak/svelte-motion';
	import { IsInViewport } from 'runed';
	import type { Snippet } from 'svelte';

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

<motion.div
	initial={{ y: 40, opacity: 0 }}
	animate={inViewport.current ? { y: 0, opacity: 1 } : {}}
	transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
	class={className}
	style="opacity: {inViewport.current ? '1' : '0'};"
>
	<div bind:this={elem}>
		{@render children()}
	</div>
</motion.div>
