<script lang="ts">
	import saturn from "#lib/assets/saturn.gif";
	import ResumeModal from "#lib/components/resume/resume-modal.svelte";
</script>

<svelte:head>
	<link rel="preload" as="image" href={saturn} />
</svelte:head>

<section
	class="to-primary from-background bg-background grid h-auto w-full grid-cols-1 gap-4 rounded-2xl px-2 pt-2 md:grid-cols-2"
>
	<div class="flex h-full w-full items-center justify-center">
		<img
			src={saturn}
			class="size-40 rounded-lg shadow-lg md:size-80 lg:size-100"
			alt="Saturn GIF"
			fetchpriority="high"
		/>
	</div>
	<div
		class="flex h-full flex-col items-center justify-center space-y-4 pb-4 text-center md:mr-10 md:mb-0 md:items-start md:text-left"
	>
		<h1 class="text-4xl font-bold">Hello!</h1>
		<p class="text-lg text-white">
			I'm a software engineer from Ontario, Canada!🍁 Currently attending <a
				href="https://www.mcmaster.ca"
				class=" underline underline-offset-8 hover:opacity-50">McMaster U</a
			>.
		</p>
		<div class="text-primary">
			<ResumeModal />
		</div>
	</div>
</section>
