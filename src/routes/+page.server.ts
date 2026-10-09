import { getCurrentlyPlaying } from "#lib/spotify.js";

export const load = async ({}) => {
	const data = await getCurrentlyPlaying();

	return {};
};
