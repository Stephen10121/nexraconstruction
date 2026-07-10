<script lang="ts">
	import { animate } from '@humanspeak/svelte-motion';
	import { IsInViewport, watch } from 'runed';

	let { target, suffix = '' }: { target: number; suffix?: string } = $props();

	let elem = $state<HTMLSpanElement>();
	let count = $state(0);
	const inViewport = new IsInViewport(() => elem);

	watch([() => inViewport, () => target], ([inViewport, target], [_prevAge, _prevName]) => {
		if (!inViewport) return;

		const controls = animate(0, target, {
			duration: 2,
			ease: 'easeOut',
			onUpdate: (v) => (count = Math.round(v))
		});

		return controls.stop;
	});
</script>

<span bind:this={elem}>
	{count}
	{suffix}
</span>
