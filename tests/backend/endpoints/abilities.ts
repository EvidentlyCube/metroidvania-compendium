import 'mocha';
import { BackendTestConfig } from '../BackendTestConfig';
import { Ability } from '../../../backend/database/entities/Ability';
import { FakeEntityFactory } from '../_helpers/FakeEntityFactory';
import { ApiAssert } from '../_helpers/ApiAssert';

export function registerBackendEndpointAbilityTests(): void {
	const categoryIds = FakeEntityFactory.abilityCategories(3).map(category => category.id);
	const groupIds = FakeEntityFactory.abilityGroups(categoryIds, 12).map(group => group.id);

	describe('/abilities', () => {
		it('Returns empty data when no models in the database', async () => {
			BackendTestConfig.mockDatabase.$mockFindManyBy(Ability, {}, []);

			await ApiAssert.getResponse(`/abilities`, null, [], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Returns models from database', async () => {
			const expected = FakeEntityFactory.abilities(groupIds, 3);
			BackendTestConfig.mockDatabase.$mockFindManyBy(Ability, {}, expected);

			await ApiAssert.getResponse(`/abilities`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by single ID', async () => {
			const expected = FakeEntityFactory.ability(groupIds);

			BackendTestConfig.mockDatabase.$mockFindManyBy(Ability, { id: [expected.id.toString()] }, [expected]);

			await ApiAssert.getResponse(`/abilities?id=${expected.id}`, null, [expected], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by many IDs', async () => {
			const expected = FakeEntityFactory.abilities(groupIds, 2);

			BackendTestConfig.mockDatabase.$mockFindManyBy(Ability, { id: [expected[0].id.toString(), expected[1].id.toString()] }, expected);

			await ApiAssert.getResponse(`/abilities?id=${expected[0].id},${expected[1].id}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Error when id filter is not numeric', async () => {
			await ApiAssert.getResponse(`/abilities?id=text`, "Non-numeric value passed in 'id' query filter", null, 400);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by single group ID', async () => {
			const expected = FakeEntityFactory.ability(groupIds);

			BackendTestConfig.mockDatabase.$mockFindManyBy(Ability, { groupId: [expected.groupId.toString()] }, [expected]);

			await ApiAssert.getResponse(`/abilities?groupId=${expected.groupId}`, null, [expected], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by many group IDs', async () => {
			const expected = FakeEntityFactory.abilities(groupIds, 2);

			BackendTestConfig.mockDatabase.$mockFindManyBy(Ability, { groupId: [expected[0].groupId.toString(), expected[1].groupId.toString()] }, expected);

			await ApiAssert.getResponse(`/abilities?groupId=${expected[0].groupId},${expected[1].groupId}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Error when groupId filter is not numeric', async () => {
			await ApiAssert.getResponse(`/abilities?groupId=text`, "Non-numeric value passed in 'groupId' query filter", null, 400);

			BackendTestConfig.mockDatabase.$teardown();
		});
	});

	describe('/abilities/:id', () => {
		it('Returns the specified ability', async () => {
			const expected = FakeEntityFactory.ability(groupIds);
			BackendTestConfig.mockDatabase.$mockFindOneById(Ability, expected.id, expected);

			await ApiAssert.getResponse(`/abilities/${expected.id}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Throws error when ability does not exist', async () => {
			BackendTestConfig.mockDatabase.$mockFindOneById(Ability, 1, undefined);

			await ApiAssert.getResponse(`/abilities/1`, 'Model not found', null, 404);

			BackendTestConfig.mockDatabase.$teardown();
		});
	});
}
