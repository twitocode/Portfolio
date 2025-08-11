<script lang="ts">
	import SkillCard from '$lib/components/skill-card.svelte';
	import type { Skill } from '$lib/types';
	import IconCodeBraces from '~icons/mdi/code-braces';

	const skills = $state<Array<Skill>>([
		{
			name: 'Programming',
			icon: IconCodeBraces,
			items: [
				{ tag: 'C#', colour: 'purple' },
				{ tag: '.NET', colour: 'purple' },
				{ tag: 'TypeScript', colour: 'blue' },
				{ tag: 'Svelte', colour: 'orange' }
			]
		}
	]);
</script>

<section
	class="to-primary from-background bg-background mb-2 grid h-auto max-h-[500px] w-full grid-cols-1 gap-2.25 overflow-auto rounded-md px-2 py-2"
>
	{#each skills as skill}
		<span class="flex w-full flex-col items-center space-y-2">
			<SkillCard {skill} />
		</span>
	{/each}
</section>
