<script lang="ts">
	import '../app.css';
	import Navigator from '$lib/Navigator.svelte';
</script>

<svelte:head>
	<script src="https://kit.fontawesome.com/bbec805730.js" crossorigin="anonymous"></script>
</svelte:head>

<div class="select-none">
	<Navigator />
	<div class="w-[90%] md:w-2/3 m-auto">
		<slot />
	</div>
</div>
