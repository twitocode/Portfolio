<script lang="ts">
	import saturn from '$lib/assets/saturn.gif';
</script>

<svelte:head>
	<link rel="preload" as="image" href={saturn} />
</svelte:head>

<section
	class="to-primary from-background bg-background grid h-auto w-full grid-cols-1 gap-4 rounded-2xl px-2 pt-2 md:grid-cols-2"
>
	<div>
		<img src={saturn} class="rounded-lg shadow-lg" alt="Saturn GIF" fetchpriority="high" />
	</div>
	<div class="flex h-full flex-col items-center justify-center space-y-4 md:items-start">
		<h1 class="text-4xl font-bold">Hello!</h1>
		<p class="text-lg text-white">
			I'm a software engineer from Ontario, Canada!🍁 Currently attending <a
				href="https://www.mcmaster.ca"
				class=" underline underline-offset-8 hover:opacity-50">McMaster U</a
			>.
		</p>
		<div class="text-primary">
			Check out my <a href="/toheeb_eji_resume.pdf" class=" underline underline-offset-8 hover:opacity-50">Resume</a>
		</div>
	</div>
</section>
