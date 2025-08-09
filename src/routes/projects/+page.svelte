<script lang="ts">
	import protoboardImage from '$lib/assets/protoboard.webp';
	import sereneImage from '$lib/assets/serene.png';
	import ProjectCard from '$lib/components/project-card.svelte';
	import type { Project } from '$lib/components/types';

	import IconGithub from '~icons/mdi/github';
	import IconWeb from '~icons/mdi/web';

	const projects = $state<Array<Project>>([
		{
			title: 'Serene',
			summary: 'A mental health platform for students',
			image: sereneImage,
			status: 'in-progress',
			stack: [
				{ tag: '.NET', colour: 'purple' },
				{ tag: 'C#', colour: 'purple' },
				{ tag: 'SvelteKit', colour: 'orange' },
				{ tag: 'TypeScript', colour: 'blue' }
			],
			links: [
				{
					url: 'serene.vercel.app',
					alt: 'Link',
					icon: IconWeb
				},
				{
					url: 'https://github.com/twitocode/serene',
					alt: 'Source Code',
					icon: IconGithub
				}
			]
		},
		{
			title: 'Protoboard',
			summary: 'A breadboard simulator made in unity for school',
			image: protoboardImage,
			status: 'completed',
			stack: [
				{ tag: 'C#', colour: 'purple' },
				{ tag: 'Unity', colour: 'neutral' }
			],
			links: [
				{
					url: 'https://play.unity.com/en/games/fd8e41e3-7efb-44d2-b61a-8d489f4d0e78/protoboard',
					alt: 'Play here',
					icon: IconWeb
				},
				{
					url: 'https://github.com/Twito-School-Projects/Protoboard',
					alt: 'Source Code',
					icon: IconGithub
				}
			]
		},
		
	]);
</script>

<section
	class="to-primary from-background bg-background mb-2 grid h-auto w-full grid-cols-2 gap-2.25 rounded-md px-2 py-2 overflow-auto max-h-[500px]"
>
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
</section>
