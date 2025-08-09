<script lang="ts">
	import type { Project } from '$lib/components/types';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge';
	import IconCheckDecagram from '~icons/mdi/check-decagram';
	import IconClockOutline from '~icons/mdi/clock-outline';
  
	const { project } = $props<{ project: Project }>();
</script>

<Card.Root class="rounded-sm border-0">
			<Card.Header>
				<Card.Title class="font-space-mono flex items-center justify-between text-xl">
					<svelte:fragment>{project.title}</svelte:fragment>
					{#if project.status == 'completed'}
						<Badge variant="secondary" class="bg-green-500 text-white dark:bg-green-600">
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
						class="text-accent-foreground flex items-center space-x-2 hover:underline hover:opacity-50"
						href={link.url}
					>
						<link.icon />
						{link.alt}
					</a>
				{/each}
			</Card.Header>
			<Card.Content>
				<img src={project.image} alt="{project.image}'s Image" class="object-cover aspect-video" />
			</Card.Content>
			<Card.Footer class="space-x-1">
				{#each project.stack as tag}
					<Badge
						variant="secondary"
						class="bg-{tag.colour}-500 text-white dark:bg-{tag.colour}-600"
					>
						{tag.tag}
					</Badge>
				{/each}
			</Card.Footer>
		</Card.Root>