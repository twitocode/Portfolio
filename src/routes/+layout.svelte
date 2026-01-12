<script lang="ts">
	import { page } from '$app/state';
	import DesktopSidebar from '$lib/components/desktop-sidebar.svelte';
	import MobileSidebar from '$lib/components/mobile-sidebar.svelte';
	import { slide } from 'svelte/transition';
	import '../app.css';

	let { children, data } = $props();
	let pages = ['Home', 'About', 'Projects', 'Skills', "Hackathons", 'Education', 'Contact'];

	let transitionDuration = 400;
	let selected = $derived(page.url.pathname.split('/')[1] || 'home');
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Playwrite+IT+Moderna:wght@100..400&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
		rel="stylesheet"
	/>
	<title>{data.url == '/' ? '' : data.url.split('/')[1] + ' |'} toheebeji</title>
    <link rel="icon" type="image/x-icon" href="/logo.jpeg">
</svelte:head>


<div class="dark font-inter bg-background h-screen w-screen overflow-hidden text-white">
	{#key data.url}
		<div class="dot bg-grid flex h-full w-full items-center justify-center">
			<div class="flex flex-col items-start space-y-2 p-4 w-full sm:w-9/10 md:w-7/8 lg:w-7/10 xl:w-6/10">
				<div class="bg-secondary text-primary w-full rounded-t-lg px-4 py-8 md:w-10/12">
					<h1 class="flex items-center justify-between">
						<span class="font-playwrite-it-moderna text-5xl font-medium md:text-5xl lg:text-6xl"
							>toheeb eji ⋆˚✿˖°</span
						>
						<MobileSidebar {pages} {selected} />
					</h1>
				</div>
				<div class="bg-secondary h-3/5 w-full space-y-2 rounded-tr-lg rounded-b-lg px-4 py-1">
					<!-- navbar -->
					<DesktopSidebar {pages} {selected} />
          <span class="block md:hidden text-primary font-medium text-lg text-center font-space-mono">{selected[0].toUpperCase() + selected.substring(1, selected.length)}</span>
					<div
						in:slide={{ axis: 'y', delay: transitionDuration, duration: transitionDuration }}
						out:slide={{ axis: 'y', duration: transitionDuration }}
					>
						<!-- Content -->
						{@render children()}
					</div>
				</div>
			</div>
		</div>
	{/key}
</div>
