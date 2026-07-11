<script lang="ts">
	import {
		ChevronRight,
		Star,
		Shield,
		Clock,
		Award,
		ArrowRight,
		Hammer,
		Layers,
		Wrench,
		TreePine,
		CheckCircle2,
		Home as HomeIcon
	} from '@lucide/svelte';

	const HERO_IMG =
		'https://images.unsplash.com/photo-1587582423116-ec07293f0395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920';
	const INTERIOR_IMG =
		'https://images.unsplash.com/photo-1618832515490-e181c4794a45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';
	const KITCHEN_IMG =
		'https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';
	const BATH_IMG =
		'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

	const SERVICES = [
		{
			icon: HomeIcon,
			title: 'Kitchen Remodeling',
			desc: 'Custom kitchens designed around how you live — smart layouts, premium finishes.',
			img: KITCHEN_IMG
		},
		{
			icon: Layers,
			title: 'Bathroom Renovation',
			desc: 'Spa-quality bathrooms that feel like a retreat without leaving home.',
			img: BATH_IMG
		},
		{
			icon: Hammer,
			title: 'Room Additions',
			desc: 'Need more space? We build seamlessly matched additions that look original.',
			img: INTERIOR_IMG
		},
		{
			icon: Wrench,
			title: 'General Contracting',
			desc: 'Full-scope project management — from permits to final walkthrough.',
			img: HERO_IMG
		},
		{
			icon: TreePine,
			title: 'Decks & Patios',
			desc: 'Outdoor living spaces built to Pacific Northwest weather standards.',
			img: INTERIOR_IMG
		},
		{
			icon: Layers,
			title: 'Basement Finishing',
			desc: 'Transform unused square footage into functional, beautiful living space.',
			img: KITCHEN_IMG
		}
	];

	const TESTIMONIALS = [
		{
			name: 'Sarah M.',
			location: 'Vancouver, WA',
			text: 'Tim and his crew completely transformed our kitchen. The attention to detail was incredible — every tile perfectly aligned, every cabinet perfectly fitted.',
			rating: 5
		},
		{
			name: 'James R.',
			location: 'Camas, WA',
			text: "Our bathroom remodel came in on budget and ahead of schedule. I've hired contractors before but NEXRA is truly in a different league.",
			rating: 5
		},
		{
			name: 'Linda K.',
			location: 'Battle Ground, WA',
			text: 'From the first consultation to the final walkthrough, Tim was professional, communicative, and genuinely cared about getting everything right.',
			rating: 5
		}
	];

	let heroRef = $state<HTMLElement>();
	import { ScrollState } from 'runed';
	import AnimatedCounter from '$lib/components/AnimatedCounter.svelte';
	import FadeUp from '$lib/components/FadeUp.svelte';
	import { motion, useMotionValue, useTransform } from '@humanspeak/svelte-motion';

	let el = $state<HTMLElement>();

	const scroll = new ScrollState({
		element: () => heroRef
	});
	const scrollY = useMotionValue(scroll.y);
	const heroY = useTransform(scrollY, [0, 1], ['0%', '30%']);
	const heroOpacity = useTransform(scrollY, [0, 0.8], [1, 0]);
	let activeService = $state(0);
</script>

<div class="overflow-x-hidden">
	<section
		bind:this={heroRef}
		class="relative h-screen min-h-150 flex items-center overflow-hidden"
	>
		<motion.div
			style={{
				y: heroY
			}}
			class="absolute inset-0"
		>
			<img src={HERO_IMG} alt="Construction worker" class="w-full h-full object-cover" />
			<div
				class="absolute inset-0"
				style="background: linear-gradient(120deg, rgba(20,28,38,0.92) 0%, rgba(20,28,38,0.55) 60%, rgba(20,28,38,0.3) 100%)"
			></div>
		</motion.div>

		<motion.div
			style={{
				opacity: heroOpacity
			}}
			class="relative z-10 max-w-7xl mx-auto px-6 w-full"
		>
			<motion.div
				initial={{ opacity: 0, x: -60 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
			>
				<div class="flex items-center gap-2 mb-6">
					<div class="h-px w-12 bg-[#f68318]"></div>
					<span class="text-sm font-semibold tracking-widest uppercase" style="color: #f68318">
						Clark County's Trusted Contractor
					</span>
				</div>
				<h1 class="text-5xl md:text-7xl font-black text-white leading-none mb-6 max-w-3xl">
					Built Right.
					<br />
					<span style="color: #f68318"> Every Time. </span>
				</h1>
				<p class="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
					NEXRA Construction delivers exceptional craftsmanship for residential and commercial
					projects across Clark County, WA.
				</p>
				<div class="flex flex-wrap gap-4">
					<a
						href="/contact"
						class="flex items-center gap-2 px-8 py-4 text-white font-bold text-sm tracking-wide transition-all duration-200 hover:brightness-110 bg-[#f68318]"
					>
						Get Free Estimate <ChevronRight size={16} />
					</a>
					<a
						href="/projects"
						class="flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-bold text-sm tracking-wide hover:border-white/60 transition-colors"
					>
						View Our Work <ArrowRight size={16} />
					</a>
				</div>
			</motion.div>
		</motion.div>

		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 1.2 }}
			class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
		>
			<span class="text-white/40 text-xs tracking-widest uppercase"> Scroll </span>
			<motion.div
				animate={{ scaleY: [0, 1, 0] }}
				transition={{
					repeat: Infinity,
					duration: 1.8,
					ease: 'easeInOut'
				}}
				class="w-px h-12 origin-top bg-[#f68318]"
			></motion.div>
		</motion.div>
	</section>

	<section class="py-8 bg-[#f68318]">
		<div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
			{#each [{ value: 10, suffix: '+', label: 'Years in Business' }, { value: 500, suffix: '+', label: 'Projects Completed' }, { value: 100, suffix: '%', label: 'Licensed & Insured' }, { value: 98, suffix: '%', label: 'Client Satisfaction' }] as stat (stat.label)}
				<div class="text-white">
					<div class="text-4xl font-black mb-1">
						<AnimatedCounter target={stat.value} suffix={stat.suffix} />
					</div>
					<div class="text-white/80 text-sm font-medium tracking-wide">
						{stat.label}
					</div>
				</div>
			{/each}
		</div>
	</section>

	<section class="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
		<FadeUp>
			<div class="relative">
				<img
					src={INTERIOR_IMG}
					alt="Beautifully renovated interior"
					class="w-full aspect-4/3 object-cover"
				/>
				<div
					class="absolute -bottom-6 -right-6 p-6 text-white bg-[#141c26]"
					style="max-width: 220px;"
				>
					<div class="text-3xl font-black" style="color: #f68318">10+</div>
					<div class="text-sm text-white/70 mt-1 leading-snug">
						Years serving Clark County families
					</div>
				</div>
			</div>
		</FadeUp>

		<FadeUp delay={0.15}>
			<div class="flex items-center gap-2 mb-4">
				<div class="h-px w-10 bg-[#f68318]"></div>
				<span class="text-sm font-semibold tracking-widest uppercase" style="color: #f68318">
					About NEXRA
				</span>
			</div>
			<h2 class="text-4xl font-black mb-6" style="color: #141c26">
				Quality Work, Straight Talk, Zero Surprises
			</h2>
			<p class="text-gray-600 leading-relaxed mb-4">
				Tim Muklanovich founded NEXRA Construction with a simple belief: every homeowner deserves a
				contractor who shows up, communicates clearly, and delivers exactly what was promised.
			</p>
			<p class="text-gray-600 leading-relaxed mb-8">
				With over 10 years of hands-on experience across Clark County, we've built a reputation on
				reliability, precision, and work that stands the test of time.
			</p>
			<ul class="space-y-3 mb-8">
				{#each ['Licensed & Bonded in Washington State', 'Detailed written estimates — no hidden costs', 'We answer our phones and return calls', 'Job-site cleanup every single day'] as item (item)}
					<li class="flex items-center gap-3 text-gray-700">
						<CheckCircle2 size={18} style="color: #f68318;flex-shrink: 0;" />
						{item}
					</li>
				{/each}
			</ul>
			<a
				href="/about"
				class="inline-flex items-center gap-2 font-bold text-sm tracking-wide hover:gap-4 transition-all"
				style="color: #f68318"
			>
				Meet Tim & The Team <ArrowRight size={16} />
			</a>
		</FadeUp>
	</section>

	<section class="py-24 px-6 bg-[#f9f9f9]">
		<div class="max-w-7xl mx-auto">
			<FadeUp className="text-center mb-16">
				<div class="flex items-center justify-center gap-2 mb-4">
					<div class="h-px w-10 bg-[#f68318]"></div>
					<span class="text-sm font-semibold tracking-widest uppercase" style="color: #f68318">
						What We Do
					</span>
					<div class="h-px w-10 bg-[#f68318]"></div>
				</div>
				<h2 class="text-4xl font-black" style="color: #141c26">Our Services</h2>
			</FadeUp>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each SERVICES as service, i (service.title)}
					<FadeUp delay={i * 0.07}>
						<motion.div
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.3 }}
							onHoverStart={() => (activeService = i)}
							class="group relative overflow-hidden cursor-pointer h-72"
						>
							<img
								src={service.img}
								alt={service.title}
								class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
							/>
							<div
								class="absolute inset-0 transition-opacity duration-300"
								style="background: linear-gradient(to top, rgba(20,28,38,0.95) 0%, rgba(20,28,38,0.4) 100%)"
							></div>
							<div class="absolute inset-0 flex flex-col justify-end p-6">
								<service.icon
									class="mb-3 transition-transform duration-300 group-hover:-translate-y-1"
									size={28}
									style="color: #f68318"
								/>
								<h3 class="text-xl font-bold text-white mb-1">
									{service.title}
								</h3>
								<p class="text-white/70 text-sm leading-relaxed overflow-hidden">
									{service.desc}
								</p>
								<div
									class="mt-3 flex items-center gap-1 text-xs font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									style="color: #f68318"
								>
									Learn More{' '}
									<ChevronRight size={12} />
								</div>
							</div>
						</motion.div>
					</FadeUp>
				{/each}
			</div>

			<FadeUp className="text-center mt-10">
				<a
					href="/services"
					class="inline-flex items-center gap-2 px-8 py-4 font-bold text-sm tracking-wide text-white transition-all hover:brightness-110 bg-[#141c26]"
				>
					Explore All Services <ChevronRight size={16} />
				</a>
			</FadeUp>
		</div>
	</section>

	<section class="py-24 px-6 bg-[#141c26]">
		<div class="max-w-7xl mx-auto">
			<FadeUp className="text-center mb-16">
				<div class="flex items-center justify-center gap-2 mb-4">
					<div class="h-px w-10 bg-[#f68318]"></div>
					<span class="text-sm font-semibold tracking-widest uppercase" style="color: #f68318">
						How It Works
					</span>
					<div class="h-px w-10 bg-[#f68318]"></div>
				</div>
				<h2 class="text-4xl font-black text-white">Our Simple 3-Step Process</h2>
			</FadeUp>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
				{#each [{ step: '01', title: 'Free Consultation', desc: 'We visit your property, listen carefully to your vision, and walk you through realistic options and pricing — no pressure, no obligation.' }, { step: '02', title: 'Detailed Proposal', desc: 'Receive a clear, itemized written estimate with timeline, materials, and scope of work. What you see is what you pay.' }, { step: '03', title: 'Expert Execution', desc: 'Our skilled team gets to work with daily communication, site cleanup, and a final walkthrough to make sure you love every detail.' }] as step, i (step.step)}
					<FadeUp delay={i * 0.15}>
						<div class="text-center">
							<div
								class="w-24 h-24 mx-auto mb-6 flex items-center justify-center text-4xl font-black text-white border-2"
								style="border-color: #f68318;position:relative"
							>
								<div class="absolute inset-0 opacity-10 bg-[#f68318]"></div>
								{step.step}
							</div>
							<h3 class="text-xl font-bold text-white mb-3">
								{step.title}
							</h3>
							<p class="text-white/60 text-sm leading-relaxed">
								{step.desc}
							</p>
						</div>
					</FadeUp>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-16 px-6 border-b border-gray-100">
		<div class="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
			{#each [{ icon: Shield, title: 'Licensed & Bonded', desc: 'WA State License #NEXRACO123' }, { icon: Clock, title: 'On-Time Delivery', desc: 'We respect your schedule' }, { icon: Award, title: '10+ Years Experience', desc: 'Deep local expertise' }, { icon: Star, title: '5-Star Rated', desc: 'Google & Houzz verified' }] as badge, i (badge.title)}
				<FadeUp delay={i * 0.08}>
					<div class="text-center">
						<badge.icon class="mx-auto mb-3" size={32} style="color: #f68318" />
						<div class="font-bold text-sm" style="color: #141c26">
							{badge.title}
						</div>
						<div class="text-xs text-gray-500 mt-1">
							{badge.desc}
						</div>
					</div>
				</FadeUp>
			{/each}
		</div>
	</section>

	<section class="py-24 px-6">
		<div class="max-w-7xl mx-auto">
			<FadeUp className="text-center mb-16">
				<div class="flex items-center justify-center gap-2 mb-4">
					<div class="h-px w-10 bg-[#f68318]"></div>
					<span class="text-sm font-semibold tracking-widest uppercase" style="color: #f68318">
						What Clients Say
					</span>
					<div class="h-px w-10 bg-[#f68318]"></div>
				</div>
				<h2 class="text-4xl font-black" style="color: #141c26">Real Results. Real Reviews.</h2>
			</FadeUp>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				{#each TESTIMONIALS as t, i (t.name)}
					<FadeUp delay={i * 0.1}>
						<motion.div
							whileHover={{
								y: -6,
								boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
							}}
							transition={{ duration: 0.3 }}
							class="p-8 border border-gray-100 relative group"
						>
							<div
								class="absolute top-0 left-0 w-full h-1 transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-[#f68318]"
							></div>
							<div class="flex gap-1 mb-4">
								{#each Array.from({ length: t.rating }) as _, s (s)}
									<Star size={16} fill="#f68318" style="color: #f68318" />
								{/each}
							</div>
							<p class="text-gray-600 text-sm leading-relaxed mb-6 italic">
								"{t.text}"
							</p>
							<div class="flex items-center gap-3">
								<div
									class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm bg-[#141c26]"
								>
									{t.name[0]}
								</div>
								<div>
									<div class="font-bold text-sm" style="color: #141c26">
										{t.name}
									</div>
									<div class="text-xs text-gray-500">
										{t.location}
									</div>
								</div>
							</div>
						</motion.div>
					</FadeUp>
				{/each}
			</div>

			<FadeUp className="text-center mt-10">
				<a
					href="/testimonials"
					class="inline-flex items-center gap-2 font-bold text-sm tracking-wide hover:gap-4 transition-all"
					style="color: #f68318"
				>
					Read All Reviews <ArrowRight size={16} />
				</a>
			</FadeUp>
		</div>
	</section>

	<section class="relative py-28 px-6 overflow-hidden">
		<img
			src={KITCHEN_IMG}
			alt="Beautiful kitchen"
			class="absolute inset-0 w-full h-full object-cover"
		/>
		<div class="absolute inset-0" style="background-color: rgba(20,28,38,0.88)"></div>
		<div class="relative z-10 max-w-3xl mx-auto text-center">
			<FadeUp>
				<h2 class="text-4xl md:text-5xl font-black text-white mb-6">
					Ready to Start Your Project?
				</h2>
				<p class="text-white/70 text-lg mb-10 leading-relaxed">
					Get a free, no-obligation estimate from Clark County's most trusted general contractor.
					Tim picks up the phone.
				</p>
				<div class="flex flex-wrap justify-center gap-4">
					<a
						href="tel:+13602137927"
						class="px-10 py-4 text-white font-bold text-sm tracking-wide transition-all hover:brightness-110 bg-[#f68318]"
					>
						Call (360) 213-7927
					</a>
					<a
						href="/contact"
						class="px-10 py-4 border border-white/40 text-white font-bold text-sm tracking-wide hover:border-white/80 transition-colors"
					>
						Request Online Estimate
					</a>
				</div>
			</FadeUp>
		</div>
	</section>
</div>
