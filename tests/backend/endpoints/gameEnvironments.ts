import 'mocha';
import { BackendTestConfig } from '../BackendTestConfig';
import { GameEnvironment } from '../../../backend/database/entities/GameEnvironment';
import { FakeEntityFactory } from '../_helpers/FakeEntityFactory';
import { ApiAssert } from '../_helpers/ApiAssert';
import { Image } from '../../../backend/database/entities/Image';

export function registerBackendEndpointGameEnvironmentTests(): void {
	const images: (Image | null)[] = FakeEntityFactory.images(3);
	images.push(null);
	const games = FakeEntityFactory.games(FakeEntityFactory.gameSeries(3), images, 3);
	const environments = FakeEntityFactory.environments(3);

	describe('/game-environments', () => {
		it('Returns empty data when no models in the database', async () => {
			BackendTestConfig.mockDatabase.$mockFindManyBy(GameEnvironment, {}, []);

			await ApiAssert.getResponse(`/game-environments`, null, [], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Returns models from database', async () => {
			const expected = FakeEntityFactory.gameEnvironments(games, environments, 3);
			BackendTestConfig.mockDatabase.$mockFindManyBy(GameEnvironment, {}, expected);

			await ApiAssert.getResponse(`/game-environments`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by single ID', async () => {
			const expected = FakeEntityFactory.gameEnvironment(games, environments);

			BackendTestConfig.mockDatabase.$mockFindManyBy(GameEnvironment, { id: [expected.id.toString()] }, [expected]);

			await ApiAssert.getResponse(`/game-environments?id=${expected.id}`, null, [expected], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by many IDs', async () => {
			const expected = FakeEntityFactory.gameEnvironments(games, environments, 2);

			BackendTestConfig.mockDatabase.$mockFindManyBy(GameEnvironment, { id: [expected[0].id.toString(), expected[1].id.toString()] }, expected);

			await ApiAssert.getResponse(`/game-environments?id=${expected[0].id},${expected[1].id}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Error when id filter is not numeric', async () => {
			await ApiAssert.getResponse(`/game-environments?id=text`, "Non-numeric value passed in 'id' query filter", null, 400);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by single environment ID', async () => {
			const expected = FakeEntityFactory.gameEnvironment(games, environments);

			BackendTestConfig.mockDatabase.$mockFindManyBy(GameEnvironment, { environmentId: [expected.environmentId.toString()] }, [expected]);

			await ApiAssert.getResponse(`/game-environments?environmentId=${expected.environmentId}`, null, [expected], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by many environment IDs', async () => {
			const expected = FakeEntityFactory.gameEnvironments(games, environments, 2);

			BackendTestConfig.mockDatabase.$mockFindManyBy(
				GameEnvironment,
				{ environmentId: [expected[0].environmentId.toString(), expected[1].environmentId.toString()] },
				expected
			);

			await ApiAssert.getResponse(`/game-environments?environmentId=${expected[0].environmentId},${expected[1].environmentId}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Error when environmentId filter is not numeric', async () => {
			await ApiAssert.getResponse(`/game-environments?environmentId=text`, "Non-numeric value passed in 'environmentId' query filter", null, 400);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by single game ID', async () => {
			const expected = FakeEntityFactory.gameEnvironment(games, environments);

			BackendTestConfig.mockDatabase.$mockFindManyBy(GameEnvironment, { gameId: [expected.gameId.toString()] }, [expected]);

			await ApiAssert.getResponse(`/game-environments?gameId=${expected.gameId}`, null, [expected], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by many game IDs', async () => {
			const expected = FakeEntityFactory.gameEnvironments(games, environments, 2);

			BackendTestConfig.mockDatabase.$mockFindManyBy(
				GameEnvironment,
				{ gameId: [expected[0].gameId.toString(), expected[1].gameId.toString()] },
				expected
			);

			await ApiAssert.getResponse(`/game-environments?gameId=${expected[0].gameId},${expected[1].gameId}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Error when gameId filter is not numeric', async () => {
			await ApiAssert.getResponse(`/game-environments?gameId=text`, "Non-numeric value passed in 'gameId' query filter", null, 400);

			BackendTestConfig.mockDatabase.$teardown();
		});
	});

	describe('/game-environments/:id', () => {
		it('Returns the specified game environment', async () => {
			const expected = FakeEntityFactory.gameEnvironment(games, environments);
			BackendTestConfig.mockDatabase.$mockFindOneById(GameEnvironment, expected.id, expected);

			await ApiAssert.getResponse(`/game-environments/${expected.id}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Throws error when game environment does not exist', async () => {
			BackendTestConfig.mockDatabase.$mockFindOneById(GameEnvironment, 1, undefined);

			await ApiAssert.getResponse(`/game-environments/1`, 'Model not found', null, 404);

			BackendTestConfig.mockDatabase.$teardown();
		});
	});
}
