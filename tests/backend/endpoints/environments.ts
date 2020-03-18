import 'mocha';
import { BackendTestConfig } from '../BackendTestConfig';
import { Environment } from '../../../backend/database/entities/Environment';
import { FakeEntityFactory } from '../_helpers/FakeEntityFactory';
import { ApiAssert } from '../_helpers/ApiAssert';

export function registerBackendEndpointEnvironmentTests(): void {
	describe('/environments', () => {
		it('Returns empty data when no models in the database', async () => {
			BackendTestConfig.mockDatabase.$mockFindAll(Environment, []);

			await ApiAssert.getResponse(`/environments`, null, [], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Returns models from database', async () => {
			const expected = FakeEntityFactory.environments(3);
			BackendTestConfig.mockDatabase.$mockFindAll(Environment, expected);

			await ApiAssert.getResponse(`/environments`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});
	});

	describe('/environments/:id', () => {
		it('Returns the specified environment', async () => {
			const expected = FakeEntityFactory.environment();
			BackendTestConfig.mockDatabase.$mockFindOneById(Environment, expected.id, expected);

			await ApiAssert.getResponse(`/environments/${expected.id}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Throws error when environment does not exist', async () => {
			const expected = FakeEntityFactory.environment();
			BackendTestConfig.mockDatabase.$mockFindOneById(Environment, expected.id, undefined);

			await ApiAssert.getResponse(`/environments/${expected.id}`, 'Model not found', null, 404);

			BackendTestConfig.mockDatabase.$teardown();
		});
	});
}
