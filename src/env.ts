import { defineEnvVars } from "@sveltejs/kit/env";

export const variables = defineEnvVars({
	SPOTIFY_CLIENT: { schema: (input) => input ?? "" },
	SPOTIFY_SECRET: { schema: (input) => input ?? "" }
});
