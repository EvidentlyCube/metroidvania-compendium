import express from 'express';

const port = 9001;

export async function initializeExpress(): Promise<express.Express> {
	return new Promise(resolve => {
		const app = express();
		app.listen(port, () => resolve(app));
	});
}
