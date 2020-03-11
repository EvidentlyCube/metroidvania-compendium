import { initializeConnection } from './database/getConnection';
import { initializeExpress } from './endpoints/getExpress';
import { Dependencies } from './core/Dependencies';
import { registerEnvironmentEndpoints } from './endpoints/registerEnvironmentEndpoints';

export async function bootstrapApplication() {
	const dependencies = new Dependencies(await initializeConnection(), await initializeExpress());

	await registerEnvironmentEndpoints(dependencies);
}
