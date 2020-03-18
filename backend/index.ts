import { BoostrapConfig, bootstrapApplication } from './bootstrapApplication';
import { initializeConnection } from './database/getConnection';
import { TypeormDatabase } from './database/TypeormDatabase';

const config: BoostrapConfig = {
	initializeDatabase: async () => new TypeormDatabase(await initializeConnection()),
};

bootstrapApplication(config).then(() => console.log('Bootstrapped!'));
