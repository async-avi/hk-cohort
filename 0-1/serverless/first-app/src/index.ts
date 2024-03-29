/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {}
let pingCount = 0;

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.method);
		if (request.method == 'GET' && request) {
			return Response.json({
				msg: 'This is a GET request',
			});
		}
		if (request.method == 'POST') {
			return Response.json({
				msg: 'This is a POST request',
			});
		}
		return Response.json({});
	},
};
