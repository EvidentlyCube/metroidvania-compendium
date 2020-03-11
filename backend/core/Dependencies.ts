import { Connection } from 'typeorm';
import { Express } from 'express';
import { EndpointFactory } from '../endpoints/EndpointFactory';

export class Dependencies {
	public readonly connection: Connection;
	public readonly express: Express;
	public readonly endpointFactory: EndpointFactory;

	constructor(connection: Connection, express: Express) {
		this.connection = connection;
		this.express = express;
		this.endpointFactory = new EndpointFactory(connection);
	}
}
