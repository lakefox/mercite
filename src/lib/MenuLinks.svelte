<script lang="ts">
	export let mobile: boolean = false;
</script>

<!-- Merch -->
<li>
	<a href="/">Merch</a>
</li>

<li>
	<a href="/">Builder</a>
</li>

<!-- Software -->
<li tabindex="0">
	<a href="/" class="justify-between">
		Software
		{#if mobile}
			<i class="fa-solid fa-chevron-right text-xs" />
		{:else}
			<i class="fa-solid fa-chevron-down text-xs" />
		{/if}
	</a>
	<ul class="menu menu-compact p-2 bg-base-100 rounded-box shadow w-52">
		<li>
			<a href="/">Avalanche</a>
		</li>
		<li>
			<a href="/">Saphire</a>
		</li>
	</ul>
</li>

<!-- Community -->
<li tabindex="0">
	<a href="/" class="justify-between">
		Community
		{#if mobile}
			<i class="fa-solid fa-chevron-right text-xs" />
		{:else}
			<i class="fa-solid fa-chevron-down text-xs" />
		{/if}
	</a>
	<ul class="menu menu-compact p-2 bg-base-100 rounded-box shadow w-52">
		<li>
			<a href="/">Discord</a>
		</li>
	</ul>
</li>
