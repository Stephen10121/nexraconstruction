<script lang="ts">
	import FadeUp from '$lib/components/FadeUp.svelte';
	import { AnimatePresence, motion } from '@humanspeak/svelte-motion';
	import { ChevronLeft, ChevronRight, Quote, Star } from '@lucide/svelte';

	const LIVING_IMG =
		'https://images.unsplash.com/photo-1649083048770-82e8ffd80431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920';

	const TESTIMONIALS = [
		{
			id: 1,
			name: 'Sarah & Mike M.',
			location: 'Vancouver, WA',
			rating: 5,
			project: 'Kitchen Remodel',
			text: "Tim and his crew completely transformed our 1990s kitchen into something out of a magazine. The attention to detail was incredible — every tile perfectly aligned, every cabinet perfectly fitted. He communicated with us every step of the way and the job came in exactly on budget. We've already referred NEXRA to our neighbors.",
			date: 'October 2024'
		},
		{
			id: 2,
			name: 'James R.',
			location: 'Camas, WA',
			rating: 5,
			project: 'Bathroom Renovation',
			text: "Our master bathroom remodel came in on budget and two days ahead of schedule. I've hired contractors before and always had horror stories. NEXRA is genuinely different — they showed up every day, cleaned up every night, and Tim answered my texts within the hour. I wouldn't use anyone else.",
			date: 'September 2024'
		},
		{
			id: 3,
			name: 'Linda K.',
			location: 'Battle Ground, WA',
			rating: 5,
			project: 'Room Addition',
			text: "We added 600 square feet to our home and the process was surprisingly painless. Tim handled all the permits, kept us informed every week, and the addition matches our original house perfectly. Guests can't even tell it's an addition. Absolutely worth every penny.",
			date: 'August 2024'
		},
		{
			id: 4,
			name: 'Carlos & Ana V.',
			location: 'Washougal, WA',
			rating: 5,
			project: 'Basement Finishing',
			text: "NEXRA turned our unfinished basement into a beautiful family room, home office, and guest suite. The crew was professional and respectful of our home. Tim's communication is what really sets him apart — I always knew exactly where things stood.",
			date: 'July 2024'
		},
		{
			id: 5,
			name: 'Patricia L.',
			location: 'Ridgefield, WA',
			rating: 5,
			project: 'Kitchen & Bath',
			text: 'We hired NEXRA to do both our kitchen and master bath simultaneously. Managing two major renovations at once sounds chaotic, but Tim had it organized flawlessly. Both rooms came out better than we imagined. Our home feels brand new.',
			date: 'May 2024'
		},
		{
			id: 6,
			name: 'Derek O.',
			location: 'Vancouver, WA',
			rating: 5,
			project: 'Deck Construction',
			text: "Tim built us a 400 sq ft composite deck with a pergola and built-in lighting. It's become our favorite room in the house — year round. The quality of materials and the precision of the build are obvious. Worth every dollar.",
			date: 'June 2024'
		},
		{
			id: 7,
			name: 'Theresa & Bob W.',
			location: 'La Center, WA',
			rating: 5,
			project: 'In-Law Suite',
			text: "We needed an in-law suite for Tim's mom and NEXRA delivered a beautiful, ADA-accessible studio addition. The craftsmanship is exceptional and Tim was patient throughout our many design questions. Highly recommend.",
			date: 'April 2024'
		},
		{
			id: 8,
			name: 'Michael S.',
			location: 'Camas, WA',
			rating: 5,
			project: 'Interior Renovation',
			text: 'NEXRA refinished our hardwood floors, replaced all the trim, and rebuilt our fireplace surround. Small stuff compared to some of their projects, but Tim gave us the same care and attention as if it were a major renovation. That says everything.',
			date: 'March 2024'
		}
	];

	const FEATURED = TESTIMONIALS.slice(0, 3);

	let featuredIdx = $state(0);
	let direction = $state(1);

	function go(dir: number) {
		direction = dir;
		featuredIdx = (featuredIdx + dir + FEATURED.length) % FEATURED.length;
	}

	const current = $derived(FEATURED[featuredIdx]);
</script>

<div class="overflow-x-hidden">
	<section class="relative h-72 md:h-96 flex items-end overflow-hidden">
		<img
			src={LIVING_IMG}
			alt="Beautiful home"
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
						>Client Reviews</span
					>
				</div>
				<h1 class="text-4xl md:text-6xl font-black text-white">Testimonials</h1>
			</motion.div>
		</div>
	</section>

	<section style="background-color: #141c26" class="py-12 px-6">
		<div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
			<div class="text-center md:text-left">
				<div class="text-7xl font-black text-white">5.0</div>
				<div class="flex gap-1 mt-2 justify-center md:justify-start">
					{#each Array.from({ length: 5 }) as _, i (i)}
						<Star size={24} fill="#f68318" style="color: #f68318" />
					{/each}
				</div>
				<p class="text-white/60 text-sm mt-2">Based on 80+ verified reviews</p>
			</div>
			<div class="grid grid-cols-2 gap-4 md:gap-8">
				{#each [{ label: 'Google Reviews', count: '4.9★ (52 reviews)' }, { label: 'Houzz', count: '5.0★ (18 reviews)' }, { label: 'HomeAdvisor', count: '4.8★ (24 reviews)' }, { label: 'BBB', count: 'A+ Rating' }] as item (item.label)}
					<div class="text-center">
						<div class="font-bold text-white">{item.count}</div>
						<div class="text-white/50 text-xs mt-1">{item.label}</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-24 px-6" style="background-color: #f9f9f9">
		<div class="max-w-4xl mx-auto">
			<FadeUp className="text-center mb-12">
				<div class="flex items-center justify-center gap-2 mb-4">
					<div class="h-px w-10" style="background-color: #f68318"></div>
					<span class="text-sm font-semibold tracking-widest uppercase" style="color: #f68318"
						>Featured Stories</span
					>
					<div class="h-px w-10" style="background-color: #f68318"></div>
				</div>
			</FadeUp>

			<div class="relative">
				<AnimatePresence mode="wait" custom={direction}>
					<motion.div
						key="{current.id}a"
						custom={direction}
						initial={{ opacity: 0, x: direction * 60 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -direction * 60 }}
						transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
						class="bg-white p-10 md:p-14"
					>
						<Quote size={48} style="color: #f68318; opacity: 0.3" class="mb-6" />
						<p class="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
							"{current.text}"
						</p>
						<div class="flex items-center gap-4">
							<div
								class="w-14 h-14 flex items-center justify-center text-white text-xl font-black shrink-0"
								style="background-color: #141c26"
							>
								{current.name[0]}
							</div>
							<div>
								<div class="font-black text-lg" style="color: #141c26">{current.name}</div>
								<div class="text-gray-500 text-sm">
									{current.location} · {current.project} · {current.date}
								</div>
								<div class="flex gap-1 mt-1">
									{#each Array.from({ length: current.rating }) as _, i (i)}
										<Star size={14} fill="#f68318" style="color: #f68318" />
									{/each}
								</div>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>

				<div class="flex items-center gap-4 mt-6 justify-end">
					<button
						onclick={() => go(-1)}
						class="w-10 h-10 flex items-center justify-center border border-gray-200 hover:border-gray-400 transition-colors"
					>
						<ChevronLeft size={18} />
					</button>
					<div class="flex gap-2">
						{#each FEATURED as _, i (i)}
							<button
								title="carousel indicator"
								onclick={() => {
									direction = i > featuredIdx ? 1 : -1;
									featuredIdx = i;
								}}
								class="h-1.5 rounded-full transition-all duration-300"
								style="background-color: {i === featuredIdx ? '#f68318' : '#e5e7eb'};width: {i ===
								featuredIdx
									? '32px'
									: '10px'}"
							></button>
						{/each}
					</div>
					<button
						onclick={() => go(1)}
						class="w-10 h-10 flex items-center justify-center border border-gray-200 hover:border-gray-400 transition-colors"
					>
						<ChevronRight size={18} />
					</button>
				</div>
			</div>
		</div>
	</section>

	<section class="py-24 px-6">
		<div class="max-w-7xl mx-auto">
			<FadeUp className="text-center mb-16">
				<h2 class="text-4xl font-black" style="color: #141c26">All Reviews</h2>
			</FadeUp>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each TESTIMONIALS as t, i (t.id)}
					<FadeUp delay={i * 0.05}>
						<motion.div
							class="p-8 border border-gray-100 bg-white group relative overflow-hidden"
							whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.08)' }}
							transition={{ duration: 0.3 }}
						>
							<div
								class="absolute top-0 left-0 h-1 w-full transition-all duration-300 opacity-0 group-hover:opacity-100"
								style="background-color: #f68318"
							></div>
							<div class="flex items-center justify-between mb-4">
								<div class="flex gap-1">
									{#each Array.from({ length: t.rating }) as _, s (s)}
										<Star size={14} fill="#f68318" style="color: #f68318" />
									{/each}
								</div>
								<span
									class="text-xs font-bold tracking-wide uppercase px-2 py-0.5"
									style="background-color: #f9f9f9;color: #f68318;border: 1px solid #f68318"
								>
									{t.project}
								</span>
							</div>
							<p class="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
							<div class="flex items-center gap-3">
								<div
									class="w-9 h-9 flex items-center justify-center text-white text-sm font-bold shrink-0"
									style="background-color: #141c26"
								>
									{t.name[0]}
								</div>
								<div>
									<div class="font-bold text-sm" style="color: #141c26">{t.name}</div>
									<div class="text-xs text-gray-500">{t.location} · {t.date}</div>
								</div>
							</div>
						</motion.div>
					</FadeUp>
				{/each}
			</div>
		</div>
	</section>

	<section style="background-color: #141c26" class="py-20 px-6 text-center">
		<FadeUp>
			<h2 class="text-4xl font-black text-white mb-4">Ready to Add Your Story?</h2>
			<p class="text-white/60 mb-8 max-w-xl mx-auto">
				Join hundreds of Clark County homeowners who trust NEXRA Construction for their most
				important home projects.
			</p>
			<a
				href="/contact"
				class="inline-flex items-center gap-2 px-10 py-4 font-bold text-sm text-white hover:brightness-110 transition-all"
				style="background-color: #f68318"
			>
				Get Your Free Estimate
			</a>
		</FadeUp>
	</section>
</div>
