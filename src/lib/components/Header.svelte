<script>
	let open = $state(false);
</script>

<header class="absolute inset-x-0 top-0 z-30 text-cream">
	<div class="mx-auto flex max-w-[1400px] items-start justify-between px-5 py-5 md:px-10">
		<a href="/" class="h-display text-[1.35rem] leading-[0.85] md:text-3xl" aria-label="Fresh Food home">
			Fresh<br />Food
		</a>

		<p class="hidden max-w-[20ch] pt-1 text-right text-[0.7rem] leading-snug text-cream/85 md:block">
			Premium, ready-to-eat meals tailored to your goals, lifestyle and body.
		</p>

		<div class="flex items-center gap-4">
			<a href="#plans" class="btn-lime hidden !py-2.5 text-sm md:inline-flex">Create My Plan</a>
			<button
				class="grid size-9 gap-1.5 md:hidden"
				aria-label="Menu"
				aria-expanded={open}
				onclick={() => (open = !open)}
			>
				<span class="mt-2 block h-0.5 w-6 bg-cream"></span>
				<span class="block h-0.5 w-6 bg-cream"></span>
				<span class="block h-0.5 w-6 bg-cream"></span>
			</button>
		</div>
	</div>

	{#if open}
		<nav class="bg-forest-deep/95 px-5 pb-6 md:hidden">
			<ul class="grid gap-3 text-lg">
				<li><a href="#stories" onclick={() => (open = false)}>True Stories</a></li>
				<li><a href="#how" onclick={() => (open = false)}>How it works</a></li>
				<li><a href="#plans" onclick={() => (open = false)}>Plans</a></li>
				<li><a href="#different" onclick={() => (open = false)}>Why us</a></li>
			</ul>
		</nav>
	{/if}
</header>
