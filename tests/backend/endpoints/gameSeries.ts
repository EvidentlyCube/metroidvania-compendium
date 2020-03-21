import 'mocha';
import { BackendTestConfig } from '../BackendTestConfig';
import { GameSeries } from '../../../backend/database/entities/GameSeries';
import { FakeEntityFactory } from '../_helpers/FakeEntityFactory';
import { ApiAssert } from '../_helpers/ApiAssert';

export function registerBackendEndpointGameSeriesTests(): void {
	describe('/game-series', () => {
		it('Returns empty data when no models in the database', async () => {
			BackendTestConfig.mockDatabase.$mockFindManyBy(GameSeries, {}, []);

			await ApiAssert.getResponse(`/game-series`, null, [], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Returns models from database', async () => {
			const expected = FakeEntityFactory.gameSeries(3);
			BackendTestConfig.mockDatabase.$mockFindManyBy(GameSeries, {}, expected);

			await ApiAssert.getResponse(`/game-series`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by single ID', async () => {
			const expected = FakeEntityFactory.gameSerie();

			BackendTestConfig.mockDatabase.$mockFindManyBy(GameSeries, { id: [expected.id.toString()] }, [expected]);

			await ApiAssert.getResponse(`/game-series?id=${expected.id}`, null, [expected], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by many IDs', async () => {
			const expected = FakeEntityFactory.gameSeries(2);

			BackendTestConfig.mockDatabase.$mockFindManyBy(GameSeries, { id: [expected[0].id.toString(), expected[1].id.toString()] }, expected);

			await ApiAssert.getResponse(`/game-series?id=${expected[0].id},${expected[1].id}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Error when id filter is not numeric', async () => {
			await ApiAssert.getResponse(`/game-series?id=text`, "Non-numeric value passed in 'id' query filter", null, 400);

			BackendTestConfig.mockDatabase.$teardown();
		});
	});

	describe('/game-series/:id', () => {
		it('Returns the specified gameSerie', async () => {
			const expected = FakeEntityFactory.gameSerie();
			BackendTestConfig.mockDatabase.$mockFindOneById(GameSeries, expected.id, expected);

			await ApiAssert.getResponse(`/game-series/${expected.id}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Throws error when gameSerie does not exist', async () => {
			BackendTestConfig.mockDatabase.$mockFindOneById(GameSeries, 1, undefined);

			await ApiAssert.getResponse(`/game-series/1`, 'Model not found', null, 404);

			BackendTestConfig.mockDatabase.$teardown();
		});
	});
}
