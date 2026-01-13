import { dev } from "$app/environment";
import { injectAnalytics } from '@vercel/analytics/sveltekit';

injectAnalytics({ mode: dev ? 'development' : 'production' });

export function load({ url }) {
	return {
		url: url.pathname
	};
}
