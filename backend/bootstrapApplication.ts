import { initializeExpress } from './endpoints/getExpress';
import { Dependencies } from './core/Dependencies';
import { registerEnvironmentEndpoints } from './endpoints/registerEnvironmentEndpoints';
import { Database } from './database/Database';
import { registerImageEndpoints } from './endpoints/registerImageEndpoints';

export interface BoostrapConfig {
	initializeDatabase: { (): Promise<Database> };
}

export async function bootstrapApplication(config: BoostrapConfig): Promise<Dependencies> {
	const db = await config.initializeDatabase();
	const { app, server } = await initializeExpress();
	const dependencies = new Dependencies(db, app, server);

	await registerEnvironmentEndpoints(dependencies);
	await registerImageEndpoints(dependencies);

	return dependencies;
}
