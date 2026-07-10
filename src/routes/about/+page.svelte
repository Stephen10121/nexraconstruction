<script lang="ts">
	import FadeUp from '$lib/components/FadeUp.svelte';
	import { motion } from '@humanspeak/svelte-motion';
	import { ArrowRight, Award, CheckCircle2, Heart, Phone, Target, Users } from '@lucide/svelte';
	import timImg from '$lib/assets/me.jpg';

	const HERO_IMG =
		'https://images.unsplash.com/photo-1505798577917-a65157d3320a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920';
	const TEAM_IMG =
		'https://images.unsplash.com/photo-1587582423116-ec07293f0395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';

	const TIMELINE = [
		{
			year: '2010',
			title: 'Founded',
			desc: 'Tim Muklanovich started NEXRA with a pickup truck and a commitment to doing the job right.'
		},
		{
			year: '2013',
			title: 'First Commercial Contract',
			desc: 'Expanded into light commercial work and office renovations across Vancouver.'
		},
		{
			year: '2016',
			title: '100th Project',
			desc: 'Celebrated our 100th completed project — still zero complaints with the BBB.'
		},
		{
			year: '2020',
			title: 'Team Expansion',
			desc: 'Grew to a full crew of licensed tradespeople to handle larger residential scopes.'
		},
		{
			year: '2024',
			title: '500+ Projects',
			desc: 'Now serving all of Clark County with a 98% client satisfaction rating.'
		}
	];

	const VALUES = [
		{
			icon: Target,
			title: 'Precision',
			desc: 'Every measurement, every cut, every finish — done with care.'
		},
		{ icon: Heart, title: 'Integrity', desc: 'We say what we mean and do what we say. Always.' },
		{
			icon: Users,
			title: 'Communication',
			desc: "You hear from us before you have to wonder what's happening."
		},
		{
			icon: Award,
			title: 'Craftsmanship',
			desc: 'We take pride in work that lasts decades, not years.'
		}
	];
</script>

<div class="overflow-x-hidden">
	<section class="relative h-72 md:h-96 flex items-end overflow-hidden">
		<img
			src={HERO_IMG}
			alt="Contractor at work"
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
				transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
			>
				<div class="flex items-center gap-2 mb-3">
					<div class="h-px w-10" style="background-color: #f68318"></div>
					<span class="text-sm font-semibold tracking-widest uppercase" style="color: #f68318"
						>Our Story</span
					>
				</div>
				<h1 class="text-4xl md:text-6xl font-black text-white">About NEXRA</h1>
			</motion.div>
		</div>
	</section>

	<section class="py-24 px-6">
		<div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
			<FadeUp>
				<div class="relative">
					<img src={timImg} alt="Tim Muklanovich" class="w-full aspect-3/4 object-cover" />
					<div class="absolute -bottom-5 -left-5 p-5 text-white" style="background-color: #f68318">
						<div class="font-black text-xl">Tim Muklanovich</div>
						<div class="text-white/80 text-sm">Founder & General Contractor</div>
					</div>
				</div>
			</FadeUp>

			<FadeUp delay={0.15}>
				<div class="flex items-center gap-2 mb-5">
					<div class="h-px w-10" style="background-color: #f68318"></div>
					<span class="text-sm font-semibold tracking-widest uppercase" style="color: #f68318"
						>Meet The Owner</span
					>
				</div>
				<h2 class="text-4xl font-black mb-6" style="color: #141c26">
					Built by Hand. Backed by Experience.
				</h2>
				<p class="text-gray-600 leading-relaxed mb-4">
					Tim Muklanovich grew up learning construction from the ground up — literally. From framing
					walls as a teenager to managing complex multi-trade renovations today, Tim has never lost
					sight of what matters most: the homeowner experience.
				</p>
				<p class="text-gray-600 leading-relaxed mb-4">
					"I started NEXRA because I kept hearing the same story — homeowners burned by contractors
					who disappeared, went over budget, or did sloppy work. I knew we could do better."
				</p>
				<p class="text-gray-600 leading-relaxed mb-8">
					Today, NEXRA Construction is one of Clark County's most referred general contractors, with
					over 500 completed projects and a team of skilled tradespeople who share Tim's commitment
					to quality.
				</p>

				<ul class="space-y-3 mb-8">
					{#each ['WA State Licensed General Contractor', 'Fully bonded and insured', 'Member of Clark County HBA', 'Background-checked crew members'] as item (item)}
						<li class="flex items-center gap-3 text-gray-700 text-sm">
							<CheckCircle2 size={16} style="color: #f68318;flex-shrink: 0" />
							{item}
						</li>
					{/each}
				</ul>

				<a
					href="tel:+13602137927"
					class="inline-flex items-center gap-2 px-8 py-4 font-bold text-sm text-white tracking-wide hover:brightness-110 transition-all"
					style="background-color: #f68318"
				>
					<Phone size={16} /> Talk to Tim — (360) 213-7927
				</a>
			</FadeUp>
		</div>
	</section>

	<section style="background-color: #f9f9f9" class="py-24 px-6">
		<div class="max-w-7xl mx-auto">
			<FadeUp className="text-center mb-16">
				<div class="flex items-center justify-center gap-2 mb-4">
					<div class="h-px w-10" style="background-color: #f68318"></div>
					<span class="text-sm font-semibold tracking-widest uppercase" style="color: #f68318"
						>What Drives Us</span
					>
					<div class="h-px w-10" style="background-color: #f68318"></div>
				</div>
				<h2 class="text-4xl font-black" style="color: #141c26">Our Core Values</h2>
			</FadeUp>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{#each VALUES as v, i (v.title)}
					<FadeUp delay={i * 0.1}>
						<motion.div
							whileHover={{ y: -6, borderColor: '#f68318' }}
							transition={{ duration: 0.3 }}
							class="p-8 bg-white border border-gray-100 group"
						>
							<v.icon class="mb-5" size={36} style="color: #f68318;" />
							<h3 class="font-bold text-lg mb-2" style="color: #141c26;">{v.title}</h3>
							<p class="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
						</motion.div>
					</FadeUp>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-24 px-6" style="background-color: #141c26">
		<div class="max-w-4xl mx-auto">
			<FadeUp className="text-center mb-16">
				<div class="flex items-center justify-center gap-2 mb-4">
					<div class="h-px w-10" style="background-color: #f68318"></div>
					<span class="text-sm font-semibold tracking-widest uppercase" style="color: #f68318;"
						>Our Journey</span
					>
					<div class="h-px w-10" style="background-color: #f68318"></div>
				</div>
				<h2 class="text-4xl font-black text-white">15 Years of Building Trust</h2>
			</FadeUp>

			<div class="relative">
				<div class="space-y-12">
					{#each TIMELINE as item, i (item.year)}
						<FadeUp delay={i * 0.1}>
							<div class="flex gap-8 items-start">
								<div class="relative shrink-0 w-32 text-right">
									<span class="text-2xl font-black" style="color: #f68318">{item.year}</span>
									<div
										class="absolute right-0 top-3 translate-x-full ml-1 w-3 h-3 rounded-full border-2"
										style="background-color: #141c26;border-color: #f68318;transform: translateX(16px)"
									></div>
								</div>
								<div class="pt-1 pl-8">
									<h4 class="font-bold text-white text-lg mb-2">{item.title}</h4>
									<p class="text-white/60 text-sm leading-relaxed">{item.desc}</p>
								</div>
							</div>
						</FadeUp>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="py-24 px-6">
		<div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
			<FadeUp delay={0.1}>
				<div class="flex items-center gap-2 mb-5">
					<div class="h-px w-10" style="background-color: #f68318"></div>
					<span class="text-sm font-semibold tracking-widest uppercase" style="color: #f68318"
						>The Crew</span
					>
				</div>
				<h2 class="text-4xl font-black mb-6" style="color: #141c26">
					Skilled Tradespeople, Every One
				</h2>
				<p class="text-gray-600 leading-relaxed mb-4">
					Every NEXRA crew member is personally vetted by Tim. We don't sub out to strangers — the
					people who show up to your home are people Tim trusts with his own.
				</p>
				<p class="text-gray-600 leading-relaxed mb-8">
					Our team includes licensed carpenters, plumbers, electricians, and tile setters — all with
					deep Pacific Northwest experience.
				</p>
				<a
					href="/services"
					class="inline-flex items-center gap-2 font-bold text-sm tracking-wide hover:gap-4 transition-all"
					style="color: #f68318"
				>
					See What We Build <ArrowRight size={16} />
				</a>
			</FadeUp>
			<FadeUp>
				<img src={TEAM_IMG} alt="NEXRA crew at work" class="w-full aspect-4/3 object-cover" />
			</FadeUp>
		</div>
	</section>
</div>
