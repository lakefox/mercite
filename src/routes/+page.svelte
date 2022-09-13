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
