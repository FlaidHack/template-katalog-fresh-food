<script>
	import { tick } from 'svelte';
	import { menus } from '../data/menu.js';
	import { WHATSAPP_DISPLAY, whatsappUrl } from '../data/whatsapp.js';

	let { plan, onClose } = $props();

	const steps = [
		{ n: 1, label: 'Pilih Menu' },
		{ n: 2, label: 'Pax & Harga' },
		{ n: 3, label: 'Data' }
	];

	const formatRupiah = (value) =>
		new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			maximumFractionDigits: 0
		}).format(value);

	const formatDate = (value) => {
		const date = new Date(`${value}T00:00:00`);
		if (Number.isNaN(date.getTime())) return value;
		return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
	};

	let step = $state(1);
	let pax = $state(50);
	let name = $state('');
	let eventDate = $state('');
	let address = $state('');
	let chosen = $state(Object.fromEntries(Object.entries(plan.slots).map(([cat]) => [cat, []])));
	let dialog = $state();
	let scrollArea = $state();
	let stepHeading = $state();

	const requiredCount = Object.values(plan.slots).reduce((sum, count) => sum + count, 0);
	const qty = $derived(Math.max(0, Number(pax) || 0));
	const total = $derived(qty * plan.priceValue);
	const selectedCount = $derived(
		Object.values(chosen).reduce((sum, items) => sum + items.length, 0)
	);
	const isComplete = $derived(
		Object.entries(plan.slots).every(([cat, max]) => (chosen[cat]?.length ?? 0) === max)
	);
	const canSubmit = $derived(qty >= 50 && isComplete);

	$effect(() => {
		const previous = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		const onKeydown = (event) => {
			if (event.key === 'Escape') onClose();
		};
		window.addEventListener('keydown', onKeydown);
		dialog?.focus();
		return () => {
			document.body.style.overflow = previous;
			window.removeEventListener('keydown', onKeydown);
		};
	});

	async function goTo(next) {
		if (next > 1 && !isComplete) return;
		if (next > 2 && qty < 50) return;
		step = next;
		await tick();
		scrollArea?.scrollTo({ top: 0, behavior: 'smooth' });
		stepHeading?.focus({ preventScroll: true });
	}

	function toggle(cat, menuName) {
		const max = plan.slots[cat];
		const current = chosen[cat] ?? [];
		if (current.includes(menuName)) {
			chosen[cat] = current.filter((item) => item !== menuName);
		} else if (max === 1) {
			chosen[cat] = [menuName];
		} else if (current.length < max) {
			chosen[cat] = [...current, menuName];
		}
	}

	function adjustPax(delta) {
		pax = Math.max(50, (Number(pax) || 50) + delta);
	}

	function submit() {
		if (!canSubmit) return;

		const lines = [
			'Halo Dapur Rasa, saya ingin memesan:',
			'',
			`Paket: ${plan.name} (${plan.menu})`,
			`Jumlah pax: ${qty}`,
			name ? `Nama: ${name}` : null,
			eventDate ? `Tanggal acara: ${formatDate(eventDate)}` : null,
			address.trim() ? `Alamat pengiriman: ${address.trim()}` : null,
			'',
			'Menu pilihan:'
		];

		for (const cat of Object.keys(plan.slots)) {
			for (const item of chosen[cat]) {
				lines.push(`- ${cat}: ${item}`);
			}
		}

		lines.push(
			'',
			`Estimasi total: ${formatRupiah(total)} (${formatRupiah(plan.priceValue)}/pax)`,
			'',
			'Mohon konfirmasi ketersediaan dan proses selanjutnya. Terima kasih.'
		);

		const message = lines.filter((line) => line !== null).join('\n');
		window.open(whatsappUrl(message), '_blank', 'noopener');
	}
</script>

<div
	class="fixed inset-0 z-50 flex items-end justify-center bg-ink/70 backdrop-blur-sm md:items-center md:p-6"
	role="presentation"
	onclick={onClose}
>
	<div
		bind:this={dialog}
		tabindex="-1"
		role="dialog"
		aria-modal="true"
		aria-labelledby="order-title"
		class="relative flex max-h-[94svh] w-full max-w-3xl flex-col overflow-hidden rounded-t-[2rem] bg-cream text-forest shadow-2xl outline-none md:max-h-[90vh] md:rounded-[2rem]"
		onclick={(event) => event.stopPropagation()}
	>
		<div class="paper relative shrink-0 px-5 py-4 text-cream md:px-7 md:py-5">
			<div class="relative flex items-start justify-between gap-4">
				<div>
					<p class="script text-2xl text-lime">Pesan Menu</p>
					<h3 id="order-title" class="h-display mt-0.5 text-3xl md:text-4xl">Paket {plan.name}</h3>
					<p class="mt-1 text-xs text-cream/65">{plan.menu} · {plan.menuNote}</p>
				</div>

				<button
					type="button"
					class="grid size-9 shrink-0 place-items-center rounded-full border border-cream/30 text-cream transition hover:bg-cream hover:text-forest"
					aria-label="Tutup"
					onclick={onClose}
				>
					<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
						<path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
					</svg>
				</button>
			</div>
		</div>

		<div class="shrink-0 border-b border-forest/10 bg-cream px-5 py-3 md:px-7">
			<ol class="flex items-center gap-2 sm:gap-3" aria-label="Langkah pemesanan">
				{#each steps as s, i (s.n)}
					<li
						class="flex flex-1 items-center gap-2"
						aria-current={step === s.n ? 'step' : undefined}
					>
						<span
							class="grid size-6 shrink-0 place-items-center rounded-full text-[0.6rem] font-bold transition
								{step > s.n
								? 'bg-forest text-cream'
								: step === s.n
									? 'bg-ember text-cream'
									: 'border border-forest/25 text-forest/45'}"
						>
							{#if step > s.n}
								<svg viewBox="0 0 24 24" class="size-3.5" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true">
									<path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							{:else}
								{s.n}
							{/if}
						</span>
						<span
							class="text-[0.55rem] font-bold tracking-[0.12em] uppercase {step === s.n
								? 'text-forest'
								: 'text-forest/40'}"
						>
							{s.label}
						</span>
						{#if i < steps.length - 1}
							<span class="ml-1 hidden h-px flex-1 bg-forest/15 sm:block"></span>
						{/if}
					</li>
				{/each}
			</ol>
		</div>

		<div bind:this={scrollArea} class="min-h-0 flex-1 overflow-y-auto px-5 py-5 md:px-7">
			{#if step === 1}
				<div class="flex items-end justify-between gap-3 border-b border-forest/15 pb-4">
					<div>
						<p class="text-[0.6rem] font-bold tracking-[0.18em] text-ember uppercase">Langkah 1 · Menu</p>
						<h4 bind:this={stepHeading} tabindex="-1" class="h-display mt-1 text-2xl outline-none">
							Pilih {requiredCount} menu
						</h4>
					</div>
					<span class="rounded-full border border-forest/20 px-3 py-1 text-xs font-bold text-forest/70">
						{selectedCount}/{requiredCount}
					</span>
				</div>
				<p class="mt-3 text-xs leading-relaxed text-forest/60">
					Sesuaikan dengan aturan paket: {plan.menuNote}. Klik menu terpilih lagi untuk membatalkan.
				</p>

				{#each Object.entries(plan.slots) as [cat, max] (cat)}
					<section class="mt-6">
						<div class="flex items-baseline justify-between gap-3">
							<h4 class="h-display text-lg">{cat}</h4>
							<span
								class="text-[0.6rem] font-bold tracking-[0.14em] uppercase {chosen[cat].length === max
									? 'text-ember'
									: 'text-forest/45'}"
							>
								Pilih {max} · {chosen[cat].length}/{max}
							</span>
						</div>

						<div class="mt-2.5 grid gap-2 sm:grid-cols-2">
							{#each menus.filter((m) => m.cat === cat) as m (m.no)}
								{@const selected = chosen[cat].includes(m.name)}
								{@const locked = max > 1 && chosen[cat].length >= max && !selected}
								<button
									type="button"
									class="flex items-center gap-3 rounded-xl border-2 px-3 py-2.5 text-left text-sm transition
										{selected ? 'border-forest bg-lime/25' : 'border-forest/15 bg-cream hover:border-forest/40'}
										{locked ? 'cursor-not-allowed opacity-40' : ''}"
									aria-pressed={selected}
									disabled={locked}
									onclick={() => toggle(cat, m.name)}
								>
									<span
										class="grid size-5 shrink-0 place-items-center rounded-full border-2 transition
											{selected ? 'border-forest bg-forest text-cream' : 'border-forest/25'}"
									>
										{#if selected}
											<svg viewBox="0 0 24 24" class="size-3" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true">
												<path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
											</svg>
										{/if}
									</span>
									<span class="font-semibold">{m.name}</span>
								</button>
							{/each}
						</div>
					</section>
				{/each}
			{:else if step === 2}
				<div class="flex items-end justify-between gap-3 border-b border-forest/15 pb-4">
					<div>
						<p class="text-[0.6rem] font-bold tracking-[0.18em] text-ember uppercase">Langkah 2 · Pax & Harga</p>
						<h4 bind:this={stepHeading} tabindex="-1" class="h-display mt-1 text-2xl outline-none">Berapa pax?</h4>
					</div>
					<span class="rounded-full bg-lime px-3 py-1 text-xs font-bold text-forest-deep">{plan.name}</span>
				</div>

				<div class="mt-5 rounded-2xl border border-forest/15 bg-white/50 p-5">
					<p class="text-center text-[0.6rem] font-bold tracking-[0.16em] text-forest/55 uppercase">Jumlah pax</p>
					<div class="mt-3 flex items-center justify-center gap-4">
						<button
							type="button"
							class="grid size-11 shrink-0 place-items-center rounded-full border border-forest/20 text-xl font-semibold text-forest/70 transition hover:border-forest hover:text-forest disabled:cursor-not-allowed disabled:opacity-30"
							aria-label="Kurangi pax"
							disabled={qty <= 50}
							onclick={() => adjustPax(-10)}
						>
							−
						</button>

						<label class="block text-center">
							<input
								type="number"
								min="50"
								step="10"
								bind:value={pax}
								class="h-display block w-32 bg-transparent text-center text-5xl text-forest outline-none"
								aria-label="Jumlah pax"
							/>
							<span class="mt-1 block text-[0.55rem] font-bold tracking-[0.2em] text-forest/45 uppercase">pax</span>
						</label>

						<button
							type="button"
							class="grid size-11 shrink-0 place-items-center rounded-full border border-forest/20 text-xl font-semibold text-forest/70 transition hover:border-forest hover:text-forest"
							aria-label="Tambah pax"
							onclick={() => adjustPax(10)}
						>
							+
						</button>
					</div>

					<div class="mt-4 flex flex-wrap justify-center gap-2">
						{#each [50, 100, 150, 200] as preset (preset)}
							<button
								type="button"
								class="rounded-full border px-3 py-1 text-xs font-semibold transition
									{qty === preset
									? 'border-forest bg-forest text-cream'
									: 'border-forest/20 text-forest/60 hover:border-forest/50 hover:text-forest'}"
								onclick={() => (pax = preset)}
							>
								{preset} pax
							</button>
						{/each}
					</div>

					<p class="mt-4 text-center text-[0.65rem] text-forest/50">
						Minimum 50 pax. Harga otomatis dihitung dari jumlah pax.
					</p>
				</div>

				<div class="paper mt-5 rounded-2xl p-5 text-cream md:p-6">
					<div class="flex items-start justify-between gap-4">
						<div>
							<p class="text-[0.6rem] font-bold tracking-[0.16em] text-cream/55 uppercase">Estimasi total</p>
							<p class="h-display mt-1 text-4xl leading-none text-cream">{formatRupiah(total)}</p>
							<p class="mt-2 text-xs text-cream/60">
								{qty} pax × {formatRupiah(plan.priceValue)} / pax
							</p>
						</div>
						<span class="script pt-1 text-3xl text-lime">{plan.name}</span>
					</div>

					<div class="mt-5 border-t border-dashed border-cream/20 pt-4">
						<p class="text-[0.55rem] font-bold tracking-[0.16em] text-cream/45 uppercase">Menu pilihan</p>
						<div class="mt-2 flex flex-wrap gap-1.5">
							{#each Object.entries(plan.slots) as [cat]}
								{#each chosen[cat] as item (item)}
									<span class="rounded-full border border-cream/20 px-2.5 py-1 text-[0.65rem] text-cream/85">
										{item}
									</span>
								{/each}
							{/each}
						</div>
					</div>
				</div>

				<p class="mt-4 text-[0.65rem] leading-relaxed text-forest/50">
					Total di atas adalah estimasi. Tim kami akan mengonfirmasi ketersediaan dan biaya kirim saat chat.
				</p>
			{:else}
				<div class="flex items-end justify-between gap-3 border-b border-forest/15 pb-4">
					<div>
						<p class="text-[0.6rem] font-bold tracking-[0.18em] text-ember uppercase">Langkah 3 · Data Pemesan</p>
						<h4 bind:this={stepHeading} tabindex="-1" class="h-display mt-1 text-2xl outline-none">
							Lengkapi pesanan
						</h4>
					</div>
					<span class="rounded-full border border-forest/20 px-3 py-1 text-[0.6rem] font-bold tracking-[0.08em] text-forest/55 uppercase">
						Opsional
					</span>
				</div>

				<p class="mt-3 text-xs leading-relaxed text-forest/60">
					Data di bawah tidak wajib. Kalau dikosongkan, bisa dilengkapi langsung saat chat WhatsApp.
				</p>

				<div class="mt-5 rounded-2xl border border-forest/15 bg-white/50 p-4 md:p-5">
					<div class="grid gap-4 sm:grid-cols-2">
						<label class="block">
							<span class="text-[0.6rem] font-bold tracking-[0.16em] text-forest/55 uppercase">Nama (opsional)</span>
							<input
								type="text"
								bind:value={name}
								placeholder="Nama pemesan"
								class="mt-1.5 h-11 w-full rounded-xl border border-forest/20 bg-cream px-3 text-sm outline-none placeholder:text-forest/35 focus:border-forest"
							/>
						</label>

						<label class="block">
							<span class="text-[0.6rem] font-bold tracking-[0.16em] text-forest/55 uppercase">
								Tanggal acara (opsional)
							</span>
							<input
								type="date"
								bind:value={eventDate}
								class="mt-1.5 h-11 w-full rounded-xl border border-forest/20 bg-cream px-3 text-sm outline-none focus:border-forest"
							/>
						</label>

						<label class="block sm:col-span-2">
							<span class="text-[0.6rem] font-bold tracking-[0.16em] text-forest/55 uppercase">
								Alamat pengiriman (opsional)
							</span>
							<textarea
								bind:value={address}
								rows="2"
								placeholder="Alamat acara atau area pengiriman"
								class="mt-1.5 w-full resize-none rounded-xl border border-forest/20 bg-cream px-3 py-2.5 text-sm outline-none placeholder:text-forest/35 focus:border-forest"
							></textarea>
						</label>
					</div>
				</div>

				<div class="mt-5 rounded-2xl border border-forest/15 bg-white/50 p-4 md:p-5">
					<div class="flex items-start justify-between gap-3">
						<div>
							<p class="text-[0.6rem] font-bold tracking-[0.16em] text-forest/55 uppercase">Ringkasan pesanan</p>
							<p class="h-display mt-1 text-xl">Paket {plan.name}</p>
						</div>
						<div class="flex shrink-0 flex-col items-end gap-1 text-[0.65rem] font-semibold">
							<button type="button" class="text-forest/60 underline decoration-forest/25 underline-offset-2 hover:text-forest" onclick={() => goTo(1)}>
								Ubah menu
							</button>
							<button type="button" class="text-forest/60 underline decoration-forest/25 underline-offset-2 hover:text-forest" onclick={() => goTo(2)}>
								Ubah pax
							</button>
						</div>
					</div>

					<div class="mt-4 flex items-baseline justify-between gap-3 border-t border-dashed border-forest/15 pt-3 text-xs">
						<span class="text-forest/60">{qty} pax × {formatRupiah(plan.priceValue)}</span>
						<span class="h-display text-xl text-forest">{formatRupiah(total)}</span>
					</div>

					<ul class="mt-3 grid gap-1.5 border-t border-dashed border-forest/15 pt-3">
						{#each Object.entries(plan.slots) as [cat]}
							{#each chosen[cat] as item (item)}
								<li class="flex items-baseline justify-between gap-3 text-xs">
									<span class="text-forest/45">{cat}</span>
									<span class="text-right font-semibold text-forest/80">{item}</span>
								</li>
							{/each}
						{/each}
					</ul>

					<p class="mt-3 border-t border-dashed border-forest/15 pt-3 text-[0.65rem] text-forest/50">
						Estimasi. Biaya kirim dan detail acara dikonfirmasi lewat WhatsApp.
					</p>
				</div>
			{/if}
		</div>

		<div class="shrink-0 border-t border-forest/15 bg-cream px-5 py-4 md:px-7">
			{#if step === 1}
				<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<p class="text-[0.6rem] font-bold tracking-[0.16em] text-forest/50 uppercase">Menu terpilih</p>
						<p class="text-sm font-semibold">{selectedCount} dari {requiredCount} menu</p>
					</div>
					<button
						type="button"
						class="btn-lime w-full gap-2 text-sm disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
						disabled={!isComplete}
						onclick={() => goTo(2)}
					>
						Lanjut ke Pax & Harga
						<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</button>
				</div>
				{#if !isComplete}
					<p class="mt-2 text-[0.65rem] text-ember">Lengkapi pilihan menu sesuai jumlah yang diminta.</p>
				{:else}
					<p class="mt-2 text-[0.65rem] text-forest/50">Menu sudah lengkap. Lanjut atur jumlah pax.</p>
				{/if}
			{:else if step === 2}
				<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
					<button
						type="button"
						class="inline-flex w-full items-center justify-center gap-2 rounded-full border border-forest/20 px-5 py-2.5 text-sm font-semibold text-forest/65 transition hover:border-forest hover:text-forest sm:w-auto"
						onclick={() => goTo(1)}
					>
						<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<path d="M19 12H5M11 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						Kembali
					</button>
					<button
						type="button"
						class="btn-lime w-full gap-2 text-sm disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
						disabled={qty < 50}
						onclick={() => goTo(3)}
					>
						Lanjut ke Data Pemesan
						<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</button>
				</div>
				{#if qty < 50}
					<p class="mt-2 text-[0.65rem] text-ember">Minimum 50 pax untuk paket ini.</p>
				{:else}
					<p class="mt-2 text-[0.65rem] text-forest/50">Harga sudah dihitung. Lanjut isi data pemesan.</p>
				{/if}
			{:else}
				<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
					<button
						type="button"
						class="inline-flex w-full items-center justify-center gap-2 rounded-full border border-forest/20 px-5 py-2.5 text-sm font-semibold text-forest/65 transition hover:border-forest hover:text-forest sm:w-auto"
						onclick={() => goTo(2)}
					>
						<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<path d="M19 12H5M11 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						Kembali
					</button>
					<button
						type="button"
						class="btn-lime w-full gap-2 text-sm disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
						disabled={!canSubmit}
						onclick={submit}
					>
						Kirim Pesanan via WhatsApp
					</button>
				</div>
				<p class="mt-2 text-[0.65rem] text-forest/50">
					Pesanan akan diarahkan ke WhatsApp {WHATSAPP_DISPLAY}. Data kosong bisa dilengkapi di chat.
				</p>
			{/if}
		</div>
	</div>
</div>
