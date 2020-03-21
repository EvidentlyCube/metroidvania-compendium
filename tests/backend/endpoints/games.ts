import 'mocha';
import { BackendTestConfig } from '../BackendTestConfig';
import { Game } from '../../../backend/database/entities/Game';
import { FakeEntityFactory } from '../_helpers/FakeEntityFactory';
import { ApiAssert } from '../_helpers/ApiAssert';
import { Image } from '../../../backend/database/entities/Image';

export function registerBackendEndpointGamesTests(): void {
	const series = FakeEntityFactory.gameSeries(3);
	const images: (Image | null)[] = FakeEntityFactory.images(3);
	images.push(null);

	describe('/games', () => {
		it('Returns empty data when no models in the database', async () => {
			BackendTestConfig.mockDatabase.$mockFindManyBy(Game, {}, []);

			await ApiAssert.getResponse(`/games`, null, [], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Returns models from database', async () => {
			const expected = FakeEntityFactory.games(series, images, 3);
			BackendTestConfig.mockDatabase.$mockFindManyBy(Game, {}, expected);

			await ApiAssert.getResponse(`/games`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by single ID', async () => {
			const expected = FakeEntityFactory.game(series, images);

			BackendTestConfig.mockDatabase.$mockFindManyBy(Game, { id: [expected.id.toString()] }, [expected]);

			await ApiAssert.getResponse(`/games?id=${expected.id}`, null, [expected], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by many IDs', async () => {
			const expected = FakeEntityFactory.games(series, images, 2);

			BackendTestConfig.mockDatabase.$mockFindManyBy(Game, { id: [expected[0].id.toString(), expected[1].id.toString()] }, expected);

			await ApiAssert.getResponse(`/games?id=${expected[0].id},${expected[1].id}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Error when id filter is not numeric', async () => {
			await ApiAssert.getResponse(`/games?id=text`, "Non-numeric value passed in 'id' query filter", null, 400);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by single series ID', async () => {
			const expected = FakeEntityFactory.game(series, images);

			BackendTestConfig.mockDatabase.$mockFindManyBy(Game, { seriesId: [expected.seriesId.toString()] }, [expected]);

			await ApiAssert.getResponse(`/games?seriesId=${expected.seriesId}`, null, [expected], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by many series IDs', async () => {
			const expected = FakeEntityFactory.games(series, images, 2);

			BackendTestConfig.mockDatabase.$mockFindManyBy(Game, { seriesId: [expected[0].seriesId.toString(), expected[1].seriesId.toString()] }, expected);

			await ApiAssert.getResponse(`/games?seriesId=${expected[0].seriesId},${expected[1].seriesId}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Error when seriesId filter is not numeric', async () => {
			await ApiAssert.getResponse(`/games?seriesId=text`, "Non-numeric value passed in 'seriesId' query filter", null, 400);

			BackendTestConfig.mockDatabase.$teardown();
		});
	});

	describe('/games/:id', () => {
		it('Returns the specified ability', async () => {
			const expected = FakeEntityFactory.game(series, images);
			BackendTestConfig.mockDatabase.$mockFindOneById(Game, expected.id, expected);

			await ApiAssert.getResponse(`/games/${expected.id}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Throws error when ability does not exist', async () => {
			const expected = FakeEntityFactory.game(series, images);
			BackendTestConfig.mockDatabase.$mockFindOneById(Game, expected.id, undefined);

			await ApiAssert.getResponse(`/games/${expected.id}`, 'Model not found', null, 404);

			BackendTestConfig.mockDatabase.$teardown();
		});
	});
}
