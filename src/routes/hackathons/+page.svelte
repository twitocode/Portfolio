<script lang="ts">
	import HackathonCard from '$lib/components/hackathon-card.svelte';
	import type { Hackathon } from '$lib/types';

	const hackathons = $state<Hackathon[]>([
		{
			name: 'Deltahacks 12',
			location: 'Hamilton ON, Canada',
			imageUrl: 'hackathons/deltahacks-2026.png',
			date: 'January 2026',
			points: [
				{
					content: 'Worked on the frontend and designed the project in Figma'
				}
			],
			devpostLink:
				'https://devpost.com/software/searchable-ai?ref_content=user-portfolio&ref_feature=in_progress'
		},
		{
			name: 'Rythmhacks 2025',
			location: 'Waterloo ON, Canada',
			imageUrl: 'hackathons/rythmhacks.png',
			date: 'November 2025',
			points: [
				{ content: 'Winner of Best Venture Track Award' },
				{ content: 'Worked on the backend and AI implementation' }
			],
			devpostLink:
				'https://devpost.com/software/stufyflow?ref_content=user-portfolio&ref_feature=in_progress'
		}
	]);
</script>

<section
	class="to-primary from-background bg-background mb-2 grid h-auto max-h-[500px] w-full grid-cols-1 gap-2.25 overflow-auto rounded-md px-2 py-2"
>
	{#each hackathons as hackathon, i}
		<span class="flex w-full flex-col items-center space-y-2">
			<HackathonCard {hackathon} />
		</span>
	{/each}
</section>
