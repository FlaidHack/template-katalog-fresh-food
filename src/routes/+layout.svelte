<script>
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Fresh Food — Healthy Meals, Personalised</title>
	<meta name="description" content="Premium, ready-to-eat meals tailored to your goals, lifestyle and body." />
</svelte:head>

{@render children()}
