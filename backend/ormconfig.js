const config = require('../config/config');

module.exports = {
	type: "mysql",
	host: config.db.host,
	port: config.db.port,
	username: config.db.username,
	password: config.db.password,
	database: config.db.database,
	migrations: ["backend/database/migrations/*.ts"],
	cli: {
		"migrationsDir": "backend/database/migrations"
	}
};