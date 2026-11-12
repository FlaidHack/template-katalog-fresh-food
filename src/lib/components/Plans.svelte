<script>
	import Badge from './Badge.svelte';
	import Tag from './Tag.svelte';
	import Check from '@lucide/svelte/icons/check';
	import Minus from '@lucide/svelte/icons/minus';

	const features = ['Nasi & lauk', 'Sayur & sambal', 'Alat saji', 'Tim serving', 'Menu di luar daftar', 'Tasting gratis'];

	const plans = [
		{ name: 'Hemat', sub: 'Untuk arisan & syukuran', menu: '3 menu / pax', menuNote: '1 nasi + 1 lauk + 1 sayur', on: [true, true, false, false, false, false], price: 'Rp 35.000 / pax', cta: 'Pilih Hemat', featured: false },
		{ name: 'Premium', sub: 'Paling sering dipilih', menu: '5 menu / pax', menuNote: '1 nasi + 2 lauk + 1 sayur + 1 pelengkap', on: [true, true, true, true, false, false], price: 'Rp 55.000 / pax', cta: 'Pilih Premium', featured: true },
		{ name: 'Custom', sub: 'Menu sesuai acara', menu: 'Bebas / pax', menuNote: 'Bisa di luar 16 menu andalan', on: [true, true, true, true, true, true], price: 'Rp 75.000 / pax', cta: 'Konsultasi Custom', featured: false }
	];
</script>

<section id="plans" class="paper relative overflow-hidden px-5 py-16 text-cream md:px-10 md:py-24">
	<div class="relative mx-auto max-w-[1100px]">
		<div class="relative text-center">
			<p class="script text-3xl text-lime md:text-5xl">Pilih Paket</p>
			<h2 class="h-display text-5xl md:text-8xl">Sesuai Acara</h2>
			<Badge tone="ember" class="absolute -top-2 right-0 hidden w-24 rotate-6 md:grid">Harga<br />per pax</Badge>
			<Tag class="absolute top-16 -right-4 hidden w-28 -rotate-6 md:grid">Min. 50<br />pax</Tag>
		</div>

		<div class="mt-14 grid items-center gap-6 md:grid-cols-3 md:gap-0">
			{#each plans as p (p.name)}
				<article
					class="ticket relative flex flex-col px-7 pt-9 pb-7 text-center
					{p.featured ? 'bg-cream text-forest md:z-10 md:py-12' : 'border-2 border-dashed border-cream/25 text-cream'}"
				>
					<h3 class="h-display text-4xl">{p.name}</h3>
					<p class="mt-2 text-xs opacity-70">{p.sub}</p>

					<div
						class="mt-5 rounded-2xl border border-dashed px-4 py-3 {p.featured
							? 'border-forest/25 bg-forest/5'
							: 'border-cream/20 bg-cream/5'}"
					>
						<p class="h-display text-2xl {p.featured ? 'text-forest' : 'text-lime'}">{p.menu}</p>
						<p class="mt-1 text-[0.65rem] leading-snug opacity-65">{p.menuNote}</p>
					</div>

					<ul class="mt-6 grid gap-3 text-left text-sm">
						{#each features as f, i (f)}
							<li class="flex items-center gap-3 {p.on[i] ? '' : 'opacity-35'}">
								<span class="grid size-5 shrink-0 place-items-center rounded-full {p.on[i] ? 'bg-lime text-forest-deep' : 'border border-current'}">
									{#if p.on[i]}<Check size={12} strokeWidth={3} />{:else}<Minus size={12} />{/if}
								</span>
								{f}
							</li>
						{/each}
					</ul>

					<div class="mt-8 border-t border-dashed {p.featured ? 'border-forest/30' : 'border-cream/25'} pt-6">
						<a href="#plans" class="btn-lime w-full text-sm {p.featured ? 'ring-1 ring-forest/40' : ''}">{p.cta}</a>
						<p class="h-display mt-3 text-sm tracking-wide">Mulai {p.price}</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.ticket {
		border-radius: 1.25rem;
	}
	/* notches on the tear line */
	.ticket::before,
	.ticket::after {
		content: '';
		position: absolute;
		bottom: 8.2rem;
		width: 1.1rem;
		height: 1.1rem;
		border-radius: 999px;
		background: #0b5d40;
	}
	.ticket::before {
		left: -0.55rem;
	}
	.ticket::after {
		right: -0.55rem;
	}
</style>
