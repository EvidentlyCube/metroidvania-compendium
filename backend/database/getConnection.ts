import { Environment } from './entities/Environment';
import { Connection, createConnection } from 'typeorm';
import { Ability } from './entities/Ability';
import { AbilityCategory } from './entities/AbilityCategory';
import { AbilityExample } from './entities/AbilityExample';
import { AbilityGroup } from './entities/AbilityGroup';
import { AbilityVariant } from './entities/AbilityVariant';
import { Game } from './entities/Game';
import { GameSeries } from './entities/GameSeries';
import { File } from './entities/File';

const Config = require('../../config/config.js');

export async function initializeConnection(): Promise<Connection> {
	return createConnection({
		type: 'mysql',
		host: Config.db.host,
		port: Config.db.port,
		username: Config.db.username,
		password: Config.db.password,
		database: Config.db.database,
		synchronize: false,
		entities: [Ability, AbilityCategory, AbilityExample, AbilityGroup, AbilityVariant, Environment, File, Game, GameSeries],
	});
}
