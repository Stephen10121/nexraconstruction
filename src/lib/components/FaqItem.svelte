<script lang="ts">
	import { AnimatePresence, motion } from '@humanspeak/svelte-motion';
	import { ChevronDown } from '@lucide/svelte';

	let open = $state(false);
	let { faq }: { faq: { q: string; a: string } } = $props();
</script>

<div class="border-b border-gray-100">
	<button
		class="w-full text-left flex items-center justify-between py-5 gap-4 group"
		onclick={() => (open = !open)}
	>
		<span class="font-semibold text-sm md:text-base" style="color: #141c26">{faq.q}</span>
		<motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
			<ChevronDown size={18} style="color: #f68318; flex-shrink: 0" />
		</motion.div>
	</button>
	<AnimatePresence>
		{#if open}
			<motion.div
				key={faq.q}
				initial={{ height: 0, opacity: 0 }}
				animate={{ height: 'auto', opacity: 1 }}
				exit={{ height: 0, opacity: 0 }}
				transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
				class="overflow-hidden"
			>
				<p class="pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
			</motion.div>
		{/if}
	</AnimatePresence>
</div>
