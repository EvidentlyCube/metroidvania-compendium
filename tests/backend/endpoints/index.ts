import 'mocha';
import { registerBackendEndpointEnvironmentTests } from './environments';
import { registerBackendEndpointImagesTests } from './images';

export function registerBackendEndpointTests(): void {
	describe('Endpoints', () => {
		registerBackendEndpointEnvironmentTests();
		registerBackendEndpointImagesTests();
	});
}
