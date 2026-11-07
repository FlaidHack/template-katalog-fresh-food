<script>
	import { ChevronLeft, ChevronRight } from '@lucide/svelte';

	const filters = ['All reviews', 'Weight Loss', 'Muscle Gain', 'Performance', 'Maintain & Energise', 'Healthy Lifestyle', 'Special Diets'];
	let active = $state('Weight Loss');

	const stories = [
		{ name: 'Bowo', img: '/images/ava1.jpg', meta: '38 years, Sawit Specialist', loss: '-9.5 kg', time: '8 weeks', tag: 'Weight Loss',
		  quote: 'I dropped 9.5 kg and finally saw my waist again — all within 8 weeks! The healthy meals were not only delicious, but also perfectly portioned and easy to stick to.', bold: "I didn't have to think about food, just enjoy the journey." },
		{ name: 'Bahlil', img: '/images/ava2.jpg', meta: '29 years, Maniac Minyak', loss: '-8 kg', time: '6 weeks', tag: 'Weight Loss',
		  quote: 'Shed 8 kg and my stomach is flatter in just 6 weeks. The meals gave me energy, kept me full, and it honestly changed how I eat and feel about food.', bold: '' },
		{ name: 'Owi', img: '/images/ava3.jpg', meta: '34 years, Yo Ndak Tau', loss: '-7.5 kg', time: '7 weeks', tag: 'Weight Loss',
		  quote: 'I lost 7.5 kg and felt more confident in my clothes after just 7 weeks! The meals were incredibly tasty and made eating healthier effortless. Finally, a routine I could stick to and feel free.', bold: '' },
		{ name: 'Marcus', img: '/images/dummy.jpg', meta: '31 years, Engineer', loss: '+4 kg', time: '10 weeks', tag: 'Muscle Gain',
		  quote: 'Hit my protein targets every single day without meal prep. Lean mass is up and my lifts are finally moving again.', bold: '' },
		{ name: 'Dian', img: '/images/dummy.jpg', meta: '27 years, Runner', loss: '-6 min', time: '12 weeks', tag: 'Performance',
		  quote: 'Took six minutes off my half marathon. Fuelled properly for the first time, no guessing.', bold: '' }
	];

	const visible = $derived(active === 'All reviews' ? stories : stories.filter((s) => s.tag === active));
	let track = $state();
	const scroll = (dir) => track?.scrollBy({ left: dir * 380, behavior: 'smooth' });
</script>

<section id="stories" class="bg-cream px-5 py-16 md:px-10 md:py-24">
	<div class="mx-auto max-w-[1200px]">
		<h2 class="h-display relative text-center text-6xl text-forest md:text-8xl max-md:text-left">
			True<br class="md:hidden" /> Stories
			<span class="script block text-3xl text-ember md:-mt-8 md:text-5xl max-md:mt-1 md:rotate-[-2deg]">Measurable Results</span>
		</h2>

		<div class="mt-10 flex gap-2 overflow-x-auto md:mx-auto md:w-fit md:rounded-full md:border md:border-forest/15 md:p-1.5 md:overflow-visible max-md:flex-wrap" role="tablist" aria-label="Filter stories">
			{#each filters as f (f)}
				<button
					role="tab"
					aria-selected={active === f}
					class="rounded-full border px-4 py-1.5 text-xs whitespace-nowrap transition max-md:border-forest/20
						{active === f ? 'border-lime bg-lime/40 font-semibold ring-2 ring-lime ring-offset-2 ring-offset-cream' : 'border-transparent hover:bg-forest/5'}"
					onclick={() => (active = f)}
				>
					{f}
				</button>
			{/each}
		</div>

		<div class="relative mt-10">
			<button class="absolute top-1/2 -left-6 z-10 hidden -translate-y-1/2 md:block" aria-label="Previous" onclick={() => scroll(-1)}><ChevronLeft /></button>
			<button class="absolute top-1/2 -right-6 z-10 hidden -translate-y-1/2 md:block" aria-label="Next" onclick={() => scroll(1)}><ChevronRight /></button>

			<div bind:this={track} class="flex snap-x snap-mandatory gap-6 overflow-x-auto px-3 pt-6 pb-4 [scrollbar-width:none] md:justify-center">
				{#each visible as s (s.name)}
					<article class="relative flex w-[19rem] shrink-0 snap-center flex-col rounded-3xl border-2 border-forest/70 bg-cream p-5 shadow-[0_0_0_5px_#fbf7dc,0_0_0_6px_rgba(11,93,64,0.25)] md:w-[22rem]">
						<span class="h-display absolute -top-3 right-4 rotate-6 rounded-full bg-forest px-3 py-1 text-sm text-lime">{s.loss}</span>
						<span class="absolute top-6 right-2 -rotate-3 rounded-full border border-forest/50 bg-cream px-3 py-0.5 text-[0.65rem] font-semibold">{s.time}</span>

						<div class="flex items-center gap-3">
							<img src={s.img} alt={s.name} class="size-16 rounded-xl border border-forest/20 object-cover" />
							<div>
								<h3 class="h-display text-2xl">{s.name},</h3>
								<p class="text-xs text-forest/60">{s.meta}</p>
							</div>
						</div>

						<p class="mt-5 flex-1 text-sm leading-relaxed">“{s.quote}{#if s.bold} <b>{s.bold}</b>{/if}”</p>
						<a href="#plans" class="btn-lime mt-6 text-sm">Get Similar Results</a>
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>
