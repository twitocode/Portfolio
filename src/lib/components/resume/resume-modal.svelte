<script lang="ts">
	import { X } from "@lucide/svelte";
	import { cubicIn, cubicOut } from "svelte/easing";
	import type { TransitionConfig } from "svelte/transition";
	import { fade } from "svelte/transition";
	import ResumeEngine from "./resume-engine.svelte";

	let open = $state(false);

	function dropIn(node: Element, { duration = 450, easing = cubicOut } = {}): TransitionConfig {
		const distance = node.getBoundingClientRect().bottom;
		return {
			duration,
			easing,
			css: (_t, u) => `transform: translateY(${-u * distance}px);`
		};
	}
</script>

<svelte:window onkeydown={(e) => open && e.key === "Escape" && (open = false)} />

<button type="button" onclick={() => (open = true)} class="cursor-pointer">
	Check out my
	<span class="underline underline-offset-8 hover:opacity-50">Resume</span>
</button>

{#if open}
	<div
		class="fixed inset-0 z-50 grid place-items-center bg-black/60 p-[2.5vw] md:p-[10vw] md:py-0"
		role="presentation"
		onclick={(e) => e.target === e.currentTarget && (open = false)}
		transition:fade={{ duration: 200 }}
	>
		<div
			class="relative w-full"
			role="dialog"
			aria-modal="true"
			aria-label="Resume"
			in:dropIn
			out:dropIn={{ duration: 300, easing: cubicIn }}
		>
			<button
				type="button"
				onclick={() => (open = false)}
				class="absolute -top-10 right-0 rounded-md p-1.5 text-white hover:bg-white/10"
				aria-label="Close resume"
			>
				<X size={20} />
			</button>
			<ResumeEngine />
		</div>
	</div>
{/if}
