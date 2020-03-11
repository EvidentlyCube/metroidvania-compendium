import { Request, Response } from 'express';
import { Environment } from '../database/entities/Environment';
import { Dependencies } from '../core/Dependencies';

export function registerEnvironmentEndpoints(deps: Dependencies): void {
	deps.express.get('/environments/:id', async (req: Request, res: Response) => {
		await deps.endpointFactory.getOneById(Environment, req, res);
	});

	deps.express.get('/environments', async (req: Request, res: Response) => {
		await deps.endpointFactory.getMany(Environment, req, res);
	});
}
