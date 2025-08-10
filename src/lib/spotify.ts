import { env } from '$env/dynamic/private';
import { SpotifyApi } from '@spotify/web-api-ts-sdk';

export async function getSpotifyToken(): Promise<string> {
	const authString = `${env.SPOTIFY_CLIENT}:${env.SPOTIFY_SECRET}`;

	const res = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${btoa(authString)}`
		},
		body: 
			"grant_type=client_credentials"
	
	});

	const data = await res.json();
	return data.access_token;
}



export async function getCurrentlyPlaying() {
	return {}
}

