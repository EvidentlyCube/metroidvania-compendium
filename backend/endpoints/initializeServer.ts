import Koa = require('koa');
import { Server } from 'http';
const cors = require('@koa/cors');
const port = 9001;

interface InitializeServerResult {
	app: Koa;
	server: Server;
}

export async function initializeServer(): Promise<InitializeServerResult> {
	return new Promise(resolve => {
		const app = new Koa();
		app.use(cors());
		const server = app.listen(port, () => {
			resolve({ app, server });
		});
	});
}
