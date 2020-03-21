import 'mocha';
import { BackendTestConfig } from '../BackendTestConfig';
import { GameLink } from '../../../backend/database/entities/GameLink';
import { FakeEntityFactory } from '../_helpers/FakeEntityFactory';
import { ApiAssert } from '../_helpers/ApiAssert';

export function registerBackendEndpointGameLinksTests(): void {
	const games = FakeEntityFactory.games(FakeEntityFactory.gameSeries(1), [null], 3);

	describe('/game-links', () => {
		it('Returns empty data when no models in the database', async () => {
			BackendTestConfig.mockDatabase.$mockFindManyBy(GameLink, {}, []);

			await ApiAssert.getResponse(`/game-links`, null, [], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Returns models from database', async () => {
			const expected = FakeEntityFactory.gameLinks(games, 3);
			BackendTestConfig.mockDatabase.$mockFindManyBy(GameLink, {}, expected);

			await ApiAssert.getResponse(`/game-links`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by single ID', async () => {
			const expected = FakeEntityFactory.gameLink(games);

			BackendTestConfig.mockDatabase.$mockFindManyBy(GameLink, { id: [expected.id.toString()] }, [expected]);

			await ApiAssert.getResponse(`/game-links?id=${expected.id}`, null, [expected], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by many IDs', async () => {
			const expected = FakeEntityFactory.gameLinks(games, 2);

			BackendTestConfig.mockDatabase.$mockFindManyBy(GameLink, { id: [expected[0].id.toString(), expected[1].id.toString()] }, expected);

			await ApiAssert.getResponse(`/game-links?id=${expected[0].id},${expected[1].id}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Error when id filter is not numeric', async () => {
			await ApiAssert.getResponse(`/game-links?id=text`, "Non-numeric value passed in 'id' query filter", null, 400);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by single series ID', async () => {
			const expected = FakeEntityFactory.gameLink(games);

			BackendTestConfig.mockDatabase.$mockFindManyBy(GameLink, { gameId: [expected.gameId.toString()] }, [expected]);

			await ApiAssert.getResponse(`/game-links?gameId=${expected.gameId}`, null, [expected], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by many series IDs', async () => {
			const expected = FakeEntityFactory.gameLinks(games, 2);

			BackendTestConfig.mockDatabase.$mockFindManyBy(GameLink, { gameId: [expected[0].gameId.toString(), expected[1].gameId.toString()] }, expected);

			await ApiAssert.getResponse(`/game-links?gameId=${expected[0].gameId},${expected[1].gameId}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Error when gameId filter is not numeric', async () => {
			await ApiAssert.getResponse(`/game-links?gameId=text`, "Non-numeric value passed in 'gameId' query filter", null, 400);

			BackendTestConfig.mockDatabase.$teardown();
		});
	});

	describe('/game-links/:id', () => {
		it('Returns the specified ability', async () => {
			const expected = FakeEntityFactory.gameLink(games);
			BackendTestConfig.mockDatabase.$mockFindOneById(GameLink, expected.id, expected);

			await ApiAssert.getResponse(`/game-links/${expected.id}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Throws error when ability does not exist', async () => {
			const expected = FakeEntityFactory.gameLink(games);
			BackendTestConfig.mockDatabase.$mockFindOneById(GameLink, expected.id, undefined);

			await ApiAssert.getResponse(`/game-links/${expected.id}`, 'Model not found', null, 404);

			BackendTestConfig.mockDatabase.$teardown();
		});
	});
}
