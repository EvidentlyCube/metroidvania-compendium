import { Request, Response } from 'express';
import { Dependencies } from '../core/Dependencies';
import { Image } from '../database/entities/Image';

export function registerImageEndpoints(deps: Dependencies): void {
	deps.express.get('/images/:id', async (req: Request, res: Response) => {
		await deps.endpointFactory.getOneById(Image, req, res);
	});

	deps.express.get('/images', async (req: Request, res: Response) => {
		await deps.endpointFactory.getMany(Image, req, res);
	});
}
