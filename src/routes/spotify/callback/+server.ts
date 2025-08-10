import { redirect, type RequestHandler } from "@sveltejs/kit";
import queryString from "query-string";

export const GET: RequestHandler = async ({request: req, params, url}) => {
	 var code = url.searchParams.get("code") || null;
		var state = url.searchParams.get("state") || null;

		if (state === null) {
			redirect(300, 
				'/#' +
					queryString.stringify({
						error: 'state_mismatch'
					})
			);
		} else {
			var authOptions = {
				url: 'https://accounts.spotify.com/api/token',
				form: {
					code: code,
					redirect_uri: redirect_uri,
					grant_type: 'authorization_code'
				},
				headers: {
					'content-type': 'application/x-www-form-urlencoded',
					Authorization:
						'Basic ' + new Buffer.from(client_id + ':' + client_secret).toString('base64')
				},
				json: true
			};
		}
}
