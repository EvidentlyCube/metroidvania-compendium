import 'mocha';
import request from 'supertest';
import { BackendTestConfig } from '../BackendTestConfig';
import { Environment } from '../../../backend/database/entities/Environment';
import { FakeEntityFactory } from '../_mocks/FakeEntityFactory';
import { assert } from 'chai';

export function registerBackendEndpointEnvironmentTests(): void {
	describe('/environments', () => {
		it('Returns empty data when no models in the database', async () => {
			BackendTestConfig.mockDatabase.$mockFindAll(Environment, []);
			const result = await request(BackendTestConfig.deps.express).get('/environments');

			assert.deepEqual(
				result.text,
				JSON.stringify({
					error: null,
					data: [],
				})
			);
			assert.equal(result.status, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Returns models from database', async () => {
			const environments: Environment[] = FakeEntityFactory.environments(3);

			BackendTestConfig.mockDatabase.$mockFindAll(Environment, environments);
			const result = await request(BackendTestConfig.deps.express).get('/environments');

			assert.deepEqual(
				result.text,
				JSON.stringify({
					error: null,
					data: environments,
				})
			);
			assert.equal(result.status, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});
	});

	describe('/environments/:id', () => {
		it('Returns the specified environment', async () => {
			const expected = FakeEntityFactory.environment();
			BackendTestConfig.mockDatabase.$mockFindOneById(Environment, expected.id, expected);
			const result = await request(BackendTestConfig.deps.express).get(`/environments/${expected.id}`);

			assert.deepEqual(
				result.text,
				JSON.stringify({
					error: null,
					data: expected,
				})
			);
			assert.equal(result.status, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Throws error when environment does not exist', async () => {
			const expected = FakeEntityFactory.environment();
			BackendTestConfig.mockDatabase.$mockFindOneById(Environment, expected.id, undefined);
			const result = await request(BackendTestConfig.deps.express).get(`/environments/${expected.id}`);

			assert.deepEqual(
				result.text,
				JSON.stringify({
					error: 'Model not found',
					data: null,
				})
			);
			assert.equal(result.status, 404);

			BackendTestConfig.mockDatabase.$teardown();
		});
	});
}
