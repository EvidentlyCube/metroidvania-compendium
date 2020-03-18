import { Express } from 'express';
import { EndpointFactory } from '../endpoints/EndpointFactory';
import { Database } from '../database/Database';
import { Server } from 'http';

export class Dependencies {
	public readonly database: Database;
	public readonly express: Express;
	public readonly server: Server;
	public readonly endpointFactory: EndpointFactory;

	constructor(database: Database, express: Express, server: Server) {
		this.database = database;
		this.express = express;
		this.server = server;
		this.endpointFactory = new EndpointFactory(database);
	}
}
