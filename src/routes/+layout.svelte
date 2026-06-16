<script lang="ts">
	import { ChevronRight, Menu, Phone, X } from '@lucide/svelte';
	import { AnimatePresence, Motion } from 'svelte-motion';
	import favicon from '$lib/assets/favicon.svg';
	import logo from '$lib/assets/logo.png';
	import { page } from '$app/stores';
	import './layout.css';

	let { children } = $props();

	const NAV_LINKS = [
		{ label: 'Home', to: '/' },
		{ label: 'About', to: '/about' },
		{ label: 'Services', to: '/services' },
		{ label: 'Projects', to: '/projects' },
		{ label: 'Testimonials', to: '/testimonials' },
		{ label: 'Areas Served', to: '/areas-served' }
	];

	let menuOpen = $state(false);
	let scrolled = $state(false);
	let location = $derived($page.url);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<div class="py-2 px-4 text-center text-sm text-white font-medium hidden md:block bg-[#f68318]">
		<span>Serving Clark County, WA — Call us today: </span>
		<a href="tel:+13605550199" class="font-bold underline underline-offset-2"> (360) 555-0199 </a>
	</div>

	<header
		class="sticky top-0 z-50 transition-all duration-300 bg-[#141c26]"
		style="box-shadow: {scrolled ? '0 2px 24px rgba(0,0,0,0.18)' : 'none'};"
	>
		<div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
			<a href="/" class="flex items-center gap-2 group">
				<img src={logo} alt="the company logo" class="h-10" />
			</a>

			<nav class="hidden lg:flex items-center gap-8">
				{#each NAV_LINKS as link (link.to)}
					<a
						href={link.to}
						class="relative text-sm font-semibold tracking-wide transition-colors group"
						style="color: #ffffff;"
					>
						{link.label}
						<span
							class="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 group-hover:w-full bg-[#f68318]"
							style="width: {location.pathname === link.to ? '100%' : '0%'};"
						></span>
					</a>
				{/each}
			</nav>

			<div class="hidden lg:flex items-center gap-3">
				<a
					href="tel:+13605550199"
					class="flex items-center gap-2 text-sm font-medium transition-colors"
					style="color: #ffffff"
				>
					<Phone size={15} />
					(360) 555-0199
				</a>
				<a
					href="/about"
					class="flex items-center gap-1 px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 bg-[#f68318]"
				>
					Free Estimate <ChevronRight size={14} />
				</a>
			</div>

			<button class="lg:hidden text-white p-1" onclick={() => (menuOpen = !menuOpen)}>
				{#if menuOpen}
					<X size={24} />
				{:else}
					<Menu size={24} />
				{/if}
			</button>
		</div>
	</header>

	<AnimatePresence show={menuOpen}>
		<Motion
			initial={{ opacity: 0, x: '100%' }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: '100%' }}
			transition={{ duration: 0.3, ease: 'easeInOut' }}
			let:motion
		>
			<div use:motion class="fixed inset-0 z-40 flex flex-col pt-24 bg-[#141c26]">
				<nav class="flex flex-col px-8 gap-2">
					{#each NAV_LINKS as link, i (link.to)}
						<Motion
							initial={{ opacity: 0, x: 40 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{
								delay: i * 0.06,
								duration: 0.3
							}}
							let:motion
						>
							<div use:motion>
								<a
									href={link.to}
									class="block py-4 text-2xl font-bold text-white border-b border-white/10"
									style="color: {location.pathname === link.to ? '#f68318' : ''};"
								>
									{link.label}
								</a>
							</div>
						</Motion>
					{/each}
					<Motion
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						let:motion
					>
						<div use:motion class="mt-8">
							<a
								href="tel:+13605550199"
								class="flex items-center gap-2 py-4 text-xl font-bold"
								style="color: #f68318"
							>
								<Phone size={20} /> (360) 555-0199
							</a>
						</div>
					</Motion>
				</nav>
			</div>
		</Motion>
	</AnimatePresence>

	<main class="flex-1">
		{@render children()}
	</main>

	<footer class="text-white bg-[#141c26]">
		<div class="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
			<div class="md:col-span-1">
				<div class="flex items-center gap-2 mb-4">
					<img src={logo} alt="the company logo" class="h-10" />
				</div>
				<p class="text-white/60 text-sm leading-relaxed">
					Quality craftsmanship built on trust. Serving Clark County homeowners and businesses since
					2010.
				</p>
			</div>

			<div>
				<h4 class="font-bold text-sm tracking-widest mb-5" style="color: #f68318">NAVIGATE</h4>
				<ul class="space-y-3">
					{#each NAV_LINKS as link (link.to)}
						<li>
							<a href={link.to} class="text-white/60 hover:text-white text-sm transition-colors">
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h4 class="font-bold text-sm tracking-widest mb-5" style="color: #f68318">SERVICES</h4>
				<ul class="space-y-3 text-white/60 text-sm">
					<li>General Contracting</li>
					<li>Kitchen Remodeling</li>
					<li>Bathroom Renovation</li>
					<li>Room Additions</li>
					<li>Deck & Patio</li>
					<li>Basement Finishing</li>
				</ul>
			</div>

			<div>
				<h4 class="font-bold text-sm tracking-widest mb-5" style="color: #f68318">CONTACT</h4>
				<ul class="space-y-3 text-white/60 text-sm">
					<li>
						📞{' '}
						<a href="tel:+13605550199" class="hover:text-white transition-colors">
							(360) 555-0199
						</a>
					</li>
					<li>
						✉️{' '}
						<a href="mailto:info@nexraconstruction.com" class="hover:text-white transition-colors">
							info@nexraconstruction.com
						</a>
					</li>
					<li>📍 Vancouver, WA 98660</li>
					<li class="pt-2">
						<span class="font-semibold text-white/80"> Hours: </span>
						<br />
						Mon-Fri: 7am - 6pm
						<br />
						Sat: 8am - 4pm
					</li>
				</ul>
			</div>
		</div>

		<div class="border-t border-white/10 py-6 px-6 text-center text-white/40 text-xs">
			© {new Date().getFullYear()} NEXRA Construction — Tim Muklanovich, General Contractor · Clark County,
			WA · License #NEXRACO123
		</div>
	</footer>
</div>
