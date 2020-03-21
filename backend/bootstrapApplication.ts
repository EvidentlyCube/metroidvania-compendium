import { initializeServer } from './endpoints/initializeServer';
import { Dependencies } from './core/Dependencies';
import { registerEnvironmentEndpoints } from './endpoints/registerEnvironmentEndpoints';
import { Database } from './database/Database';
import { registerImageEndpoints } from './endpoints/registerImageEndpoints';
import { registerMiddlewares } from './endpoints/registerMiddlewares';
import { registerAbilityCategoryEndpoints } from './endpoints/registerAbilityCategoryEndpoints';
import { registerAbilityGroupEndpoints } from './endpoints/registerAbilityGroupEndpoints';
import { registerAbilityEndpoints } from './endpoints/registerAbilityEndpoints';

export interface BoostrapConfig {
	initializeDatabase: { (): Promise<Database> };
}

export async function bootstrapApplication(config: BoostrapConfig): Promise<Dependencies> {
	const db = await config.initializeDatabase();
	const { app, server } = await initializeServer();
	const dependencies = new Dependencies(db, app, server);

	await registerMiddlewares(dependencies);
	await registerAbilityCategoryEndpoints(dependencies);
	await registerAbilityGroupEndpoints(dependencies);
	await registerAbilityEndpoints(dependencies);
	await registerEnvironmentEndpoints(dependencies);
	await registerImageEndpoints(dependencies);

	dependencies.application.use(dependencies.router.routes());
	dependencies.application.use(dependencies.router.allowedMethods());

	return dependencies;
}
