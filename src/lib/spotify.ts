import { SPOTIFY_CLIENT, SPOTIFY_SECRET } from "$app/env/private";
import { SpotifyApi } from "@spotify/web-api-ts-sdk";

export async function getSpotifyToken(): Promise<string> {
	const authString = `${SPOTIFY_CLIENT}:${SPOTIFY_SECRET}`;

	const res = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: `Basic ${btoa(authString)}`
		},
		body: "grant_type=client_credentials"
	});

	const data = await res.json();
	return data.access_token;
}

export async function getCurrentlyPlaying() {
	return {};
}
