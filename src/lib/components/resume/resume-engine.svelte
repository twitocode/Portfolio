<script lang="ts">
	import { createPluginRegistration } from "@embedpdf/core";
	import { EmbedPDF } from "@embedpdf/core/svelte";
	import { usePdfiumEngine } from "@embedpdf/engines/svelte";
	import {
		DocumentContent,
		DocumentManagerPluginPackage
	} from "@embedpdf/plugin-document-manager/svelte";
	import { ExportPluginPackage } from "@embedpdf/plugin-export/svelte";
	import { InteractionManagerPluginPackage } from "@embedpdf/plugin-interaction-manager/svelte";
	import { PanPluginPackage } from "@embedpdf/plugin-pan/svelte";
	import { RenderPluginPackage } from "@embedpdf/plugin-render/svelte";
	import { ScrollPluginPackage } from "@embedpdf/plugin-scroll/svelte";
	import { CopyToClipboard, SelectionPluginPackage } from "@embedpdf/plugin-selection/svelte";
	import { ViewportPluginPackage } from "@embedpdf/plugin-viewport/svelte";
	import { ZoomMode, ZoomPluginPackage } from "@embedpdf/plugin-zoom/svelte";
	import ResumeViewer from "./resume-viewer.svelte";

	const pdfEngine = usePdfiumEngine();

	const plugins = [
		createPluginRegistration(DocumentManagerPluginPackage, {
			initialDocuments: [{ url: "/toheeb_eji_resume.pdf" }]
		}),
		createPluginRegistration(ViewportPluginPackage),
		createPluginRegistration(ScrollPluginPackage),
		createPluginRegistration(RenderPluginPackage),
		createPluginRegistration(ExportPluginPackage, { defaultFileName: "toheeb_eji_resume.pdf" }),
		createPluginRegistration(InteractionManagerPluginPackage),
		createPluginRegistration(SelectionPluginPackage),
		createPluginRegistration(ZoomPluginPackage, {
			defaultZoomLevel: ZoomMode.FitPage
		}),
		createPluginRegistration(PanPluginPackage, {
			defaultMode: "mobile"
		})
	];
</script>

{#snippet placeholder()}
	<!-- mirrors ResumeViewer's layout so the modal keeps its size while loading -->
	<div class="bg-background flex flex-col overflow-hidden rounded-lg border border-[#303030]">
		<div class="border-b border-[#303030] bg-[#303030] px-2 py-1.5">
			<div class="h-7 sm:h-8"></div>
		</div>
		<div
			class="font-space-mono grid aspect-17/22 max-h-[calc(85dvh-3rem)] w-full place-items-center text-sm text-white/60"
		>
			Loading resume...
		</div>
	</div>
{/snippet}

{#if pdfEngine.isLoading || !pdfEngine.engine}
	{@render placeholder()}
{:else}
	<EmbedPDF engine={pdfEngine.engine} {plugins}>
		{#snippet children({ activeDocumentId })}
			<CopyToClipboard />
			{#if activeDocumentId}
				<DocumentContent documentId={activeDocumentId}>
					{#snippet children(documentContent)}
						{#if documentContent.isLoaded}
							<ResumeViewer documentId={activeDocumentId} />
						{:else}
							{@render placeholder()}
						{/if}
					{/snippet}
				</DocumentContent>
			{:else}
				{@render placeholder()}
			{/if}
		{/snippet}
	</EmbedPDF>
{/if}
