import { env } from '$env/dynamic/private';
import { redirect } from '@sveltejs/kit';
import queryString from 'query-string';

export function GET() {
	var state = '!@#dfsdf@#r#@fc#cr@$f#$';
	var scope = 'user-read-private user-read-email';

	return redirect(
		300,
		'https://accounts.spotify.com/authorize?' +
			queryString.stringify({
				response_type: 'code',
				client_id: env.SPOTIFY_CLIENT,
				scope: scope,
				redirect_uri: 'http://localhost:3000/spotify/callback',
				state: state
			})
	);
}
