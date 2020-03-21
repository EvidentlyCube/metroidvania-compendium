import 'mocha';
import { BackendTestConfig } from '../BackendTestConfig';
import { AbilityExample } from '../../../backend/database/entities/AbilityExample';
import { FakeEntityFactory } from '../_helpers/FakeEntityFactory';
import { ApiAssert } from '../_helpers/ApiAssert';
import { Image } from '../../../backend/database/entities/Image';

export function registerBackendEndpointAbilityExampleTests(): void {
	const categories = FakeEntityFactory.abilityCategories(1);
	const groups = FakeEntityFactory.abilityGroups(categories, 1);
	const abilities = FakeEntityFactory.abilities(groups, 3);
	const images: (Image | null)[] = FakeEntityFactory.images(3);
	images.push(null);
	const games = FakeEntityFactory.games(FakeEntityFactory.gameSeries(3), images, 3);

	describe('/ability-examples', () => {
		it('Returns empty data when no models in the database', async () => {
			BackendTestConfig.mockDatabase.$mockFindManyBy(AbilityExample, {}, []);

			await ApiAssert.getResponse(`/ability-examples`, null, [], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Returns models from database', async () => {
			const expected = FakeEntityFactory.abilityExamples(abilities, games, images, 3);
			BackendTestConfig.mockDatabase.$mockFindManyBy(AbilityExample, {}, expected);

			await ApiAssert.getResponse(`/ability-examples`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by single ID', async () => {
			const expected = FakeEntityFactory.abilityExample(abilities, games, images);

			BackendTestConfig.mockDatabase.$mockFindManyBy(AbilityExample, { id: [expected.id.toString()] }, [expected]);

			await ApiAssert.getResponse(`/ability-examples?id=${expected.id}`, null, [expected], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by many IDs', async () => {
			const expected = FakeEntityFactory.abilityExamples(abilities, games, images, 2);

			BackendTestConfig.mockDatabase.$mockFindManyBy(AbilityExample, { id: [expected[0].id.toString(), expected[1].id.toString()] }, expected);

			await ApiAssert.getResponse(`/ability-examples?id=${expected[0].id},${expected[1].id}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Error when id filter is not numeric', async () => {
			await ApiAssert.getResponse(`/ability-examples?id=text`, "Non-numeric value passed in 'id' query filter", null, 400);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by single ability ID', async () => {
			const expected = FakeEntityFactory.abilityExample(abilities, games, images);

			BackendTestConfig.mockDatabase.$mockFindManyBy(AbilityExample, { abilityId: [expected.abilityId.toString()] }, [expected]);

			await ApiAssert.getResponse(`/ability-examples?abilityId=${expected.abilityId}`, null, [expected], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by many ability IDs', async () => {
			const expected = FakeEntityFactory.abilityExamples(abilities, games, images, 2);

			BackendTestConfig.mockDatabase.$mockFindManyBy(
				AbilityExample,
				{ abilityId: [expected[0].abilityId.toString(), expected[1].abilityId.toString()] },
				expected
			);

			await ApiAssert.getResponse(`/ability-examples?abilityId=${expected[0].abilityId},${expected[1].abilityId}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Error when abilityId filter is not numeric', async () => {
			await ApiAssert.getResponse(`/ability-examples?abilityId=text`, "Non-numeric value passed in 'abilityId' query filter", null, 400);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by single game ID', async () => {
			const expected = FakeEntityFactory.abilityExample(abilities, games, images);

			BackendTestConfig.mockDatabase.$mockFindManyBy(AbilityExample, { gameId: [expected.gameId.toString()] }, [expected]);

			await ApiAssert.getResponse(`/ability-examples?gameId=${expected.gameId}`, null, [expected], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by many game IDs', async () => {
			const expected = FakeEntityFactory.abilityExamples(abilities, games, images, 2);

			BackendTestConfig.mockDatabase.$mockFindManyBy(
				AbilityExample,
				{ gameId: [expected[0].gameId.toString(), expected[1].gameId.toString()] },
				expected
			);

			await ApiAssert.getResponse(`/ability-examples?gameId=${expected[0].gameId},${expected[1].gameId}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Error when gameId filter is not numeric', async () => {
			await ApiAssert.getResponse(`/ability-examples?gameId=text`, "Non-numeric value passed in 'gameId' query filter", null, 400);

			BackendTestConfig.mockDatabase.$teardown();
		});
	});

	describe('/ability-examples/:id', () => {
		it('Returns the specified ability example', async () => {
			const expected = FakeEntityFactory.abilityExample(abilities, games, images);
			BackendTestConfig.mockDatabase.$mockFindOneById(AbilityExample, expected.id, expected);

			await ApiAssert.getResponse(`/ability-examples/${expected.id}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Throws error when ability example does not exist', async () => {
			BackendTestConfig.mockDatabase.$mockFindOneById(AbilityExample, 1, undefined);

			await ApiAssert.getResponse(`/ability-examples/1`, 'Model not found', null, 404);

			BackendTestConfig.mockDatabase.$teardown();
		});
	});
}
