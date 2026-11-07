<script>
	import Badge from './Badge.svelte';
	import Tag from './Tag.svelte';
	import { Paperclip } from '@lucide/svelte';
</script>

<section id="how" class="bg-cream px-5 py-16 md:px-10 md:py-24">
	<div class="mx-auto max-w-[1200px]">
		<h2 class="h-display text-6xl text-forest md:text-right md:text-8xl">
			How it works?
			<span class="script block text-3xl text-ember md:-mt-6 md:text-5xl">Three Simple Steps</span>
		</h2>

		<div class="mt-12 grid gap-4 md:grid-cols-[1fr_1fr_1.35fr] md:grid-rows-2 md:gap-5">
			<!-- step 1 -->
			<article class="relative flex min-h-[26rem] flex-col overflow-hidden rounded-3xl bg-forest p-7 text-cream md:row-span-2 md:min-h-0">
				<h3 class="script text-3xl text-cream/90">1. take the quiz</h3>
				<p class="mt-3 max-w-[26ch] text-sm text-cream/80">5 quick questions about your goals, lifestyle and biometrics — takes less than 5 minutes.</p>
				<a href="#plans" class="btn-lime mt-6 w-fit text-sm">Create My Personal Plan</a>
				<div class="relative mt-auto -mr-7 -mb-7 -ml-7 h-44 pt-4">
					<img src="/images/mealbox.jpg" alt="Meal box" class="size-full rounded-bl-3xl object-cover" />
					<Badge tone="cream" class="absolute top-0 -right-0 w-24 rotate-6">Takes 5 min. No signup needed</Badge>
				</div>
			</article>

			<!-- step 2 -->
			<article class="fold relative rounded-3xl bg-forest p-7 text-cream">
				<h3 class="script text-3xl text-lime">2. get your plan</h3>
				<p class="mt-3 max-w-[30ch] text-sm text-cream/80">Our LAVO+ system and expert nutritionists create your meals with macro-level precision.</p>
			</article>

			<!-- big image -->
			<div class="relative min-h-72 overflow-hidden rounded-3xl md:row-span-2 md:min-h-0">
				<img src="/images/kurir.jpg" alt="Delivery" class="absolute inset-0 size-full object-cover" />
				<Tag class="absolute right-4 bottom-4 rotate-3">Delivery<br />within 24h</Tag>
			</div>

			<!-- step 3 -->
			<article class="fold relative rounded-3xl bg-forest p-7 text-cream">
				<Paperclip class="absolute -top-3 right-5 -rotate-12 text-ember md:-top-4 md:-right-3" size={30} />
				<h3 class="script text-3xl text-cream/90">3. eat &amp; enjoy</h3>
				<p class="mt-3 max-w-[30ch] text-sm text-cream/80">Get your macro-balanced plan within 24h or on your chosen days. Pause or change anytime.</p>
			</article>
		</div>
	</div>
</section>

<style>
	/* folded bottom-right corner */
	.fold::after {
		content: '';
		position: absolute;
		right: 0;
		bottom: 0;
		width: 3.2rem;
		height: 3.2rem;
		background: linear-gradient(135deg, #07492f 50%, #fbf7dc 50%);
		border-top-left-radius: 1rem;
		border-bottom-right-radius: 1.5rem;
	}
</style>
