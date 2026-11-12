<script>
	import Tag from './Tag.svelte';
</script>

<section id="about" class="overflow-hidden bg-cream px-5 pt-16 pb-16 md:px-10 md:pt-24 md:pb-24">
	<div class="mx-auto max-w-[1200px]">
		<div class="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-forest/15 pb-4">
			<div class="flex items-center gap-3">
				<span class="h-display text-sm text-ember">01</span>
				<span class="whitespace-nowrap text-[0.6rem] font-semibold tracking-[0.28em] text-forest/55 uppercase">Tentang Dapur Rasa</span>
			</div>
			<span class="flex items-center gap-2 text-[0.6rem] font-semibold tracking-[0.18em] text-forest/45 uppercase">
				<span class="size-1.5 rounded-full bg-ember"></span>
				Samarinda · Kalimantan Timur
			</span>
		</div>

		<div class="mt-10 grid gap-14 md:mt-14 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-16">
			<div>
				<h2 class="h-display text-[3.2rem] leading-[0.9] text-forest sm:text-7xl md:text-[5rem] lg:text-[5.8rem]">
					<span class="block">Dari dapur</span>
					<span class="script -mt-1 block text-4xl leading-none text-ember sm:text-5xl md:-mt-2 md:text-6xl">kecil</span>
					<span class="block">di Samarinda,</span>
					<span class="block">untuk acara</span>
					<span class="relative isolate inline-block">
						<span class="absolute inset-x-[-0.08em] bottom-[0.1em] -z-10 h-[0.28em] -rotate-1 bg-lime"></span>
						yang besar.
					</span>
				</h2>

				<p class="mt-6 max-w-xl text-sm leading-relaxed text-forest/75 md:text-base">
					Dapur Rasa dimulai dari masakan rumahan untuk keluarga dan tetangga. Porsinya terus bertambah,
					sampai dapur kami dipercaya menangani pernikahan, acara kantor, syukuran, dan arisan.
				</p>
				<p class="mt-4 max-w-xl text-sm leading-relaxed text-forest/75 md:text-base">
					Caranya tidak berubah: belanja segar setiap hari, bumbu dimasak dari nol, dan porsi yang jujur.
					Kami ingin tamumu pulang dengan satu pertanyaan—<em>“kateringnya dari mana?”</em>
				</p>

				<div class="mt-8 flex flex-wrap items-center gap-5">
					<a href="#menu" class="btn-lime text-sm">Lihat 16 Menu</a>
					<a
						href="#different"
						class="group inline-flex items-center gap-2 text-sm font-semibold text-forest underline decoration-forest/25 decoration-2 underline-offset-4 transition hover:decoration-ember"
					>
						Kenapa kami
						<span class="transition group-hover:translate-x-1">→</span>
					</a>
				</div>
			</div>

			<div class="relative mx-auto w-full max-w-sm md:ml-auto">
				<div
					aria-hidden="true"
					class="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border-2 border-dashed border-forest/20"
				>
				</div>

				<div class="paper relative rotate-[1.5deg] rounded-[2rem] px-6 py-7 text-cream shadow-xl md:px-8 md:py-9">
					<div class="flex items-start justify-between gap-4">
						<Tag tone="lime" class="w-fit -rotate-2">Catatan<br />Dapur</Tag>
						<span class="pt-1 text-[0.55rem] font-semibold tracking-[0.2em] text-cream/50 uppercase">Sejak 2018</span>
					</div>

					<span class="script mt-6 block text-5xl leading-none text-lime/60">“</span>
					<p class="-mt-3 text-lg leading-relaxed text-cream/90 md:text-xl">
						Kami tidak ingin jadi katering terbesar. Cukup jadi yang paling bisa diandalkan di hari acaramu.
					</p>
					<p class="script mt-5 text-3xl text-lime">Dapur Rasa</p>
					<p class="mt-1 text-[0.55rem] font-semibold tracking-[0.2em] text-cream/45 uppercase">
						Samarinda
					</p>
				</div>

				<div
					class="absolute -right-3 -bottom-9 grid size-28 place-items-center rounded-full border border-dashed border-forest/30 bg-cream shadow-[0_12px_30px_rgba(11,93,64,0.25)] md:-right-6 md:-bottom-10 md:size-36"
				>
					<svg
						viewBox="0 0 200 200"
						class="absolute inset-0 size-full motion-safe:animate-[spin_40s_linear_infinite]"
						aria-hidden="true"
					>
						<defs>
							<path id="about-stamp-path" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" fill="none" />
						</defs>
						<text
							fill="#0b5d40"
							font-size="10.5"
							font-family="Outfit, sans-serif"
							font-weight="600"
							letter-spacing="2.2"
						>
							<textPath href="#about-stamp-path">DAPUR RASA · SAMARINDA · SEJAK 2018 · </textPath>
						</text>
					</svg>
					<div class="relative grid size-20 place-items-center rounded-full bg-lime text-center md:size-24">
						<span class="h-display text-2xl leading-none md:text-3xl">500+</span>
						<span class="text-[0.5rem] font-bold tracking-[0.18em] uppercase">acara</span>
					</div>
				</div>
			</div>
		</div>

		<div class="mt-16 grid border-t border-forest/15 md:mt-20 md:grid-cols-3">
			<div class="border-b border-forest/15 py-6 md:border-r md:border-b-0 md:pr-8">
				<div class="flex items-baseline gap-3">
					<span class="h-display text-sm text-ember">01</span>
					<h3 class="h-display text-xl">Belanja harian</h3>
				</div>
				<p class="mt-2 max-w-xs text-xs leading-relaxed text-forest/65">
					Bahan dipilih pagi hari, bukan stok lama. Sayur tetap renyah, lauk tetap segar.
				</p>
			</div>

			<div class="border-b border-forest/15 py-6 md:border-r md:border-b-0 md:px-8">
				<div class="flex items-baseline gap-3">
					<span class="h-display text-sm text-ember">02</span>
					<h3 class="h-display text-xl">Bumbu sendiri</h3>
				</div>
				<p class="mt-2 max-w-xs text-xs leading-relaxed text-forest/65">
					Rempah ditumbuk dan dimasak dari nol. Tidak ada bumbu instan yang menyamar.
				</p>
			</div>

			<div class="py-6 md:pl-8">
				<div class="flex items-baseline gap-3">
					<span class="h-display text-sm text-ember">03</span>
					<h3 class="h-display text-xl">Tim yang sama</h3>
				</div>
				<p class="mt-2 max-w-xs text-xs leading-relaxed text-forest/65">
					Dari konsultasi sampai hari acara, orangnya konsisten. Bukan tim dadakan.
				</p>
			</div>
		</div>
	</div>
</section>
