<script lang="ts">
	import FadeUp from '$lib/components/FadeUp.svelte';
	import { LayoutGroup, motion, AnimatePresence } from '@humanspeak/svelte-motion';
	import { ArrowUpRight } from '@lucide/svelte';

	const KITCHEN_IMG =
		'https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
	const BATH_IMG =
		'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
	const BATH2_IMG =
		'https://images.unsplash.com/photo-1682888818704-6dc91e9d7532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
	const BATH3_IMG =
		'https://images.unsplash.com/photo-1564540579594-0930edb6de43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
	const LIVING_IMG =
		'https://images.unsplash.com/photo-1649083048770-82e8ffd80431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
	const LIVING2_IMG =
		'https://images.unsplash.com/photo-1649083048337-4aeb6dda80bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
	const INTERIOR_IMG =
		'https://images.unsplash.com/photo-1618832515490-e181c4794a45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
	const WORKER_IMG =
		'https://images.unsplash.com/photo-1587582423116-ec07293f0395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';

	const CATEGORIES = ['All', 'Kitchen', 'Bathroom', 'Addition', 'Interior', 'Outdoor'];

	const PROJECTS = [
		{
			id: 1,
			title: 'Modern Farmhouse Kitchen',
			location: 'Vancouver, WA',
			year: '2024',
			category: 'Kitchen',
			img: KITCHEN_IMG,
			desc: 'Complete gut renovation with custom white shaker cabinets, quartz waterfall island, and handmade tile backsplash.'
		},
		{
			id: 2,
			title: 'Primary Suite Bathroom',
			location: 'Camas, WA',
			year: '2024',
			category: 'Bathroom',
			img: BATH_IMG,
			desc: 'Spa-inspired master bath with freestanding soaker tub, frameless glass shower, and heated marble floors.'
		},
		{
			id: 3,
			title: 'Open-Plan Living Addition',
			location: 'Battle Ground, WA',
			year: '2023',
			category: 'Addition',
			img: LIVING_IMG,
			desc: '600 sq ft addition connecting kitchen to new great room with 12-foot ceilings and clerestory windows.'
		},
		{
			id: 4,
			title: 'Mid-Century Modern Bath',
			location: 'Washougal, WA',
			year: '2023',
			category: 'Bathroom',
			img: BATH2_IMG,
			desc: 'Green shaker vanity, terracotta hex floors, and brushed gold fixtures in a 1965 ranch home.'
		},
		{
			id: 5,
			title: "Chef's Kitchen Remodel",
			location: 'Vancouver, WA',
			year: '2023',
			category: 'Kitchen',
			img: LIVING2_IMG,
			desc: 'Pro-grade appliances, deep drawer pulls, and a 10-foot island designed for serious cooking.'
		},
		{
			id: 6,
			title: 'Basement Family Room',
			location: 'Ridgefield, WA',
			year: '2023',
			category: 'Interior',
			img: INTERIOR_IMG,
			desc: 'Previously unfinished 1,100 sq ft basement transformed into home theater, game room, and wet bar.'
		},
		{
			id: 7,
			title: 'Guest Bath Renovation',
			location: 'La Center, WA',
			year: '2022',
			category: 'Bathroom',
			img: BATH3_IMG,
			desc: 'Complete overhaul of dated 1980s guest bath — new layout, walk-in shower, and double vanity.'
		},
		{
			id: 8,
			title: 'In-Law Suite Addition',
			location: 'Camas, WA',
			year: '2022',
			category: 'Addition',
			img: WORKER_IMG,
			desc: '850 sq ft attached ADU with private entrance, full kitchen, bedroom, and ADA-compliant bathroom.'
		},
		{
			id: 9,
			title: 'Living Room Refresh',
			location: 'Vancouver, WA',
			year: '2022',
			category: 'Interior',
			img: LIVING_IMG,
			desc: 'New hardwood floors, fireplace surround rebuild, ceiling beams, and crown molding throughout.'
		}
	];

	let activeCategory = $state('All');
	let selected: (typeof PROJECTS)[0] | null = $state(null);

	let filtered = $derived(
		activeCategory === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === activeCategory)
	);
</script>

<div class="overflow-x-hidden">
	<section class="relative h-72 md:h-96 flex items-end overflow-hidden">
		<img
			src={LIVING_IMG}
			alt="Beautiful living space"
			class="absolute inset-0 w-full h-full object-cover"
		/>
		<div
			class="absolute inset-0"
			style="background: linear-gradient(to top, rgba(20,28,38,0.95) 0%, rgba(20,28,38,0.4) 100%)"
		></div>
		<div class="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
			>
				<div class="flex items-center gap-2 mb-3">
					<div class="h-px w-10" style="background-color: #f68318"></div>
					<span class="text-sm font-semibold tracking-widest uppercase" style="color: #f68318"
						>Our Work</span
					>
				</div>
				<h1 class="text-4xl md:text-6xl font-black text-white">Project Gallery</h1>
			</motion.div>
		</div>
	</section>

	<section class="py-10 px-6 border-b border-gray-100">
		<div class="max-w-7xl mx-auto">
			<FadeUp>
				<div class="flex flex-wrap gap-3">
					{#each CATEGORIES as cat (cat)}
						<motion.button
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.97 }}
							onclick={() => (activeCategory = cat)}
							class="px-5 py-2 text-sm font-bold tracking-wide transition-all"
							style="background-color: {activeCategory === cat
								? '#f68318'
								: 'transparent'};color: {activeCategory === cat
								? '#ffffff'
								: '#141c26'};border: 2px solid {activeCategory === cat ? '#f68318' : '#e5e7eb'};"
						>
							{cat}
						</motion.button>
					{/each}
				</div>
			</FadeUp>
		</div>
	</section>

	<section class="py-16 px-6">
		<div class="max-w-7xl mx-auto">
			<LayoutGroup>
				<motion.div layout class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<AnimatePresence mode="popLayout">
						<!-- <AnimatePresence> -->
						{#each filtered as project (project.id)}
							<motion.div
								key="{project.id}projectgridbox"
								layout
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.95 }}
								transition={{ duration: 0.4 }}
								class="group relative overflow-hidden cursor-pointer"
								onclick={() => (selected = project)}
								whileHover={{ y: -4 }}
							>
								<div class="aspect-4/3 overflow-hidden">
									<img
										src={project.img}
										alt={project.title}
										class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
									/>
								</div>
								<div
									class="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									style="background: linear-gradient(to top, rgba(20,28,38,0.96) 0%, transparent 60%)"
								>
									<div
										class="translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
									>
										<span
											class="text-xs font-bold tracking-widest uppercase px-2 py-1 mb-2 inline-block"
											style="background-color: #f68318;color: #fff"
										>
											{project.category}
										</span>
										<h3 class="text-lg font-bold text-white">{project.title}</h3>
										<p class="text-white/60 text-xs mt-1">{project.location} · {project.year}</p>
										<div
											class="flex items-center gap-1 mt-2 text-xs font-bold"
											style="color: #f68318"
										>
											View Project <ArrowUpRight size={12} />
										</div>
									</div>
								</div>
								<div class="p-4 border-t border-gray-100">
									<h3 class="font-bold text-sm" style="color: #141c26">{project.title}</h3>
									<p class="text-xs text-gray-500 mt-0.5">{project.location} · {project.year}</p>
								</div>
							</motion.div>
						{/each}
					</AnimatePresence>
				</motion.div>
			</LayoutGroup>
		</div>
	</section>
	<AnimatePresence>
		{#if selected}
			<motion.div
				key="selectedproject"
				class="fixed inset-0 z-50 flex items-center justify-center p-4"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onclick={() => (selected = null)}
			>
				<div class="absolute inset-0" style="background-color: rgba(20,28,38,0.9)"></div>
				<motion.div
					class="relative z-10 bg-white max-w-3xl w-full overflow-hidden"
					initial={{ scale: 0.9, y: 30 }}
					animate={{ scale: 1, y: 0 }}
					exit={{ scale: 0.9, y: 30 }}
					transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
					onclick={(
						e: MouseEvent & {
							currentTarget: EventTarget & HTMLDivElement;
						}
					) => e.stopPropagation()}
				>
					<img src={selected?.img} alt={selected?.title} class="w-full aspect-video object-cover" />
					<div class="p-8">
						<span
							class="text-xs font-bold tracking-widest uppercase px-2 py-1 mb-4 inline-block"
							style="background-color: #f68318;color: #fff"
						>
							{selected?.category}
						</span>
						<h2 class="text-3xl font-black mb-1" style="color: #141c26">{selected?.title}</h2>
						<p class="text-gray-500 text-sm mb-4">{selected?.location} · {selected?.year}</p>
						<p class="text-gray-600 leading-relaxed">{selected?.desc}</p>
						<button
							class="mt-6 px-6 py-3 font-bold text-sm text-white hover:brightness-110 transition-all cursor-pointer"
							style="background-color: #141c26"
							onclick={() => (selected = null)}
						>
							Close
						</button>
					</div>
				</motion.div>
			</motion.div>
		{/if}
	</AnimatePresence>
</div>
