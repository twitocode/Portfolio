<script lang="ts">
	import SkillCard from '$lib/components/skill-card.svelte';
	import type { Skill } from '$lib/types';
	import IconAccountGroup from '~icons/mdi/account-group';
	import IconCodeBraces from '~icons/mdi/code-braces';
	import IconDatabase from '~icons/mdi/database';
	import IconPalette from '~icons/mdi/palette';
	import IconToolbox from '~icons/mdi/toolbox';

	import IconCSharp from '~icons/simple-icons/csharp';
	import IconDocker from '~icons/simple-icons/docker';
	import IconDotNet from '~icons/simple-icons/dotnet';
	import IconFigma from '~icons/simple-icons/figma';
	import IconGit from '~icons/simple-icons/git';
	import IconGoogleCloud from '~icons/simple-icons/googlecloud';
	import IconMongoDB from '~icons/simple-icons/mongodb';
	import IconPostgres from '~icons/simple-icons/postgresql';
	import IconReact from '~icons/simple-icons/react';
	import IconSvelte from '~icons/simple-icons/svelte';
	import IconTailwind from '~icons/simple-icons/tailwindcss';
	import IconTypeScript from '~icons/simple-icons/typescript';

	const skills = $state<Array<Skill>>([
		{
			name: 'Programming',
			icon: IconCodeBraces,
			items: [
				{ tag: 'C#', colour: 'purple', icon: IconCSharp },
				{ tag: '.NET', colour: 'purple', icon: IconDotNet },
				{ tag: 'TypeScript', colour: 'blue', icon: IconTypeScript },
				{ tag: 'Svelte', colour: 'orange', icon: IconSvelte },
				{ tag: 'React', colour: 'blue', icon: IconReact }
			]
		},
		{
			name: 'Databases',
			icon: IconDatabase,
			items: [
				{ tag: 'PostgreSQL', colour: 'blue', icon: IconPostgres },
				{ tag: 'MongoDB', colour: 'green', icon: IconMongoDB }
			]
		},
		{
			name: 'Tools & Platforms',
			icon: IconToolbox,
			items: [
				{ tag: 'Git', colour: 'orange', icon: IconGit },
				{ tag: 'Docker', colour: 'blue', icon: IconDocker },
				{ tag: 'Google Cloud', colour: 'yellow', icon: IconGoogleCloud }
			]
		},
		{
			name: 'Design & UI',
			icon: IconPalette,
			items: [
				{ tag: 'Figma', colour: 'purple', icon: IconFigma },
				{ tag: 'Tailwind CSS', colour: 'blue', icon: IconTailwind },
				{ tag: 'Responsive Design', colour: 'green' }
			]
		},
		{
			name: 'Soft Skills',
			icon: IconAccountGroup,
			items: [
				{ tag: 'Problem Solving', colour: 'green' },
				{ tag: 'Teamwork', colour: 'purple' }
			]
		}
	]);
</script>

<section
	class="to-primary from-background bg-background mb-2 grid h-auto max-h-[1000px] w-full grid-cols-1 gap-4 overflow-auto rounded-md px-2 py-2 md:grid-cols-2"
>
	{#each skills as skill}
		<span class="flex w-full flex-col items-center space-y-2">
			<SkillCard {skill} />
		</span>
	{/each}
</section>
