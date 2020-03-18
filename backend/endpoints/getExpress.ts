import express from 'express';
import { Server } from 'http';
require('express-async-errors');

const port = 9001;

interface InitializeExpressResult {
	app: express.Express;
	server: Server;
}

export async function initializeExpress(): Promise<InitializeExpressResult> {
	return new Promise(resolve => {
		const app = express();
		const server = app.listen(port, () => {
			resolve({ app, server });
		});
	});
}
