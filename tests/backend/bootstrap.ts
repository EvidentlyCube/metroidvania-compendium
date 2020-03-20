import 'mocha';
import { bootstrapApplication } from '../../backend/bootstrapApplication';
import { MockDatabase } from './_helpers/MockDatabase';
import { registerBackendEndpointTests } from './endpoints';
import { BackendTestConfig } from './BackendTestConfig';

BackendTestConfig.mockDatabase = new MockDatabase();

before(async () => {
	BackendTestConfig.deps = await bootstrapApplication({
		initializeDatabase: async () => BackendTestConfig.mockDatabase,
	});
});

registerBackendEndpointTests();

// Can't be arrow function to allow `this` binding
afterEach(async function() {
	if ((this as any).currentTest.state === 'failed') {
		try {
			BackendTestConfig.mockDatabase.$teardown();
		} catch (e) {
			// Ignore
		}
	}
	BackendTestConfig.mockDatabase.$assertWasTeardownCalled();
});

after(() => {
	console.log('Close server');
	BackendTestConfig.deps.server.close();
});
