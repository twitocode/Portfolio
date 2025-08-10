import { getCurrentlyPlaying } from '$lib/spotify';

export const load = async ({}) => {
	const data = await getCurrentlyPlaying();

	return {};
};
