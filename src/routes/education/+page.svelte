<script lang="ts">
	import EducationCard from '$lib/components/education-card.svelte';
	import type { Education } from '$lib/types';
	import IconSchoolOutline from '~icons/mdi/school-outline';
	import IconArrowDown from '~icons/mdi/arrow-down';

	const schools = $state<Array<Education>>([
		{
			name: 'McMaster University',
			program: 'Honours Computer Science',
			startDate: 'Sept 2025',
			graduationDate: 'Present',
			icon: IconSchoolOutline,
			points: []
		},
		{
			name: 'Bishop Ryan Catholic Secondary School',
			startDate: 'Sept 2021',
			graduationDate: 'June 2025',
			icon: IconSchoolOutline,
			points: [
				{
					content: `HWCDSB Director's Award Winner`
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
	{#each schools as school, i}
		<span class="flex flex-col items-center w-full space-y-2">
			<EducationCard education={school} />
			{#if i < schools.length - 1}
        <IconArrowDown />
      {/if}
		</span>
	{/each}
</section>
