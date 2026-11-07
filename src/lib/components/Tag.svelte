<script>
	/** Stitched rectangular sticker */
	let { tone = 'lime', class: klass = '', children } = $props();
</script>

<div
	class="grid place-items-center rounded-xl p-1 text-center text-[0.6rem] leading-tight font-semibold {tone ===
	'lime'
		? 'bg-lime text-forest-deep'
		: 'bg-cream text-ember'} {klass}"
>
	<div
		class="w-full rounded-lg border border-dashed px-3 py-2 {tone === 'lime'
			? 'border-forest-deep/60'
			: 'border-ember/70'}"
	>
		{@render children?.()}
	</div>
</div>
