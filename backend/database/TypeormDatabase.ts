import { ObjectType } from 'typeorm/common/ObjectType';
import { Connection } from 'typeorm';
import { Database, EntityConditions } from './Database';

export class TypeormDatabase implements Database {
	private _connection: Connection;

	constructor(connection: Connection) {
		this._connection = connection;
	}

	public async findOneById<Entity>(entity: ObjectType<Entity>, id: string): Promise<Entity | undefined> {
		return this._connection.getRepository(entity).findOne({ where: { id } });
	}

	public async findManyBy<Entity>(entity: ObjectType<Entity>, conditions: EntityConditions<Entity>): Promise<Entity[]> {
		return this._connection.getRepository(entity).find({ where: conditions });
	}

	public async findAll<Entity>(entity: ObjectType<Entity>): Promise<Entity[]> {
		return this._connection.getRepository(entity).find();
	}
}
