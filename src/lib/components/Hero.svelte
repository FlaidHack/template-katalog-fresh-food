<script>
	import Badge from './Badge.svelte';

	const avatars = ['/images/ava1.jpg', '/images/ava2.jpg', '/images/ava3.jpg'];
</script>

<section class="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-cream">
	<img src="/images/hero.jpg" alt="Fresh meal" class="absolute inset-0 -z-20 size-full object-cover" />
	<div class="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/15 to-black/70"></div>

	<div class="mx-auto mt-auto w-full max-w-[1400px] px-5 pb-8 md:px-10 md:pb-10">
		<div class="mb-8 hidden w-fit items-center gap-3 rounded-full border border-cream/30 bg-black/25 py-2 pr-5 pl-2 backdrop-blur md:flex">
			<div class="flex -space-x-2">
				{#each avatars as src (src)}
					<img src={src} alt="" class="size-8 rounded-full border-2 border-cream object-cover" />
				{/each}
			</div>
			<p class="text-[0.7rem] leading-tight"><b class="block text-sm">12,345</b> People already reaching their health goals</p>
		</div>

		<div class="relative">
			<p class="script -mb-2 -rotate-3 text-3xl text-lime md:-mb-4 md:text-6xl">Healthy Meals</p>
			<h1 class="h-display text-[22vw] md:text-[clamp(4.2rem,17vw,16rem)] max-md:hyphens-auto max-md:break-words max-md:leading-[0.88]">
				<span class="md:hidden">Person-<br />alised</span><span class="hidden md:inline">Personalised</span>
			</h1>
			<Badge tone="ember" class="absolute -top-20 right-0 hidden w-24 rotate-12 md:grid lg:-top-24 lg:w-28">
				Best Food <br /> Award 2026
			</Badge>
		</div>

		<p class="mt-4 max-w-[34ch] text-base text-cream/90 md:hidden">
			We deliver premium, ready-to-eat meals tailored to your goals, lifestyle and body.
		</p>

		<div class="mt-5 flex items-center gap-3 md:hidden">
			<div class="flex -space-x-2">
				{#each avatars as src (src)}
					<img src={src} alt="" class="size-8 rounded-full border-2 border-cream object-cover" />
				{/each}
			</div>
			<p class="text-[0.7rem] leading-tight"><b class="block text-sm">12,345</b> People already reaching their health goals</p>
		</div>

		<a href="#plans" class="btn-lime mt-6 w-full !py-4 text-lg md:hidden">Create My Personal Plan</a>
	</div>

	<div class="bg-ember py-2 text-center text-xs font-semibold text-cream md:bg-lime md:text-forest-deep">
		Get 45% OFF your first week with code SPRING45. Offer ends this week!
	</div>
</section>
