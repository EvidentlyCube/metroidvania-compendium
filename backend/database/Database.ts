import { ObjectType } from 'typeorm/common/ObjectType';

export type EntityConditions<T> = {
	[P in keyof T]?: any | any[];
};

export interface Database {
	findOneById<Entity>(entity: ObjectType<Entity>, id: string): Promise<Entity | undefined>;

	findAll<Entity>(entity: ObjectType<Entity>): Promise<Entity[]>;

	findManyBy<Entity>(entity: ObjectType<Entity>, conditions: EntityConditions<Entity>): Promise<Entity[]>;
}
