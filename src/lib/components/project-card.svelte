<script lang="ts">
	import { Badge } from "#lib/components/ui/badge/index.js";
	import * as Card from "#lib/components/ui/card/index.js";
	import type { Project } from "#lib/types.js";
	import { badgeColorMap } from "#lib/utils.js";
	import IconCheckDecagram from "~icons/mdi/check-decagram";
	import IconClockOutline from "~icons/mdi/clock-outline";

	const { project } = $props<{ project: Project }>();
</script>

<Card.Root class="rounded-lg border-0">
	<Card.Header>
		<Card.Title class="font-space-mono flex items-center justify-between text-xl ">
			<span>{project.title}</span>
     <div class="flex pointer-coarse:gap-4 gap-2">
       {#each project.links as link}
			<a
				class="text-accent hover:text-accent flex items-center space-x-1 hover:underline"
				href={link.url}
				target="_blank"
				rel="noopener noreferrer"
			>
				<link.icon />

			</a>
		{/each}
     </div>
		</Card.Title>
		<Card.Description>{project.summary}</Card.Description>
		
	</Card.Header>
	<Card.Content>
		<img src={project.image} alt="{project.image}'s Image" class="aspect-video object-cover" />
	</Card.Content>
	<Card.Footer class="flex w-full flex-wrap gap-2 overflow-auto scroll-auto ">
		{#each project.stack as tag}
			<Badge
				variant="secondary"
				class={[
					badgeColorMap[tag.colour] || "bg-gray-500",
					" flex items-center gap-1 transition-transform hover:scale-105"
				]}
			>
				{#if tag.icon}
					<tag.icon />
				{/if}
				{tag.tag}
			</Badge>
		{/each}
	</Card.Footer>
</Card.Root>
