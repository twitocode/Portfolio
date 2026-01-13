<script lang="ts">
	import ProjectCard from '$lib/components/project-card.svelte';
	import type { Project } from '$lib/types';

	import IconGithub from '~icons/mdi/github';
	import IconRobot from '~icons/mdi/robot';
	import IconWeb from '~icons/mdi/web';
	import IconCSharp from '~icons/simple-icons/csharp';
	import IconDevpost from '~icons/simple-icons/devpost';
	import IconDotNet from '~icons/simple-icons/dotnet';
	import IconFastAPI from '~icons/simple-icons/fastapi';
	import IconNext from '~icons/simple-icons/nextdotjs';
	import IconPostgres from '~icons/simple-icons/postgresql';
	import IconPython from '~icons/simple-icons/python';
	import IconReact from '~icons/simple-icons/react';
	import IconSvelte from '~icons/simple-icons/svelte';
	import IconTypeScript from '~icons/simple-icons/typescript';
	import IconUnity from '~icons/simple-icons/unity';

	const projects = $state<Array<Project>>([
		{
			title: 'Waypoint',
			summary: 'AI-Powered Search and Rescue Prediction System. (Deltahacks 2026).',
			image: '/projects/waypoint.webp',
			status: 'completed',
			stack: [
				{ tag: 'Python', colour: 'dark_blue', icon: IconPython },
				{ tag: 'FastAPI', colour: 'emerald', icon: IconFastAPI },

				{ tag: 'React', colour: 'blue', icon: IconReact },
				{ tag: 'TypeScript', colour: 'blue', icon: IconTypeScript }
			],
			links: [
				{
					url: 'https://trywaypoint.tech',
					alt: 'Website',
					icon: IconWeb
				},
				{
					url: 'https://devpost.com/software/stufyflow?ref_content=user-portfolio&ref_feature=in_progress',
					alt: 'Devpost',
					icon: IconDevpost
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
			summary: 'A mental health platform for university and college students.',
			image: '/projects/serene.webp',
			status: 'in-progress',
			stack: [
				{ tag: '.NET', colour: 'purple', icon: IconDotNet },
				{ tag: 'PostgreSQL', colour: 'sky', icon: IconPostgres },
				{ tag: 'React', colour: 'blue', icon: IconReact },
				{ tag: 'Next', colour: 'black', icon: IconNext },
				{ tag: 'TypeScript', colour: 'blue', icon: IconTypeScript }
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
			title: 'Studyflow',
			summary:
				'Helping high school students transform doom-scrolling on social media into productive study breaks through active recall flash cards.',
			image: '/projects/studyflow.webp',
			status: 'completed',
			stack: [
				{ tag: 'React Native', colour: 'blue', icon: IconReact },
				{ tag: 'Groq', colour: 'orange', icon: IconRobot },
				{ tag: 'FastAPI', colour: 'emerald', icon: IconFastAPI }
			],
			links: [
				{
					url: 'https://devpost.com/software/stufyflow?ref_content=user-portfolio&ref_feature=in_progress',
					alt: 'Devpost',
					icon: IconDevpost
				},
				{
					url: 'https://github.com/twitocode/rythmhacks2025',
					alt: 'Source Code',
					icon: IconGithub
				}
			]
		},
		{
			title: 'Protoboard',
			summary: 'A breadboard simulator made in Unity for school.',
			image: '/projects/protoboard.webp',
			status: 'completed',
			stack: [
				{ tag: 'C#', colour: 'purple', icon: IconCSharp },
				{ tag: 'Unity', colour: 'neutral', icon: IconUnity }
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
			summary: 'A quizzing site containing computer engineering topics.',
			image: '/projects/cequiz.webp',
			status: 'completed',
			stack: [
				{ tag: 'SvelteKit', colour: 'orange', icon: IconSvelte },
				{ tag: 'TypeScript', colour: 'blue', icon: IconTypeScript }
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
