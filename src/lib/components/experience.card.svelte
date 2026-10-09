<script lang="ts">
	import * as Card from "#lib/components/ui/card/index.js";
	import type { Experience, Point } from "#lib/types.js";

	const { experience } = $props<{ experience: Experience }>();
</script>

{#snippet experiencePoint(point: Point)}
	<li>
		{point.content}
		{#if point.children}
			<ul class="">
				{#each point.children as child}
					{@render experiencePoint(child)}
				{/each}
			</ul>
		{/if}
	</li>
{/snippet}

<Card.Root class="w-full gap-2 space-y-0 rounded-lg border-0">
	<Card.Header>
		<Card.Title
			class={["flex flex-col justify-center", experience.title ? "space-y-4" : "space-y-1"]}
		>
			<span class="flex flex-col space-y-1">
				<span class="font-space-mono flex items-center space-x-3">
					<img src={experience.imageUrl} alt="" class="max-h-5 min-h-5 rounded-[2px]" />
					<span class="sm:text-md text-sm lg:text-lg xl:text-xl">{experience.organization}</span>
				</span>
			</span>
			<span class="flex items-center space-x-1">
				<span class="text-sm text-gray-50 opacity-50">{experience.startDate}</span>
				<span class=" text-gray-50 opacity-50">-</span>
				<span class="text-sm text-gray-50 opacity-50">{experience.endDate ?? "Present"}</span>
			</span>
		</Card.Title>
	</Card.Header>
	{#if experience.points.length > 0}
		<Card.Content class="">
			<ul class="prose text-foreground prose-sm list-outside list-disc pl-5">
				{#each experience.points as item}
					{@render experiencePoint(item)}
				{/each}
			</ul>
		</Card.Content>
	{/if}
</Card.Root>
