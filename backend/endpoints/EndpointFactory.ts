import { Context } from 'koa';
import { Database } from '../database/Database';
import { ApiError } from '../core/ApiError';

type FilterMap = { [key: string]: string };
type Dictionary = { [key: string]: any };

export class EndpointFactory {
	private db: Database;

	constructor(db: Database) {
		this.db = db;
	}

	public async getMany(entity: any): Promise<any> {
		return await this.db.findAll(entity);
	}

	public async getManyWithFilters(entity: any, filterMap: FilterMap, ctx: Context): Promise<any> {
		const filters: Dictionary = {};
		for (const queryName in filterMap) {
			if (!Object.prototype.hasOwnProperty.call(filterMap, queryName)) {
				continue;
			}

			if (typeof ctx.query[queryName] === 'string') {
				const fieldName = filterMap[queryName];
				const values: string[] = ctx.query[queryName].split(',');

				for (const value of values) {
					if (isNaN(+value)) {
						throw new ApiError(`Non-numeric value passed in '${queryName}' query filter`, 400);
					}
				}

				filters[fieldName] = values;
			}
		}

		return await this.db.findManyBy(entity, filters);
	}

	public async getOneById(entity: any, ctx: Context): Promise<any> {
		const model = await this.db.findOneById(entity, ctx.params.id);

		if (!model) {
			throw new ApiError('Model not found', 404);
		}

		return model;
	}
}
