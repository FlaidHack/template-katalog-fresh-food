<script>
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Dapur Rasa — Katering Acara di Samarinda</title>
	<meta name="description" content="Katering untuk pernikahan, acara kantor, syukuran, dan arisan. Menu disusun sesuai acara dan anggaran. Minta penawaran via WhatsApp." />
</svelte:head>

{@render children()}
