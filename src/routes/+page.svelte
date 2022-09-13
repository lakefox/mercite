<script lang="ts">
	import Section from '$lib/Section.svelte';
	import Button from '$lib/Button.svelte';
	import IconCard from '$lib/IconCard.svelte';
</script>

<Section>
	<div class="md:h-[75vh] flex flex-col justify-center items-center gap-10">
		<div class="flex flex-col font-light text-6xl md:text-8xl text-center">
			<span>Drive Business</span>
			<span>
				with
				<span class="font-extrabold">
					<span class="bg-clip-text text-transparent bg-gradient-to-tr from-primary to-secondary">
						Your
					</span>
					<span class="bg-clip-text text-transparent bg-gradient-to-tr from-secondary to-primary">
						Website
					</span>
				</span>
			</span>
		</div>
		<form
			method="POST"
			action="/api/form"
			class="mx-2 mt-12 mb-2 max-w-xl sm:rounded-full sm:border sm:border-gray-100 sm:bg-white sm:p-2 sm:shadow"
		>
			<div class="flex flex-col sm:flex-row sm:items-start sm:justify-center">
				<div class="relative text-gray-500">
					<label for="email" class="sr-only border-gray-300" />
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<svg
							class="h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
								class=""
							/>
						</svg>
					</div>
					<input type="hidden" name="redirect" value="/" />
					<input type="hidden" name="table" value="user_email" />
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Enter email address"
						class="w-full cursor-text rounded-full border-2 py-4 pr-4 pl-10 text-base outline-none transition-all duration-200 ease-in-out sm:border-0 focus:border-transparent focus:ring"
						required
					/>
				</div>

				<button
					type="submit"
					class="bg-primary mt-4 inline-flex w-auto cursor-pointer items-center justify-center rounded-full border border-transparent bg-none p-4 text-center font-semibold normal-case text-white transition-all duration-200 ease-in-out sm:mt-0 sm:ml-4 sm:w-auto focus:bg-secondary hover:bg-secondary"
				>
					Sign Up Now
					<svg
						class="ml-3 block h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
							class=""
						/>
					</svg>
				</button>
			</div>
		</form>

		<div class="flex flex-col md:flex-row justify-center items-center gap-5">
			<Button primary>Learn More</Button>
			<Button outline>Contact Us</Button>
		</div>
	</div>
</Section>

<Section>
	<div class="w-full flex flex-col justify-start items-start gap-10">
		<h1 class="text-4xl">Why Mercite?</h1>
		<div class="w-full grid grid-cols-1 lg:grid-cols-2">
			<IconCard title={'Hosting'} icon={'fa-cloud'}>
				<p>
					Sites are hosted on an edge platform located across 90 cities with 99.99% server uptime.
					This means your users always have the best possible experience.
				</p>
			</IconCard>

			<IconCard title={'Analytics'} icon={'fa-chart-line'}>
				<p>
					Gain insight into the traffic your website gets. We use
					<a href="https://plausible.io" target="_blank" class="text-secondary font-bold">
						Plausible
					</a>
					to capture analytics. Plausible is simple, and privacy-friendly so your visitors don't have
					to worry about being tracked.
				</p>
			</IconCard>

			<IconCard title={'Custom Fit'} icon={'fa-puzzle-piece'}>
				<p>
					One size doesn't fit all. That's why every one of our customers get a solution custom fit
					to their exact needs.
				</p>
			</IconCard>

			<IconCard title={'Secure'} icon={'fa-lock'}>
				<p>
					You can rest easy knowing that your customers data is secure. We use the highest available
					security to ensure every bit of data is locked away safely.
				</p>
			</IconCard>
		</div>
	</div>
</Section>
