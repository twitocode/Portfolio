<script lang="ts">
	import { slide } from 'svelte/transition';
	import '../app.css';

	let { children, data } = $props();
	let pages = ['Home', 'About', 'Projects', 'Skills', 'Education', 'Contact'];

	let transitionDuration = 500;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Playwrite+IT+Moderna:wght@100..400&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
		rel="stylesheet"
	/>
  <title>{data.url =="/" ? "" : data.url.split("/")[1] + " |"} twitocode</title>
</svelte:head>

<div class="dark font-inter text-white bg-background h-screen w-screen overflow-hidden">
	{#key data.url}
		<div class="dot flex  bg-grid  h-full w-full items-center justify-center">
			<div></div>
			<div class="flex w-1/2 flex-col items-start space-y-2 p-10">
				<div class="bg-secondary text-primary w-3/4 rounded-t-lg px-4 py-2">
					<h1 class="font-playwrite-it-moderna text-2xl font-medium">Twitocode ⋆˚✿˖°</h1>
				</div>
				<div
					class="bg-secondary h-3/5 w-full space-y-2 rounded-tr-lg rounded-b-lg px-4 py-1"
					in:slide={{ axis: 'y', delay: transitionDuration, duration: transitionDuration }}
					out:slide={{ axis: 'y', duration: transitionDuration }}
				>
					<!-- navbar -->
					<div class="flex space-x-2 text-white">
						{#each pages as page, index}
							<a
								href="/{page == 'Home' ? '' : page.toString().toLowerCase()}"
								class="font-space-mono hover:opacity-50">{page}</a
							>
							{#if index != pages.length - 1}
								<p>•</p>
							{/if}
						{/each}
					</div>
					<!-- Content -->
					{@render children()}
				</div>
			</div>
		</div>
	{/key}
</div>
