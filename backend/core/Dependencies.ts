import Koa = require('koa');
import { EndpointFactory } from '../endpoints/EndpointFactory';
import { Database } from '../database/Database';
import { Server } from 'http';
import Router from 'koa-router';

export class Dependencies {
	public readonly database: Database;
	public readonly application: Koa;
	public readonly server: Server;
	public readonly router: Router;
	public readonly endpointFactory: EndpointFactory;

	constructor(database: Database, application: Koa, server: Server) {
		this.database = database;
		this.application = application;
		this.server = server;
		this.router = new Router();
		this.endpointFactory = new EndpointFactory(database);
	}
}
