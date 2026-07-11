<script lang="ts">
	import FadeUp from '$lib/components/FadeUp.svelte';
	import { motion } from '@humanspeak/svelte-motion';
	import { ArrowRight, CheckCircle2, MapPin, Phone } from '@lucide/svelte';

	const WORKER_IMG =
		'https://images.unsplash.com/photo-1664662568348-24b1482b6354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920';
	const INTERIOR_IMG =
		'https://images.unsplash.com/photo-1618832515490-e181c4794a45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';

	const CITIES = [
		{
			name: 'Vancouver',
			tag: 'Primary Service Area',
			desc: "Our home base. We've completed over 200 projects in Vancouver neighborhoods including Felida, Cascade Park, Hazel Dell, and downtown's growing condo corridor.",
			zip: '98660–98686'
		},
		{
			name: 'Camas',
			tag: 'Frequent Service Area',
			desc: "Beautiful homes deserve beautiful renovations. We regularly serve Camas homeowners with kitchen, bath, and addition projects that reflect the community's high standards.",
			zip: '98607'
		},
		{
			name: 'Washougal',
			tag: 'Frequent Service Area',
			desc: "Washougal's riverside homes and growing neighborhoods are a great fit for our renovation and addition services. We're familiar with local permit requirements.",
			zip: '98671'
		},
		{
			name: 'Battle Ground',
			tag: 'Frequent Service Area',
			desc: 'From established neighborhoods near downtown to newer developments east of town, NEXRA serves Battle Ground homeowners across all project types.',
			zip: '98604'
		},
		{
			name: 'Ridgefield',
			tag: 'Service Area',
			desc: "One of Clark County's fastest-growing communities. We work with both new construction clients looking to customize and existing homeowners ready to renovate.",
			zip: '98642'
		},
		{
			name: 'La Center',
			tag: 'Service Area',
			desc: 'Small-town character, big renovation potential. We serve La Center homeowners with the same quality and attention we bring to every corner of Clark County.',
			zip: '98629'
		},
		{
			name: 'Woodland',
			tag: 'Service Area',
			desc: 'Just across the county line, Woodland homeowners regularly call on NEXRA for kitchen, bathroom, and outdoor living projects. We travel for great projects.',
			zip: '98674'
		},
		{
			name: 'Yacolt',
			tag: 'Service Area',
			desc: 'Rural properties and unique homes need contractors who understand diverse building contexts. NEXRA serves Yacolt and surrounding East County communities.',
			zip: '98675'
		},
		{
			name: 'Brush Prairie',
			tag: 'Service Area',
			desc: "Acreage properties and suburban homes alike — we're comfortable with the bigger lots and unique conditions common in the Brush Prairie area.",
			zip: '98606'
		},
		{
			name: 'Hazel Dell',
			tag: 'Frequent Service Area',
			desc: 'An established Vancouver community with mature homes ripe for renovation. Many of our most satisfying before-and-after projects have been right here.',
			zip: '98665'
		},
		{
			name: 'Orchards',
			tag: 'Frequent Service Area',
			desc: 'Diverse housing stock from ranch homes to newer builds — Orchards keeps our team busy year-round with kitchen remodels and bathroom renovations.',
			zip: '98662'
		},
		{
			name: 'Salmon Creek',
			tag: 'Service Area',
			desc: "North Vancouver's Salmon Creek neighborhoods are a regular stop for NEXRA crews. We know the area well and have deep roots with local suppliers.",
			zip: '98686'
		}
	];

	const TAG_COLORS: Record<string, string> = {
		'Primary Service Area': '#f68318',
		'Frequent Service Area': '#141c26',
		'Service Area': '#6b7280'
	};

	let hovered: string | null = $state(null);
</script>

<div class="overflow-x-hidden">
	<section class="relative h-72 md:h-96 flex items-end overflow-hidden">
		<img
			src={WORKER_IMG}
			alt="Worker serving Clark County"
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
						>Where We Work</span
					>
				</div>
				<h1 class="text-4xl md:text-6xl font-black text-white">Areas Served</h1>
			</motion.div>
		</div>
	</section>

	<section class="py-16 px-6">
		<div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
			<FadeUp>
				<div class="flex items-center gap-2 mb-5">
					<div class="h-px w-10" style="background-color: #f68318"></div>
					<span class="text-sm font-semibold tracking-widest uppercase" style="color: #f68318"
						>Clark County, WA</span
					>
				</div>
				<h2 class="text-4xl font-black mb-6" style="color: #141c26">
					Proudly Rooted in Clark County
				</h2>
				<p class="text-gray-600 leading-relaxed mb-4">
					NEXRA Construction is a Clark County company through and through. Tim Muklanovich has
					lived and built here for over 15 years — which means we understand local permit processes,
					building codes, supplier relationships, and what Clark County homeowners actually want.
				</p>
				<p class="text-gray-600 leading-relaxed mb-8">
					We primarily serve communities throughout Clark County, Washington. If you're unsure
					whether we serve your area, just call — we'll let you know straight up.
				</p>
				<div class="flex items-center gap-3">
					<a
						href="tel:+13602137927"
						class="inline-flex items-center gap-2 px-6 py-3 font-bold text-sm text-white hover:brightness-110 transition-all"
						style="background-color: #f68318"
					>
						<Phone size={15} /> Call Us
					</a>
					<a
						href="/contact"
						class="inline-flex items-center gap-2 px-6 py-3 font-bold text-sm hover:gap-4 transition-all"
						style="color: #141c26;border: 2px solid #141c26"
					>
						Free Estimate <ArrowRight size={14} />
					</a>
				</div>
			</FadeUp>

			<FadeUp delay={0.1}>
				<div
					class="relative bg-gray-50 border border-gray-200 p-8 aspect-square flex items-center justify-center overflow-hidden"
				>
					<div
						class="absolute inset-0 opacity-5"
						style="background-image: repeating-linear-gradient(0deg, #141c26 0px, transparent 1px, transparent 40px, #141c26 40px), repeating-linear-gradient(90deg, #141c26 0px, transparent 1px, transparent 40px, #141c26 40px);opacity:0.05"
					></div>

					<div class="relative w-full h-full">
						<svg viewBox="0 0 300 300" class="w-full h-full">
							<polygon
								points="40,60 260,60 270,80 265,200 240,260 60,260 40,220 30,120"
								fill="none"
								stroke="#f68318"
								stroke-width="2"
								stroke-dasharray="6,4"
							/>
							<polygon
								points="40,60 260,60 270,80 265,200 240,260 60,260 40,220 30,120"
								fill="#141c26"
								fill-opacity="0.04"
							/>

							<path
								d="M 30,200 Q 80,210 140,205 Q 200,200 270,210"
								fill="none"
								stroke="#4a90d9"
								stroke-width="3"
								opacity="0.4"
							/>
							<text x="80" y="225" fill="#4a90d9" font-size="9" opacity="0.6">Columbia River</text>

							{#each [{ cx: 110, cy: 160, label: 'Vancouver', primary: true }, { cx: 200, cy: 130, label: 'Camas', primary: false }, { cx: 240, cy: 150, label: 'Washougal', primary: false }, { cx: 120, cy: 100, label: 'Battle Ground', primary: false }, { cx: 70, cy: 120, label: 'Ridgefield', primary: false }, { cx: 155, cy: 80, label: 'Yacolt', primary: false }, { cx: 90, cy: 160, label: 'Hazel Dell', primary: false }] as city (city.label)}
								<g>
									<circle
										cx={city.cx}
										cy={city.cy}
										r={city.primary ? 8 : 5}
										fill={city.primary ? '#f68318' : '#141c26'}
										opacity={city.primary ? 1 : 0.7}
									/>
									{#if city.primary}
										<circle
											cx={city.cx}
											cy={city.cy}
											r="14"
											fill="none"
											stroke="#f68318"
											stroke-width="1.5"
											opacity="0.4"
										/>
									{/if}
									<text
										x={city.cx + (city.primary ? 12 : 8)}
										y={city.cy + 4}
										fill={city.primary ? '#f68318' : '#141c26'}
										font-size={city.primary ? '11' : '9'}
										font-weight={city.primary ? 'bold' : 'normal'}
									>
										{city.label}
									</text>
								</g>
							{/each}
						</svg>
					</div>
				</div>
			</FadeUp>
		</div>
	</section>

	<section style="background-color: #f9f9f9" class="py-24 px-6">
		<div class="max-w-7xl mx-auto">
			<FadeUp className="text-center mb-16">
				<div class="flex items-center justify-center gap-2 mb-4">
					<div class="h-px w-10" style="background-color: #f68318"></div>
					<span class="text-sm font-semibold tracking-widest uppercase" style="color: #f68318"
						>Communities We Serve</span
					>
					<div class="h-px w-10" style="background-color: #f68318"></div>
				</div>
				<h2 class="text-4xl font-black" style="color: #141c26">Serving All of Clark County</h2>
			</FadeUp>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each CITIES as city, i (city.name)}
					<FadeUp delay={i * 0.05}>
						<motion.div
							class="bg-white border border-gray-100 p-6 cursor-default group"
							whileHover={{
								y: -4,
								borderColor: '#f68318',
								boxShadow: '0 12px 40px rgba(0,0,0,0.08)'
							}}
							transition={{ duration: 0.3 }}
							onHoverStart={() => (hovered = city.name)}
							onHoverEnd={() => (hovered = null)}
						>
							<div class="flex items-start justify-between mb-4">
								<div class="flex items-center gap-2">
									<MapPin size={18} style="color: #f68318;flex-shrink: 0" />
									<h3 class="font-black text-lg" style="color: #141c26">{city.name}</h3>
								</div>
								<span
									class="text-xs font-bold tracking-wide px-2 py-0.5 text-white shrink-0"
									style="background-color: {TAG_COLORS[city.tag] ?? '#6b7280'}"
								>
									{city.tag === 'Primary Service Area'
										? 'PRIMARY'
										: city.tag === 'Frequent Service Area'
											? 'FREQUENT'
											: 'SERVED'}
								</span>
							</div>
							<p class="text-gray-600 text-sm leading-relaxed mb-4">{city.desc}</p>
							<div class="text-xs text-gray-400 font-mono">ZIP: {city.zip}</div>
						</motion.div>
					</FadeUp>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-24 px-6" style="background-color: #141c26">
		<div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
			<FadeUp>
				<img src={INTERIOR_IMG} alt="Local renovation" class="w-full aspect-4/3 object-cover" />
			</FadeUp>
			<FadeUp delay={0.1}>
				<div class="flex items-center gap-2 mb-5">
					<div class="h-px w-10" style="background-color: #f68318"></div>
					<span class="text-sm font-semibold tracking-widest uppercase" style="color: #f68318"
						>Why Local Matters</span
					>
				</div>
				<h2 class="text-4xl font-black text-white mb-6">We Know Clark County</h2>
				<p class="text-white/60 leading-relaxed mb-8">
					Hiring local isn't just about supporting the community — it's about getting better
					results. NEXRA knows which Clark County permit offices to call, which inspectors to work
					with, which local suppliers carry the best materials, and how Pacific Northwest weather
					affects build decisions.
				</p>
				<ul class="space-y-4">
					{#each ['Familiar with Clark County permit processes', 'Established relationships with local inspectors', 'Fast response times across our service area', 'Local supplier connections = better materials pricing', 'Tim is in the community — his reputation is on the line'] as item (item)}
						<li class="flex items-start gap-3 text-white/80 text-sm">
							<CheckCircle2 size={16} style="color: #f68318; flex-shrink: 0;margin-top: 2" />
							{item}
						</li>
					{/each}
				</ul>
			</FadeUp>
		</div>
	</section>

	<section class="py-20 px-6 text-center">
		<FadeUp>
			<div class="flex items-center justify-center gap-2 mb-4">
				<div class="h-px w-10" style="background-color: #f68318"></div>
				<span class="text-sm font-semibold tracking-widest uppercase" style="color: #f68318"
					>Get Started</span
				>
				<div class="h-px w-10" style="background-color: #f68318"></div>
			</div>
			<h2 class="text-4xl font-black mb-4" style="color: #141c26">
				Not Sure If We Cover Your Area?
			</h2>
			<p class="text-gray-600 mb-8 max-w-lg mx-auto">
				Just give Tim a call. If we can't help you, we'll point you to someone who can.
			</p>
			<a
				href="tel:+13602137927"
				class="inline-flex items-center gap-2 px-10 py-4 font-bold text-sm text-white hover:brightness-110 transition-all"
				style="background-color: #f68318"
			>
				<Phone size={16} /> (360) 213-7927
			</a>
		</FadeUp>
	</section>
</div>
