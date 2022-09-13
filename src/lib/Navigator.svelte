<script lang="ts">
	import MenuLinks from './MenuLinks.svelte';
</script>

<div class="navbar bg-base-100 z-50">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" class="btn btn-ghost md:hidden">
				<i class="fa-solid fa-bars text-2xl" />
			</div>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<MenuLinks mobile />
			</ul>
		</div>
		<a href="/" class="btn btn-ghost">
			<img class="h-8" src="/mercite_logo.svg" alt="Mercite" />
		</a>
	</div>
	<div class="navbar-center hidden md:flex">
		<ul class="menu menu-horizontal p-0">
			<MenuLinks />
		</ul>
	</div>
	<div class="navbar-end">
		<ul class="menu menu-horizontal p-0">
			<li>
				<a href="/">
					<i class="fa-solid fa-user fa-lg" />
				</a>
			</li>
		</ul>
	</div>
</div>
