<script lang="ts">
	import HackathonCard from '$lib/components/hackathon-card.svelte';
	import type { Hackathon } from '$lib/types';

	const hackathons = $state<Hackathon[]>([
		{
			name: 'Machacks 2026',
			location: 'Hamilton ON, Canada',
			imageUrl: 'hackathons/machacks-2026.png',
			date: 'March 2026',
			points: [
				{
					content: 'Worked on the mobile app and Gemini API integrations'
				}
			],
			devpostLink: 'https://devpost.com/software/toretto'
		},
		{
			name: 'Deltahacks 12',
			location: 'Hamilton ON, Canada',
			imageUrl: 'hackathons/deltahacks-2026.png',
			date: 'January 2026',
			points: [
				{
					content: 'Worked on the React frontend and designed the project in Figma'
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
				{ content: 'Worked on the backend and AI implementation' },
				{ content: 'Worked on the React Native mobile app' }
			],
			devpostLink:
				'https://devpost.com/software/stufyflow?ref_content=user-portfolio&ref_feature=in_progress'
		}
	]);
</script>

<section
	class="to-primary from-background bg-background grid h-auto max-h-[500px] w-full grid-cols-1 gap-2.25 overflow-auto rounded-2xl p-2"
>
	{#each hackathons as hackathon, i}
		<span class="flex w-full flex-col items-center space-y-2">
			<HackathonCard {hackathon} />
		</span>
	{/each}
</section>
