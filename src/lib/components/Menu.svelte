<script>
	import Tag from './Tag.svelte';

	const menus = [
		{ no: '01', name: 'Nasi Putih Pandan', cat: 'Nasi', desc: 'Beras pilihan, pulen dan wangi daun pandan.' },
		{ no: '02', name: 'Nasi Uduk', cat: 'Nasi', desc: 'Gurih santan dengan aroma serai dan daun jeruk.' },
		{ no: '03', name: 'Nasi Kuning', cat: 'Nasi', desc: 'Kunyit segar, pulen, favorit untuk acara syukuran.' },
		{ no: '04', name: 'Nasi Liwet', cat: 'Nasi', desc: 'Aroma kaldu rempah, gurih dan tidak berat.' },
		{ no: '05', name: 'Ayam Bakar Bumbu Rujak', cat: 'Lauk Utama', desc: 'Ayam kampung bakar dengan bumbu rujak pedas-manis.', favorite: true },
		{ no: '06', name: 'Ayam Goreng Lengkuas', cat: 'Lauk Utama', desc: 'Kremes lengkuas renyah, bumbu meresap sampai dalam.' },
		{ no: '07', name: 'Rendang Daging Sapi', cat: 'Lauk Utama', desc: 'Dimasak lambat dengan santan dan rempah hingga empuk.', favorite: true },
		{ no: '08', name: 'Ikan Nila Bakar', cat: 'Lauk Utama', desc: 'Nila segar berbumbu kuning, dibakar di atas arang.' },
		{ no: '09', name: 'Sayur Asem', cat: 'Sayur', desc: 'Kuah asam segar dengan labu, jagung, dan kacang.', favorite: true },
		{ no: '10', name: 'Sayur Lodeh', cat: 'Sayur', desc: 'Santan ringan, isi nangka muda dan aneka sayur.' },
		{ no: '11', name: 'Tumis Kangkung', cat: 'Sayur', desc: 'Kangkung muda, tumis bawang dan terasi.' },
		{ no: '12', name: 'Gado-Gado', cat: 'Sayur', desc: 'Sayuran rebus, tahu tempe, siram bumbu kacang.' },
		{ no: '13', name: 'Telur Balado', cat: 'Pelengkap', desc: 'Telur rebus dengan sambal balado tomat pedas-manis.' },
		{ no: '14', name: 'Tahu & Tempe Bacem', cat: 'Pelengkap', desc: 'Manis gurih, dibumbui ketumbar dan gula merah.' },
		{ no: '15', name: 'Sambal Goreng Kentang', cat: 'Pelengkap', desc: 'Kentang, tempe, dan bumbu sambal gurih.', favorite: true },
		{ no: '16', name: 'Acar & Kerupuk', cat: 'Pelengkap', desc: 'Acar timun nanas segar dengan kerupuk renyah.' }
	];

	const categories = ['Semua', 'Nasi', 'Lauk Utama', 'Sayur', 'Pelengkap'];
	let active = $state('Semua');
	const visible = $derived(active === 'Semua' ? menus : menus.filter((m) => m.cat === active));
	const count = (c) => (c === 'Semua' ? menus.length : menus.filter((m) => m.cat === c).length);
</script>

<section id="menu" class="bg-cream px-5 py-16 md:px-10 md:py-24">
	<div class="mx-auto max-w-[1200px]">
		<div class="paper relative overflow-hidden rounded-[2rem] px-5 py-10 text-cream md:px-10 md:py-14">
			<span
				aria-hidden="true"
				class="script pointer-events-none absolute -top-8 -right-3 -rotate-6 text-[8rem] leading-none text-lime/10 select-none md:-top-16 md:text-[15rem]"
			>
				Menu
			</span>

			<div class="relative">
				<div class="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
					<div>
						<p class="script text-3xl text-lime md:text-5xl">Pilihan Rasa</p>
						<h2 class="h-display mt-1 text-5xl md:text-8xl">Menu Andalan</h2>
						<p class="mt-4 max-w-md text-sm leading-relaxed text-cream/70">
							16 menu dari bahan segar harian — nasi, lauk, sayur, dan pelengkap untuk semua jenis acara.
						</p>
					</div>

					<div class="flex items-center gap-3">
						<Tag tone="lime" class="w-fit -rotate-2">16 menu · 4 kategori</Tag>
						<Tag tone="cream" class="hidden w-fit rotate-2 md:grid">Bahan<br />segar</Tag>
					</div>
				</div>

				<div
					class="mt-9 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-wrap md:overflow-visible"
					role="tablist"
					aria-label="Kategori menu"
				>
					{#each categories as c (c)}
						<button
							role="tab"
							aria-selected={active === c}
							class="flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold whitespace-nowrap transition
								{active === c
								? 'border-lime bg-lime text-forest-deep'
								: 'border-cream/20 text-cream/65 hover:border-lime/50 hover:text-cream'}"
							onclick={() => (active = c)}
						>
							{c}
							<span class="text-[0.65rem] opacity-60">{count(c)}</span>
						</button>
					{/each}
				</div>

				<div class="mt-6 grid gap-x-10 md:grid-cols-2">
					{#each visible as m (m.no)}
						<article class="group flex gap-4 border-b border-dashed border-cream/15 py-4">
							<span class="h-display w-8 shrink-0 text-2xl leading-none text-lime/50 transition group-hover:text-lime">
								{m.no}
							</span>
							<div class="min-w-0 flex-1">
								<div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
									<h3 class="h-display text-lg leading-tight text-cream md:text-xl">{m.name}</h3>
									<span class="text-[0.55rem] font-semibold tracking-[0.18em] text-cream/40 uppercase">{m.cat}</span>
									{#if m.favorite}
										<span class="rounded-full bg-lime/15 px-2 py-0.5 text-[0.55rem] font-bold tracking-wide text-lime uppercase">
											Favorit
										</span>
									{/if}
								</div>
								<p class="mt-1 text-xs leading-relaxed text-cream/60">{m.desc}</p>
							</div>
						</article>
					{/each}
				</div>

				<div
					class="mt-8 flex flex-col gap-5 border-t border-dashed border-cream/20 pt-6 md:flex-row md:items-center md:justify-between"
				>
					<div>
						<p class="h-display text-lg text-lime">Atur Menu Sesuai Paket</p>
						<p class="mt-1 text-xs leading-relaxed text-cream/65">
							Hemat pilih <b class="text-cream">3 menu</b> · Premium pilih <b class="text-cream">5 menu</b> · Custom
							bebas di luar 16 menu.
						</p>
					</div>
					<a href="#plans" class="btn-lime w-fit shrink-0 text-sm">Lihat Paket</a>
				</div>
			</div>
		</div>
	</div>
</section>
