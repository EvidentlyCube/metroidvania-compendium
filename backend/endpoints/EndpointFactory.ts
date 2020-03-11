import { Request, Response } from 'express';
import { Connection } from 'typeorm';

export class EndpointFactory {
	private db: Connection;

	constructor(db: Connection) {
		this.db = db;
	}

	public async getMany(entity: any, req: Request, res: Response): Promise<void> {
		const models = await this.db.getRepository(entity).find();

		res.json(this.wrapResponse(models));
	}

	public async getOneById(entity: any, req: Request, res: Response): Promise<void> {
		const model = await this.db.getRepository(entity).findOne({ where: { id: req.params.id } });

		if (!model) {
			res.status(404);
			res.json(this.wrapError('Model not found'));
			return;
		}

		res.json(this.wrapResponse(model));
	}

	private wrapResponse(response: any): any {
		return {
			error: null,
			data: response,
		};
	}

	private wrapError(error: string): any {
		return {
			error,
			data: null,
		};
	}
}
