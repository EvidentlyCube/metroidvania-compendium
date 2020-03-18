import 'jest';
import { bootstrapApplication } from '../../backend/bootstrapApplication';
import { MockDatabase } from './_mocks/MockDatabase';
import { registerBackendEndpointTests } from './endpoints';
import { BackendTestConfig } from './BackendTestConfig';

BackendTestConfig.mockDatabase = new MockDatabase();

beforeAll(async () => {
	BackendTestConfig.deps = await bootstrapApplication({
		initializeDatabase: async () => BackendTestConfig.mockDatabase,
	});
});

registerBackendEndpointTests();

afterEach(async () => {
	BackendTestConfig.mockDatabase.$assertWasTeardownCalled();
});

afterAll(() => {
	console.log('Close server');
	BackendTestConfig.deps.server.close();
});
