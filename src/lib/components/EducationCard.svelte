<script lang="ts">
	import type { Education, Point } from '$lib/components/types';
	import * as Card from '$lib/components/ui/card/index.js';

	const { education } = $props<{ education: Education }>();
</script>

{#snippet educationPoint(point: Point)}
	<li>
		{point.content}
		{#if point.children}
			<ul class="">
				{#each point.children as child}
					{@render educationPoint(child)}
				{/each}
			</ul>
		{/if}
	</li>
{/snippet}

<Card.Root class="space-y-0 rounded-sm border-0 gap-2">
	<Card.Header>
		<Card.Title
			class={['flex flex-col justify-center', education.program ? 'space-y-4' : 'space-y-1']}
		>
			<span class="flex flex-col space-y-1">
				<span class="font-space-mono text-xl">{education.name}</span>
				<span class="text-primary italic">{education.program}</span>
			</span>
			<span class="text-sm opacity-50">{education.startDate} - {education.graduationDate}</span>
		</Card.Title>
	</Card.Header>
	{#if education.points.length > 0}
		<Card.Content class="">
			<ul class="prose text-foreground prose-sm list-outside list-disc pl-5">
				{#each education.points as item}
					{@render educationPoint(item)}
				{/each}
			</ul>
		</Card.Content>
	{/if}
</Card.Root>
