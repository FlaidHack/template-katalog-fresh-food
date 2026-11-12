<script>
	import Badge from './Badge.svelte';
	import Tag from './Tag.svelte';
	import Paperclip from '@lucide/svelte/icons/paperclip';
</script>

<section id="how" class="bg-cream px-5 py-16 md:px-10 md:py-24">
	<div class="mx-auto max-w-[1200px]">
		<h2 class="h-display text-6xl text-forest md:text-right md:text-8xl">
			Cara Pesan
			<span class="script block text-3xl text-ember md:-mt-6 md:text-5xl">Tiga Langkah Mudah</span>
		</h2>

		<div class="mt-12 grid gap-4 md:grid-cols-[1fr_1fr_1.35fr] md:grid-rows-2 md:gap-5">
			<!-- step 1 -->
			<article class="relative flex min-h-[26rem] flex-col overflow-hidden rounded-3xl bg-forest p-7 text-cream md:row-span-2 md:min-h-0">
				<h3 class="script text-3xl text-cream/90">1. konsultasi</h3>
				<p class="mt-3 max-w-[26ch] text-sm text-cream/80">Ceritakan acara, jumlah tamu, dan anggaran. Kami bantu susun menu yang pas.</p>
				<a href="#plans" class="btn-lime mt-6 w-fit text-sm">Lihat Paket</a>
				<div class="relative mt-auto -mr-7 -mb-7 -ml-7 h-44 pt-4">
					<img
						src="/images/mealbox.jpg"
						alt="Kotak katering"
						loading="lazy"
						decoding="async"
						class="size-full rounded-bl-3xl object-cover"
					/>
					<Badge tone="cream" class="absolute top-0 -right-0 w-24 rotate-6">Gratis, tanpa komitmen</Badge>
				</div>
			</article>

			<!-- step 2 -->
			<article class="fold relative rounded-3xl bg-forest p-7 text-cream">
				<h3 class="script text-3xl text-lime">2. tasting &amp; penawaran</h3>
				<p class="mt-3 max-w-[30ch] text-sm text-cream/80">Cicipi menu pilihan, lalu terima penawaran resmi beserta jadwal pengiriman.</p>
			</article>

			<!-- big image -->
			<div class="relative min-h-72 overflow-hidden rounded-3xl md:row-span-2 md:min-h-0">
				<img
					src="/images/kurir.jpg"
					alt="Tim katering"
					loading="lazy"
					decoding="async"
					class="absolute inset-0 size-full object-cover"
				/>
				<Tag class="absolute right-4 bottom-4 rotate-3">Antar<br />sesuai jadwal</Tag>
			</div>

			<!-- step 3 -->
			<article class="fold relative rounded-3xl bg-forest p-7 text-cream">
				<Paperclip class="absolute -top-3 right-5 -rotate-12 text-ember md:-top-4 md:-right-3" size={30} />
				<h3 class="script text-3xl text-cream/90">3. acara &amp; santap</h3>
				<p class="mt-3 max-w-[30ch] text-sm text-cream/80">Tim kami memasak, mengantar, dan menata hidangan tepat waktu. Tamu tinggal menikmati.</p>
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
