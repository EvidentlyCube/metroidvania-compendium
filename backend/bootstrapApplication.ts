import { initializeServer } from './endpoints/initializeServer';
import { Dependencies } from './core/Dependencies';
import { registerEnvironmentEndpoints } from './endpoints/registerEnvironmentEndpoints';
import { Database } from './database/Database';
import { registerImageEndpoints } from './endpoints/registerImageEndpoints';
import { registerMiddlewares } from './endpoints/registerMiddlewares';
import { registerAbilityCategoryEndpoints } from './endpoints/registerAbilityCategoryEndpoints';
import { registerAbilityGroupEndpoints } from './endpoints/registerAbilityGroupEndpoints';
import { registerAbilityEndpoints } from './endpoints/registerAbilityEndpoints';
import { registerGameSeriesEndpoints } from './endpoints/registerGameSeriesEndpoints';
import { registerGameEndpoints } from './endpoints/registerGameEndpoints';
import { registerGameLinkEndpoints } from './endpoints/registerGameLinkEndpoints';
import { registerAbilityVariantEndpoints } from './endpoints/registerAbilityVariantEndpoints';
import { registerAbilityExampleEndpoints } from './endpoints/registerAbilityExampleEndpoints';
import { registerGameEnvironmentEndpoints } from './endpoints/registerGameEnvironmentEndpoints';

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
	await registerAbilityVariantEndpoints(dependencies);
	await registerAbilityExampleEndpoints(dependencies);
	await registerGameEndpoints(dependencies);
	await registerGameEnvironmentEndpoints(dependencies);
	await registerGameLinkEndpoints(dependencies);
	await registerGameSeriesEndpoints(dependencies);
	await registerEnvironmentEndpoints(dependencies);
	await registerImageEndpoints(dependencies);

	dependencies.application.use(dependencies.router.routes());
	dependencies.application.use(dependencies.router.allowedMethods());

	return dependencies;
}
