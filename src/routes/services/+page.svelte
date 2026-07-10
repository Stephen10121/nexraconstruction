<script lang="ts">
	import FadeUp from '$lib/components/FadeUp.svelte';
	import FaqItem from '$lib/components/FaqItem.svelte';
	import { motion } from '@humanspeak/svelte-motion';
	import {
		Building2,
		ChevronRight,
		Hammer,
		Home,
		Layers,
		Paintbrush,
		TreePine,
		Zap
	} from '@lucide/svelte';

	const HERO_IMG =
		'https://images.unsplash.com/photo-1634586648651-f1fb9ec10d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920';
	const KITCHEN_IMG =
		'https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
	const BATH_IMG =
		'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
	const BATH2_IMG =
		'https://images.unsplash.com/photo-1682888818704-6dc91e9d7532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
	const LIVING_IMG =
		'https://images.unsplash.com/photo-1649083048770-82e8ffd80431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
	const INTERIOR_IMG =
		'https://images.unsplash.com/photo-1618832515490-e181c4794a45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
	const WORKER_IMG =
		'https://images.unsplash.com/photo-1587582423116-ec07293f0395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';

	const SERVICES = [
		{
			icon: Home,
			title: 'Kitchen Remodeling',
			tagline: 'The heart of your home, reimagined.',
			img: KITCHEN_IMG,
			desc: 'From full gut renovations to cabinet refacing and countertop upgrades, we handle every element of your kitchen transformation. Our team coordinates all trades — plumbing, electrical, tile, and cabinetry — so your project finishes on time.',
			features: [
				'Custom cabinetry design',
				'Countertop fabrication & install',
				'Plumbing & electrical upgrades',
				'Flooring installation',
				'Backsplash tile work',
				'Lighting design'
			]
		},
		{
			icon: Layers,
			title: 'Bathroom Renovation',
			tagline: 'Spa quality. Home comfort.',
			img: BATH_IMG,
			desc: "Whether it's a primary suite bathroom makeover or a simple powder room refresh, NEXRA brings the same precision and premium finishes to every bathroom project. We specialize in tile work, wet areas, and modern fixture installation.",
			features: [
				'Walk-in shower conversions',
				'Freestanding tub installation',
				'Custom tile work',
				'Vanity & fixture upgrades',
				'Heated floor systems',
				'ADA-accessible design'
			]
		},
		{
			icon: Building2,
			title: 'Room Additions',
			tagline: 'More space. Perfectly matched.',
			img: LIVING_IMG,
			desc: 'Adding square footage is one of the best investments you can make in a Clark County home. Our additions are engineered to match your existing structure seamlessly — same roof pitch, same siding, same character.',
			features: [
				'Second story additions',
				'Garage conversions',
				'Sunroom & porch additions',
				'In-law suite construction',
				'Structural engineering coordination',
				'Permit management'
			]
		},
		{
			icon: Hammer,
			title: 'General Contracting',
			tagline: 'Full-scope project management.',
			img: WORKER_IMG,
			desc: "As your general contractor, Tim oversees every trade, manages the schedule, and keeps you informed daily. We pull all permits, coordinate inspections, and don't consider a job done until you love the final product.",
			features: [
				'Multi-trade coordination',
				'Permit acquisition',
				'Budget management',
				'Daily progress updates',
				'Final inspection walkthrough',
				'Warranty on workmanship'
			]
		},
		{
			icon: TreePine,
			title: 'Decks & Patios',
			tagline: 'Outdoor living, year-round.',
			img: INTERIOR_IMG,
			desc: "Pacific Northwest weather demands decks and patios that are engineered to last. We build with composite decking, pressure-treated lumber, and concrete systems designed for Clark County's wet winters and sunny summers.",
			features: [
				'Composite & hardwood decking',
				'Covered patio structures',
				'Concrete & paver patios',
				'Pergolas & shade structures',
				'Outdoor kitchens',
				'Stair & railing systems'
			]
		},
		{
			icon: Layers,
			title: 'Basement Finishing',
			tagline: "Unlock your home's hidden potential.",
			img: BATH2_IMG,
			desc: 'An unfinished basement is wasted square footage. NEXRA transforms raw concrete spaces into family rooms, home theaters, guest suites, home gyms, and offices — fully insulated, framed, and finished.',
			features: [
				'Egress window installation',
				'Waterproofing & moisture control',
				'Framing & insulation',
				'Electrical & plumbing rough-in',
				'Drywall & finish work',
				'Flooring installation'
			]
		},
		{
			icon: Paintbrush,
			title: 'Interior Renovations',
			tagline: 'Transform every room.',
			img: INTERIOR_IMG,
			desc: 'Sometimes a space just needs new life. From whole-home repaints to hardwood floor refinishing, trim replacement, and fireplace makeovers — our interior renovation team handles the details that make a house feel like home.',
			features: [
				'Interior painting',
				'Hardwood floor installation',
				'Crown molding & trim',
				'Fireplace surrounds',
				'Built-in shelving',
				'Ceiling repairs & texture'
			]
		},
		{
			icon: Zap,
			title: 'Electrical & Plumbing',
			tagline: 'Licensed trade work, on demand.',
			img: KITCHEN_IMG,
			desc: 'Through our trusted network of licensed sub-contractors, NEXRA can manage electrical panel upgrades, EV charger installations, plumbing re-routes, and more as standalone projects or as part of a larger renovation.',
			features: [
				'Panel upgrades',
				'EV charger installation',
				'Bathroom plumbing re-routes',
				'Whole-home repiping',
				'Generator hookups',
				'Outdoor outlets & lighting'
			]
		}
	];

	let hoveredService: number | null = $state(null);
</script>

<div class="overflow-x-hidden">
	<section class="relative h-72 md:h-96 flex items-end overflow-hidden">
		<img
			src={HERO_IMG}
			alt="Renovation tools"
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
						>What We Offer</span
					>
				</div>
				<h1 class="text-4xl md:text-6xl font-black text-white">Our Services</h1>
			</motion.div>
		</div>
	</section>

	<section class="py-24 px-6">
		<div class="max-w-7xl mx-auto">
			<FadeUp className="text-center mb-16">
				<p class="text-gray-600 max-w-2xl mx-auto leading-relaxed">
					From single-room renovations to whole-home transformations, NEXRA brings the same care and
					precision to every scope of work. Explore what we can do for your home or business.
				</p>
			</FadeUp>

			<div class="space-y-24">
				{#each SERVICES as service, i (service.title)}
					<FadeUp delay={0.05}>
						<div
							class={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}
						>
							<div class={i % 2 === 1 ? 'md:order-2' : ''}>
								<motion.div
									onHoverStart={() => (hoveredService = i)}
									onHoverEnd={() => (hoveredService = null)}
									whileHover={{ scale: 1.01 }}
									transition={{ duration: 0.4 }}
									class="relative overflow-hidden group cursor-pointer"
								>
									<img
										src={service.img}
										alt={service.title}
										class="w-full aspect-4/3 object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									<div
										class="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-2"
										style="background-color: #f68318"
									>
										<service.icon size={20} class="text-white" />
										<span class="text-white font-bold text-sm">{service.title}</span>
									</div>
								</motion.div>
							</div>

							<div class={i % 2 === 1 ? 'md:order-1' : ''}>
								<div class="flex items-center gap-2 mb-4">
									<div class="h-px w-8" style="background-color: #f68318"></div>
									<span
										class="text-sm font-semibold tracking-widest uppercase"
										style="color: #f68318"
									>
										{service.tagline}
									</span>
								</div>
								<h2 class="text-3xl font-black mb-4" style="color: #141c26">{service.title}</h2>
								<p class="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
								<div class="grid grid-cols-2 gap-2 mb-8">
									{#each service.features as f (f)}
										<div class="flex items-center gap-2 text-sm text-gray-700">
											<ChevronRight size={14} style="color: #f68318;flex-shrink: 0" />
											{f}
										</div>
									{/each}
								</div>
								<a
									href="/about"
									class="inline-flex items-center gap-2 px-6 py-3 font-bold text-sm text-white hover:brightness-110 transition-all"
									style="background-color: #f68318;"
								>
									Get a Free Estimate <ChevronRight size={14} />
								</a>
							</div>
						</div>
					</FadeUp>
				{/each}
			</div>
		</div>
	</section>
</div>
