<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card/index.js';
	import type { Project } from '$lib/types';
	import IconCheckDecagram from '~icons/mdi/check-decagram';
	import IconClockOutline from '~icons/mdi/clock-outline';

	const { project } = $props<{ project: Project }>();

	const colorClasses: Record<string, string> = {
		purple: 'bg-purple-500 dark:bg-purple-500',
		cyan: 'bg-cyan-500 dark:bg-cyan-500',
		orange: 'bg-orange-500 dark:bg-orange-500',
		blue: 'bg-blue-500 dark:bg-blue-500',
		sky: 'bg-sky-500 dark:bg-sky-500',
    green: "bg-green-500 dark:bg-green-500",
    emerald: "bg-emerald-700 dark:bg-emerald-700",
    dark_blue: "bg-blue-700 dark:bg-blue-700"
	};
</script>

<Card.Root class="rounded-sm border-0">
	<Card.Header>
		<Card.Title class="font-space-mono flex items-center justify-between text-xl">
			<span>{project.title}</span>
			{#if project.status == 'completed'}
				<Badge variant="secondary" class="bg-green-500 text-white dark:bg-green-600 ">
					<IconCheckDecagram />
					Completed
				</Badge>
			{:else}
				<Badge variant="secondary" class="bg-orange-500 text-white dark:bg-orange-600">
					<IconClockOutline />
					in-progress
				</Badge>
			{/if}
		</Card.Title>
		<Card.Description>{project.summary}</Card.Description>
		{#each project.links as link}
			<a
				class="text-accent-foreground flex items-center space-x-1 hover:underline hover:opacity-50"
				href={link.url}
        target="_blank"
		rel="noopener noreferrer"
			>
				<link.icon />
				<span>{link.alt}</span>
			</a>
		{/each}
	</Card.Header>
	<Card.Content>
		<img src={project.image} alt="{project.image}'s Image" class="aspect-video object-cover" />
	</Card.Content>
	<Card.Footer class="flex w-full flex-wrap space-x-1 overflow-auto scroll-auto ">
		{#each project.stack as tag}
			<Badge variant="secondary" class={[colorClasses[tag.colour], ' text-white']}>
				{tag.tag}
			</Badge>
		{/each}
	</Card.Footer>
</Card.Root>
