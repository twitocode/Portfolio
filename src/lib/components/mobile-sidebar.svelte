<script lang="ts">
	import { gsap } from 'gsap';
	import IconHamburgerMenu from '~icons/ci/hamburger-md';

	const { pages, selected } = $props();
	let open = $state(false);

	function toggleNavbar() {
		open = !open;
		let tween = gsap.to('.mobile-nav', {
			top: 0
		});
		tween.play();
	}
</script>

<IconHamburgerMenu class="text-3xl text-white md:hidden" onclick={toggleNavbar} />

<div
	class={[
		open && 'absolute',
		!open && 'hidden',
		'mobile-nav top-full left-0 h-screen w-screen bg-black opacity-85 z-10'
	]}
>
	<div
		class="flex h-full w-full flex-col items-center justify-center space-y-4 text-center text-5xl"
	>
		{#each pages as page}
			<a
				href="/{page == 'Home' ? '' : page.toString().toLowerCase()}"
				class="font-space-mono text-foreground text-lg {page.toLowerCase() == selected &&
					'text-primary'}"
				onclick={() => {
					open = false;
					let tween = gsap.to('.mobile-nav', {
						top: "100%"
					});
					tween.play();
				}}
			>
				{page}
			</a>
		{/each}
	</div>
</div>
