<script>
	import Star from '@lucide/svelte/icons/star';
	import Target from '@lucide/svelte/icons/target';
	import Zap from '@lucide/svelte/icons/zap';
	import Clock from '@lucide/svelte/icons/clock';
	import User from '@lucide/svelte/icons/user';
	import Wrench from '@lucide/svelte/icons/wrench';

	const left = [
		{ icon: Star, title: 'Pengalaman', text: '500+ acara ditangani sejak 2018.' },
		{ icon: Zap, title: 'Bahan Segar', text: 'Belanja harian, bukan stok lama. Rasa lebih segar.' },
		{ icon: User, title: 'Menu Custom', text: 'Menu disusun sesuai acara, selera, dan anggaran.' }
	];
	const right = [
		{ icon: Target, title: 'Porsi Pas', text: 'Dihitung per tamu, jadi tidak kurang dan tidak berlebih.' },
		{ icon: Clock, title: 'Tepat Waktu', text: 'Tim datang sebelum acara dimulai, bukan setelah tamu lapar.' },
		{ icon: Wrench, title: 'Fleksibel', text: 'Bisa tambah porsi, menu, atau alat saji mendekati acara.' }
	];
</script>

<section id="different" class="overflow-hidden bg-cream px-5 py-16 md:px-10 md:py-24">
	<div class="mx-auto max-w-[1200px]">
		<h2 class="h-display text-6xl text-forest md:text-8xl">
			Kenapa Kami
			<span class="script block text-3xl text-ember md:-mt-6 md:text-5xl">Berbeda?</span>
		</h2>

		<div class="relative mt-10 grid items-center gap-4 md:grid-cols-[1fr_17rem_1fr] md:gap-8">
			<div class="star absolute top-1/2 left-1/2 -z-0 hidden size-[40rem] -translate-x-1/2 -translate-y-1/2 bg-lime/70 md:block"></div>
			<div class="star absolute top-1/2 left-1/2 -z-0 hidden size-[35rem] -translate-x-1/2 -translate-y-1/2 rotate-[9deg] bg-lime md:block"></div>

			{#snippet item(f, shift)}
				<li class="relative flex items-center gap-3 rounded-xl border border-forest/25 bg-cream/80 px-4 py-3 {shift}">
					<span class="grid size-9 shrink-0 place-items-center rounded-full bg-forest text-cream"><f.icon size={16} /></span>
					<div>
						<h3 class="h-display text-sm tracking-wide">{f.title}</h3>
						<p class="text-xs leading-snug text-forest/75">{f.text}</p>
					</div>
				</li>
			{/snippet}

			<ul class="relative z-10 order-2 grid gap-4 md:order-none">
				{@render item(left[0], 'md:mr-6')}
				{@render item(left[1], 'md:-ml-6 md:mr-14')}
				{@render item(left[2], 'md:mr-6')}
			</ul>

			<div class="relative z-10 mx-auto w-64 rotate-[-16deg] overflow-hidden rounded-3xl border-4 border-white/70 shadow-2xl md:w-full">
				<img
					src="/images/dummy.jpg"
					alt="Hidangan katering"
					loading="lazy"
					decoding="async"
					class="aspect-[3/4] w-full object-cover"
					style="object-position: 50% 40%"
				/>
			</div>

			<ul class="relative z-10 order-3 grid gap-4 md:order-none">
				{@render item(right[0], 'md:ml-6')}
				{@render item(right[1], 'md:ml-14 md:-mr-6')}
				{@render item(right[2], 'md:ml-6')}
			</ul>
		</div>
	</div>
</section>

<style>
	.star {
		clip-path: polygon(50% 0%, 56% 30%, 80% 9%, 70% 36%, 98% 28%, 76% 48%, 100% 62%, 72% 62%, 88% 90%, 62% 72%, 56% 100%, 46% 74%, 22% 96%, 32% 66%, 2% 72%, 26% 52%, 0% 36%, 30% 38%, 16% 10%, 42% 30%);
	}
</style>
