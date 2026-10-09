<script lang="ts">
	import { useExport } from "@embedpdf/plugin-export/svelte";
	import {
		GlobalPointerProvider,
		PagePointerProvider
	} from "@embedpdf/plugin-interaction-manager/svelte";
	import { RenderLayer } from "@embedpdf/plugin-render/svelte";
	import { Scroller, type RenderPageProps } from "@embedpdf/plugin-scroll/svelte";
	import {
		SelectionLayer,
		useSelectionCapability,
		type SelectionSelectionMenuProps
	} from "@embedpdf/plugin-selection/svelte";
	import { Viewport } from "@embedpdf/plugin-viewport/svelte";
	import { useZoom, ZoomGestureWrapper } from "@embedpdf/plugin-zoom/svelte";
	import { Copy, Download, Minus, Plus } from "@lucide/svelte";
	import { MediaQuery } from "svelte/reactivity";

	interface Props {
		documentId: string;
	}

	let { documentId }: Props = $props();
	const exportApi = useExport(() => documentId);
	const zoom = useZoom(() => documentId);
	const selection = useSelectionCapability();
	const finePointer = new MediaQuery("pointer: fine");
</script>

<div
	class="bg-background flex flex-col overflow-hidden rounded-lg border border-[#303030] shadow-sm"
>
	<!-- Toolbar -->
	<div
		class="flex items-center justify-between gap-3 border-b border-[#303030] bg-[#303030] px-2 py-1.5"
	>
		<div class="flex items-center gap-1 text-white">
			<button
				onclick={() => zoom.provides?.zoomOut()}
				disabled={!zoom.provides}
				class="rounded-md p-1.5 hover:bg-white/10 disabled:opacity-30"
				aria-label="Zoom out"
			>
				<Minus size={16} />
			</button>
			<button
				class="font-space-mono w-12 text-center text-xs tabular-nums"
				onclick={(e) => zoom.state.zoomLevel = 1}
			>
				{Math.round(zoom.state.currentZoomLevel * 100)}%
			</button>
			<button
				onclick={() => zoom.provides?.zoomIn()}
				disabled={!zoom.provides}
				class="rounded-md p-1.5 hover:bg-white/10 disabled:opacity-30"
				aria-label="Zoom in"
			>
				<Plus size={16} />
			</button>
		</div>
		<button
			onclick={() => exportApi.provides?.download()}
			disabled={!exportApi.provides}
			class="bg-primary hover:bg-primary/50 inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm font-medium text-white shadow-sm transition-all disabled:cursor-not-allowed disabled:opacity-30"
			aria-label="Download PDF"
		>
			<Download size={16} />
			<span class="hidden sm:inline">Download PDF</span>
		</button>
	</div>

	<!-- PDF Viewer Area -->
	<div class="relative aspect-17/22 max-h-[calc(85dvh-3rem)] w-full">
		{#snippet copyMenu({ menuWrapperProps, placement }: SelectionSelectionMenuProps)}
			<div style={menuWrapperProps.style} use:menuWrapperProps.action>
				<button
					type="button"
					onclick={() => {
						selection.provides?.copyToClipboard();
						selection.provides?.clear();
					}}
					class="bg-secondary pointer-events-auto absolute left-0 inline-flex items-center gap-1.5 rounded-md border border-[#303030] px-2 py-1 text-xs text-white shadow-lg hover:bg-[#303030]
						{placement.suggestTop ? '-top-9' : 'top-[calc(100%+0.5rem)]'}"
				>
					<Copy size={14} />
					Copy
				</button>
			</div>
		{/snippet}
		{#snippet renderPage(page: RenderPageProps)}
			<PagePointerProvider
				{documentId}
				pageIndex={page.pageIndex}
				class="select-none [&_img]:pointer-events-none"
				style="width: {page.width}px; height: {page.height}px; position: relative;"
			>
				<RenderLayer {documentId} pageIndex={page.pageIndex} />
				{#if finePointer.current}
					<SelectionLayer
						{documentId}
						pageIndex={page.pageIndex}
						textStyle={{ background: "rgba(39, 105, 170, 0.35)" }}
						selectionMenuSnippet={copyMenu}
					/>
				{/if}
			</PagePointerProvider>
		{/snippet}
		<GlobalPointerProvider {documentId} class="absolute inset-0">
			<Viewport {documentId} class="bg-background absolute inset-0">
				<ZoomGestureWrapper {documentId}>
					<Scroller {documentId} {renderPage} />
				</ZoomGestureWrapper>
			</Viewport>
		</GlobalPointerProvider>
	</div>
</div>
