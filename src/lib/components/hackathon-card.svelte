<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import type { Hackathon, Point } from '$lib/types';
	import { Link } from '@lucide/svelte';
	const { hackathon } = $props<{ hackathon: Hackathon }>();
</script>

{#snippet hackathonPoint(point: Point)}
	<li>
		{point.content}
		{#if point.children}
			<ul class="">
				{#each point.children as child}
					{@render hackathonPoint(child)}
				{/each}
			</ul>
		{/if}
	</li>
{/snippet}

<Card.Root class="w-full gap-2 space-y-0 rounded-sm border-0">
	<Card.Header>
		<Card.Title
			class={['flex flex-col justify-center', hackathon.name ? 'space-y-4' : 'space-y-1']}
		>
			<span class="flex flex-col space-y-1">
				<span class="font-space-mono flex items-center space-x-3">
					<img src={hackathon.imageUrl} alt="" class="max-h-5 min-h-5" />
					<span class="sm:text-md text-sm lg:text-lg xl:text-xl">{hackathon.name}</span>
					<a
						href={hackathon.devpostLink}
						target="_blank"
						rel="noopener noreferrer"
						class="transition ease-in-out hover:text-primary/80"><Link /></a
					>
				</span>
			</span>
			<span class="text-sm text-gray-50 opacity-50">{hackathon.date}</span>
		</Card.Title>
	</Card.Header>
	{#if hackathon.points.length > 0}
		<Card.Content class="">
			<ul class="prose text-foreground prose-sm list-outside list-disc pl-5">
				{#each hackathon.points as item}
					{@render hackathonPoint(item)}
				{/each}
			</ul>
		</Card.Content>
	{/if}
</Card.Root>
