<script lang="ts">
	import { CheckCircle, Clock, Mail, MapPin, Phone } from '@lucide/svelte';

	let submitted = $state(false);

	const handleSubmit = (e: Event) => {
		e.preventDefault();
		submitted = true;
	};
</script>

<div style="font-family: var(--font-body)">
	<section class="bg-[#141c26] pt-40 pb-24">
		<div class="max-w-7xl mx-auto px-6 lg:px-8">
			<div class="flex items-center gap-3 mb-4">
				<div class="h-px w-10 bg-[#f68318]"></div>
				<span class="text-[#f68318] text-sm font-semibold uppercase tracking-[0.2em]"
					>Get In Touch</span
				>
			</div>
			<h1
				style="font-family: var(--font-heading);font-weight: 800;font-size:clamp(2.4rem, 5vw, 4rem);line-height: 1.05"
				class="text-white max-w-2xl"
			>
				Request Your Free Estimate
			</h1>
			<p class="text-gray-400 mt-6 text-lg max-w-xl leading-relaxed">
				Fill out the form and Tim will respond within 24 hours. No pressure, no obligation — just
				honest answers.
			</p>
		</div>
	</section>

	<section class="py-24 bg-white">
		<div class="max-w-7xl mx-auto px-6 lg:px-8">
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
				<div>
					<h2
						style="font-family: var(--font-heading);font-weight: 700;font-size: 1.5rem"
						class="text-[#141c26] mb-8"
					>
						Contact Details
					</h2>
					<ul class="space-y-6">
						<li class="flex items-start gap-4">
							<div class="w-10 h-10 bg-[#f68318] flex items-center justify-center shrink-0">
								<Phone size={18} class="text-white" />
							</div>
							<div>
								<div class="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
									Phone
								</div>
								<a
									href="tel:+13602137927"
									class="text-[#141c26] font-semibold hover:text-[#f68318] transition-colors"
									>(360) 213-7927</a
								>
							</div>
						</li>
						<li class="flex items-start gap-4">
							<div class="w-10 h-10 bg-[#f68318] flex items-center justify-center shrink-0">
								<Mail size={18} class="text-white" />
							</div>
							<div>
								<div class="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
									Email
								</div>
								<a
									href="mailto:tim@nexraconstruction.com"
									class="text-[#141c26] font-semibold hover:text-[#f68318] transition-colors text-sm"
									>tim@nexraconstruction.com</a
								>
							</div>
						</li>
						<li class="flex items-start gap-4">
							<div class="w-10 h-10 bg-[#f68318] flex items-center justify-center shrink-0">
								<MapPin size={18} class="text-white" />
							</div>
							<div>
								<div class="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
									Service Area
								</div>
								<span class="text-[#141c26] font-semibold text-sm"
									>Clark County, WA<br />Vancouver & surrounding cities</span
								>
							</div>
						</li>
						<li class="flex items-start gap-4">
							<div class="w-10 h-10 bg-[#f68318] flex items-center justify-center shrink-0">
								<Clock size={18} class="text-white" />
							</div>
							<div>
								<div class="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
									Hours
								</div>
								<span class="text-[#141c26] font-semibold text-sm"
									>Mon - Fri: 7am - 6pm<br />Sat: 8am - 3pm</span
								>
							</div>
						</li>
					</ul>

					<div class="mt-12 bg-[#f4f5f7] p-6">
						<div
							style="font-family: var(--font-heading);font-weight: 700;font-size: 1rem"
							class="text-[#141c26] mb-2"
						>
							License & Insurance
						</div>
						<p class="text-gray-500 text-xs leading-relaxed">
							NEXRA Construction is fully licensed in Washington State, bonded, and carries general
							liability and workers' comp insurance. License #WA-NEXRACI001.
						</p>
					</div>
				</div>

				<div class="lg:col-span-2">
					{#if submitted}
						<div class="flex flex-col items-center justify-center text-center py-20">
							<CheckCircle size={56} class="text-[#f68318] mb-6" />
							<h3
								style="font-family: var(--font-heading);font-weight: 800;font-size: 2rem"
								class="text-[#141c26] mb-4"
							>
								Message Received!
							</h3>
							<p class="text-gray-500 max-w-md">
								Thanks for reaching out. Tim will review your request and get back to you within 24
								hours. We look forward to working with you.
							</p>
						</div>
					{:else}
						<form onsubmit={handleSubmit} class="space-y-6">
							<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
								<div>
									<label
										class="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2"
										for="name">Full Name *</label
									>
									<input
										id="name"
										type="text"
										name="name"
										required
										class="w-full border border-gray-200 px-4 py-3 text-sm text-[#141c26] focus:outline-none focus:border-[#f68318] transition-colors"
										placeholder="John Smith"
									/>
								</div>
								<div>
									<label
										class="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2"
										for="email">Email *</label
									>
									<input
										type="email"
										name="email"
										required
										id="email"
										class="w-full border border-gray-200 px-4 py-3 text-sm text-[#141c26] focus:outline-none focus:border-[#f68318] transition-colors"
										placeholder="john@email.com"
									/>
								</div>
								<div>
									<label
										class="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2"
										for="phone">Phone</label
									>
									<input
										type="tel"
										name="phone"
										id="phone"
										class="w-full border border-gray-200 px-4 py-3 text-sm text-[#141c26] focus:outline-none focus:border-[#f68318] transition-colors"
										placeholder="(360) 000-0000"
									/>
								</div>
								<div>
									<label
										class="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2"
										for="city">City</label
									>
									<input
										type="text"
										name="city"
										id="city"
										class="w-full border border-gray-200 px-4 py-3 text-sm text-[#141c26] focus:outline-none focus:border-[#f68318] transition-colors"
										placeholder="Vancouver, WA"
									/>
								</div>
							</div>

							<div>
								<label
									class="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2"
									for="service">Service Needed</label
								>
								<select
									name="service"
									id="service"
									class="w-full border border-gray-200 px-4 py-3 text-sm text-[#141c26] focus:outline-none focus:border-[#f68318] transition-colors bg-white"
								>
									<option value="">Select a service...</option>
									<option>New Home Construction</option>
									<option>Full Home Remodeling</option>
									<option>Kitchen Renovation</option>
									<option>Bathroom Remodeling</option>
									<option>Home Addition</option>
									<option>Deck / Outdoor Space</option>
									<option>Commercial Build-Out</option>
									<option>Roofing & Siding</option>
									<option>Other</option>
								</select>
							</div>

							<div>
								<label
									class="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2"
									for="message">Project Details *</label
								>
								<textarea
									name="message"
									required
									rows={6}
									id="message"
									class="w-full border border-gray-200 px-4 py-3 text-sm text-[#141c26] focus:outline-none focus:border-[#f68318] transition-colors resize-none"
									placeholder="Tell us about your project — size, timeline, budget range, any specifics..."
								></textarea>
							</div>

							<button
								type="submit"
								class="w-full bg-[#f68318] hover:bg-[#e0731a] text-white font-semibold uppercase tracking-wider py-4 transition-colors duration-200"
							>
								Send Request → Free Estimate
							</button>
						</form>
					{/if}
				</div>
			</div>
		</div>
	</section>
</div>
