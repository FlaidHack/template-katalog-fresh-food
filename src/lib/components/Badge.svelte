<script>
	/** Scalloped round sticker */
	let { tone = 'ember', class: klass = '', children } = $props();

	const bumps = 16;
	const d =
		Array.from({ length: 181 }, (_, i) => {
			const a = (i / 180) * Math.PI * 2;
			const r = 46 + 3.2 * Math.cos(bumps * a);
			return `${i ? 'L' : 'M'}${(50 + r * Math.cos(a)).toFixed(2)} ${(50 + r * Math.sin(a)).toFixed(2)}`;
		}).join('') + 'Z';

	const tones = {
		ember: { fill: '#e8622c', ring: '#fbf7dc', text: 'text-cream' },
		cream: { fill: '#fbf7dc', ring: '#e8622c', text: 'text-ember' }
	};
	const t = $derived(tones[tone]);
</script>

<div class="aspect-square {klass}">
	<div class="relative grid size-full place-items-center">
	<svg viewBox="0 0 100 100" class="absolute inset-0 size-full" aria-hidden="true">
		<path {d} fill={t.fill} />
		<circle cx="50" cy="50" r="37" fill="none" stroke={t.ring} stroke-width="1.2" stroke-dasharray="2.5 2.5" />
	</svg>
	<div class="relative px-[18%] text-center text-[0.6rem] leading-tight font-semibold {t.text}">
		{@render children?.()}
	</div>
	</div>
</div>
