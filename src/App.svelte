<script>
	export let name;
	import Login from './Login.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
</svelte:head>

<style>
	h1 {
		color: purple;
	}

	main {
		margin: 20px;
	}
</style>

<main class="content">
	<h1>Welcome to {name}</h1>
</main>

<Login />