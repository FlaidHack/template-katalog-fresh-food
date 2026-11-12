<script>
	import ChevronLeft from '@lucide/svelte/icons/chevron-left';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';

	const filters = ['Semua acara', 'Pernikahan', 'Kantor', 'Syukuran', 'Arisan'];
	let active = $state('Semua acara');

	const stories = [
		{ name: 'Rina', img: '/images/ava1.jpg', meta: 'Pernikahan, 300 pax', loss: '300 pax', time: 'Pernikahan', tag: 'Pernikahan',
		  quote: 'Menunya enak dan porsinya pas. Banyak tamu yang tanya kateringnya dari mana. Tim datang lebih awal, jadi acara tidak molor.', bold: 'Semua berjalan sesuai jadwal.' },
		{ name: 'Pak Andi', img: '/images/ava2.jpg', meta: 'Acara kantor, 120 pax', loss: '120 pax', time: 'Kantor', tag: 'Kantor',
		  quote: 'Kami pakai untuk makan siang kantor. Pesan mendadak, tetap datang tepat waktu. Sayurnya segar dan tidak berminyak.', bold: '' },
		{ name: 'Bu Sari', img: '/images/ava3.jpg', meta: 'Syukuran, 80 pax', loss: '80 pax', time: 'Syukuran', tag: 'Syukuran',
		  quote: 'Dari konsultasi sampai hari acara, komunikasinya enak. Bisa custom menu sesuai selera keluarga. Harga jelas dari awal.', bold: '' },
		{ name: 'Dewi', img: '/images/dummy.jpg', meta: 'Arisan, 50 pax', loss: '50 pax', time: 'Arisan', tag: 'Arisan',
		  quote: 'Porsi 50 pax ternyata lebih dari cukup. Alat saji rapi, tim serving ramah. Tidak perlu repot cuci piring setelah acara.', bold: '' },
		{ name: 'Rudi', img: '/images/dummy.jpg', meta: 'Pernikahan, 500 pax', loss: '500 pax', time: 'Pernikahan', tag: 'Pernikahan',
		  quote: 'Acara besar tapi tetap terkontrol. Food station ramai, dessert habis, dan tamu puas. Kami akan pakai lagi untuk acara berikutnya.', bold: '' }
	];

	const visible = $derived(active === 'Semua acara' ? stories : stories.filter((s) => s.tag === active));
	let track = $state();
	const scroll = (dir) => track?.scrollBy({ left: dir * 380, behavior: 'smooth' });
</script>

<section id="stories" class="bg-cream px-5 py-16 md:px-10 md:py-24">
	<div class="mx-auto max-w-[1200px]">
		<h2 class="h-display relative text-center text-6xl text-forest md:text-8xl max-md:text-left">
			Kata<br class="md:hidden" /> Pelanggan
			<span class="script block text-3xl text-ember md:-mt-8 md:text-5xl max-md:mt-1 md:rotate-[-2deg]">Acara Lancar</span>
		</h2>

		<div class="mt-10 flex gap-2 overflow-x-auto md:mx-auto md:w-fit md:rounded-full md:border md:border-forest/15 md:p-1.5 md:overflow-visible max-md:flex-wrap" role="tablist" aria-label="Filter testimoni">
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
			<button class="absolute top-1/2 -left-6 z-10 hidden -translate-y-1/2 md:block" aria-label="Sebelumnya" onclick={() => scroll(-1)}><ChevronLeft /></button>
			<button class="absolute top-1/2 -right-6 z-10 hidden -translate-y-1/2 md:block" aria-label="Berikutnya" onclick={() => scroll(1)}><ChevronRight /></button>

			<div bind:this={track} class="flex snap-x snap-mandatory gap-6 overflow-x-auto px-3 pt-6 pb-4 [scrollbar-width:none] md:justify-center">
				{#each visible as s (s.name)}
					<article class="relative flex w-[19rem] shrink-0 snap-center flex-col rounded-3xl border-2 border-forest/70 bg-cream p-5 shadow-[0_0_0_5px_#fbf7dc,0_0_0_6px_rgba(11,93,64,0.25)] md:w-[22rem]">
						<span class="h-display absolute -top-3 right-4 rotate-6 rounded-full bg-forest px-3 py-1 text-sm text-lime">{s.loss}</span>
						<span class="absolute top-6 right-2 -rotate-3 rounded-full border border-forest/50 bg-cream px-3 py-0.5 text-[0.65rem] font-semibold">{s.time}</span>

						<div class="flex items-center gap-3">
							<img
								src={s.img}
								alt={s.name}
								loading="lazy"
								decoding="async"
								class="size-16 rounded-xl border border-forest/20 object-cover"
							/>
							<div>
								<h3 class="h-display text-2xl">{s.name},</h3>
								<p class="text-xs text-forest/60">{s.meta}</p>
							</div>
						</div>

						<p class="mt-5 flex-1 text-sm leading-relaxed">“{s.quote}{#if s.bold} <b>{s.bold}</b>{/if}”</p>
						<a href="#plans" class="btn-lime mt-6 text-sm">Minta Penawaran</a>
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>
