import { ObjectType } from 'typeorm/common/ObjectType';

export interface Database {
	findOneById<Entity>(entity: ObjectType<Entity>, id: string): Promise<Entity | undefined>;

	findAll<Entity>(entity: ObjectType<Entity>): Promise<Entity[]>;
}
