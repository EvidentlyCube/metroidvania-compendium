import 'mocha';
import { registerBackendEndpointEnvironmentTests } from './environments';

export function registerBackendEndpointTests(): void {
	describe('Endpoints', () => {
		registerBackendEndpointEnvironmentTests();
	});
}
