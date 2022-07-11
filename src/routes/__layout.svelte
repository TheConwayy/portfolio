<script>
	import '../tailwind.css';
	import '../app.css';

	import ToTop from '../components/ToTop.svelte';
</script>

<svelte:head>
	<script src="https://kit.fontawesome.com/b6dbfc57a8.js" crossorigin="anonymous"></script>
	<title>Devin Conway &mdash; Portfolio</title>
</svelte:head>

<div class="p-8 max-w-6xl mx-auto">
	<ToTop />
	<slot />
</div>
