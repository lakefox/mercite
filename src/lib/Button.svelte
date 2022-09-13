<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const handleEvent = () => {
		dispatch('click');
	};

	export let wide: boolean = false;
	export let primary: boolean = false;
	export let secondary: boolean = false;
	export let accent: boolean = false;
	export let outline: boolean = false;
</script>

<button
	on:click={handleEvent}
	class="btn btn-wide justify-between shadow capitalize"
	class:w-full={wide}
	class:btn-primary={primary}
	class:btn-secondary={secondary}
	class:btn-accent={accent}
	class:btn-outline={outline}
	class:text-white={!primary && !outline}
>
	<slot />
	<i class="fa-solid fa-chevron-right" />
</button>
