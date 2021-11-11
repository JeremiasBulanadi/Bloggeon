<script>
	export let name;
	import Login from './Login.svelte';
	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
	<script src="https://kit.fontawesome.com/157b88e79d.js" crossorigin="anonymous"></script>

	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Dongle:wght@700&display=swap" rel="stylesheet">
</svelte:head>

<style>
	h1 {
		color: blueviolet;
	}

	main {
		margin: 20px;
	}

	.mainContent {
		min-height: 650px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>

<main class="content">
	<Navbar />
</main>
<div class="mainContent">

	<Login />
</div>

<br><br>
<Footer />