<script lang="ts">
	import EducationCard from '$lib/components/EducationCard.svelte';
	import type { Education } from '$lib/components/types';

	const schools = $state<Array<Education>>([
		{
			name: 'McMaster University',
			program: 'Honours Computer Science',
			startDate: 'Sept 2025',
			graduationDate: 'Present',
			points: []
		},
		{
			name: 'Bishop Ryan Catholic Secondary School',
			startDate: 'Sept 2021',
			graduationDate: 'June 2025',
			points: [
				{
					content: 'Directors Award Winner'
				},
				{
					content: 'Computer Studies Grad-Award Winner'
				}
			]
		}
	]);
</script>

<section
	class="to-primary from-background bg-background mb-2 grid h-auto max-h-[500px] w-full grid-cols-1 gap-2.25 overflow-auto rounded-md px-2 py-2"
>
	{#each schools as school}
		<EducationCard education={school} />
	{/each}
</section>
