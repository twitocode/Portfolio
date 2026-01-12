<script lang="ts">
	import { Github, Linkedin, Mail } from '@lucide/svelte';
</script>

<section
	class="to-primary from-background bg-background mb-2 flex h-auto max-h-[500px] w-full flex-col space-y-2 overflow-auto rounded-md px-2 py-2"
>
	<div class="flex items-center gap-2"><Mail /> twitodev@gmail.com</div>
	<a
		href="https://github.com/twitocode"
		target="_blank"
		rel="noopener noreferrer"
		class="flex items-center gap-2"><Github /> Github</a
	>
	<a
		href="https://www.linkedin.com/in/toheeb-eji-880b72325/"
		target="_blank"
		rel="noopener noreferrer"
		class="flex items-center gap-2"><Linkedin />Linkedin</a
	>
</section>
