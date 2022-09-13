<script lang="ts">
	export let title: string;
	export let icon: string = 'fa-question';
</script>

<div class="card bg-base-100">
	<div class="card-body items-start">
		<i class="fa-solid {icon} text-5xl" />
		<h1 class="card-title">{title}</h1>
		<slot />
	</div>
</div>
