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

<div class="tham tham-e-squeeze tham-w-12 tham-active bg-white text-white">
	<div class="tham-box">
		<div class="tham-inner"></div>
	</div>
</div>

<div
	class={[
		open && 'absolute',
		!open && 'hidden',
		'mobile-nav top-full left-0 h-screen w-screen bg-black opacity-85'
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
