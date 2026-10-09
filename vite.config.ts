import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import Icons from "unplugin-icons/vite";
import { enhancedImages } from "@sveltejs/enhanced-img";

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit({
			// Consult https://svelte.dev/docs/kit/integrations
			// for more information about preprocessors
			preprocess: vitePreprocess(),
			adapter: adapter()
		}),
		tailwindcss(),
		Icons({
			compiler: "svelte"
		})
	]
});
