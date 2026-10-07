<script lang="ts">
	import ExperienceCard from '$lib/components/experience.card.svelte';
	import type { Experience } from '$lib/types';

	const experiences = $state<Experience[]>([
		{
			title: 'Web Developer',
			organization: 'McMaster Computer Science Society',
			startDate: 'October 2026',
			points: [
				{
					content: 'Web Developer'
				}
			],
			imageUrl: 'experience/css.webp'
		},
		{
			title: '',
			organization: 'Google Developer Club McMaster',
			startDate: 'October 2026',
			points: [
				{
					content: 'Software Engineer'
				}
			],
			imageUrl: 'experience/gdg.webp'
		}
	]);
</script>

<section
	class="to-primary from-background bg-background grid h-auto max-h-[500px] w-full grid-cols-1 gap-2.25 overflow-auto rounded-2xl p-2"
>
	{#each experiences as experience, i}
		<span class="flex w-full flex-col items-center space-y-2">
			<ExperienceCard {experience} />
		</span>
	{/each}
</section>
