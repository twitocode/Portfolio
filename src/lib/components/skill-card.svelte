<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import type { Skill } from '$lib/types';
	import Badge from './ui/badge/badge.svelte';
	import { badgeColorMap } from '$lib/utils';

	const { skill } = $props<{ skill: Skill }>();
</script>

<Card.Root class="w-full gap-2 space-y-0 rounded-sm border-0">
	<Card.Header>
		<Card.Title>
			<span class="flex flex-col space-y-1">
				<span class="font-space-mono flex items-center space-x-3"
					><skill.icon class="text-xl" />
					<span class="sm:text-md text-sm lg:text-lg xl:text-xl">{skill.name}</span></span
				>
			</span>
		</Card.Title>
	</Card.Header>
	<Card.Content class="">
		<div class="flex w-full flex-wrap gap-2">
			{#each skill.items as item}
				<Badge variant="secondary" class={[badgeColorMap[item.colour] || 'bg-gray-500', 'flex items-center gap-1 transition-transform hover:scale-105']}>
					{#if item.icon}
						<item.icon />
					{/if}
					{item.tag}
				</Badge>
			{/each}
		</div>
	</Card.Content>
</Card.Root>
