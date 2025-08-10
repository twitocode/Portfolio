<script lang="ts">
	const { pages, selected } = $props();
</script>

<div class=" hidden space-x-2 text-white md:flex">
	{#each pages as page, index}
		<a
			href="/{page == 'Home' ? '' : page.toString().toLowerCase()}"
			class="font-space-mono hover:opacity-50 {page.toLowerCase() == selected && 'text-primary'}"
		>
			{page}
		</a>
		{#if index != pages.length - 1}
			<p>•</p>
		{/if}
	{/each}
</div>
