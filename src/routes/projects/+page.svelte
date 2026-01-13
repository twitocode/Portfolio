<script lang="ts">
	import ProjectCard from '$lib/components/project-card.svelte';
	import type { Project } from '$lib/types';

	import IconGithub from '~icons/mdi/github';
	import IconWeb from '~icons/mdi/web';

	const projects = $state<Array<Project>>([
		{
			title: 'Waypoint',
			summary: 'AI-Powered Search and Rescue Prediction System. (Deltahacks 2026)',
			image: '/projects/waypoint.webp',
			status: 'completed',
			stack: [
				{ tag: '.Python', colour: 'dark_blue' },
				{ tag: '.FastAPI', colour: 'emerald' },

				{ tag: 'React', colour: 'blue' },
				{ tag: 'TypeScript', colour: 'blue' }
			],
			links: [
				{
					url: 'https://trywaypoint.tech',
					alt: 'Link',
					icon: IconWeb
				},
				{
					url: 'https://github.com/twitocode/deltahacks-2026',
					alt: 'Source Code',
					icon: IconGithub
				}
			]
		},
		{
			title: 'Serene',
			summary: 'A mental health platform for university and college students',
			image: '/projects/serene.webp',
			status: 'in-progress',
			stack: [
				{ tag: '.NET', colour: 'purple' },
				{ tag: 'PostgreSQL', colour: 'sky' },
				{ tag: 'React', colour: 'blue' },
				{ tag: 'Next', colour: 'black' },
				{ tag: 'TypeScript', colour: 'blue' }
			],
			links: [
				{
					url: 'https://serene-opal.vercel.app',
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
			summary: 'A breadboard simulator made in Unity for school',
			image: '/projects/protoboard.webp',
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
		{
			title: 'CEQuiz',
			summary: 'A quizzing site containing computer engineering topics',
			image: '/projects/cequiz.webp',
			status: 'completed',
			stack: [
				{ tag: 'SvelteKit', colour: 'orange' },
				{ tag: 'TypeScript', colour: 'blue' }
			],
			links: [
				{
					url: 'https://cequiz.vercel.app/',
					alt: 'Link',
					icon: IconWeb
				},
				{
					url: 'https://github.com/twitocode/CE-Quiz-Site',
					alt: 'Source Code',
					icon: IconGithub
				}
			]
		}
	]);
</script>

<section
	class="to-primary from-background bg-background mb-2 grid h-auto max-h-[500px] w-full grid-cols-1 gap-y-2.25 overflow-auto rounded-md px-2 py-2 md:grid-cols-2 md:gap-2.25"
>
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
</section>
