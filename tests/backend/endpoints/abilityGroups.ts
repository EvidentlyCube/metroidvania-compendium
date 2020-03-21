import 'mocha';
import { BackendTestConfig } from '../BackendTestConfig';
import { AbilityGroup } from '../../../backend/database/entities/AbilityGroup';
import { FakeEntityFactory } from '../_helpers/FakeEntityFactory';
import { ApiAssert } from '../_helpers/ApiAssert';

export function registerBackendEndpointAbilityGroupsTests(): void {
	const categoryIds = FakeEntityFactory.abilityCategories(3).map(category => category.id);

	describe('/ability-groups', () => {
		it('Returns empty data when no models in the database', async () => {
			BackendTestConfig.mockDatabase.$mockFindManyBy(AbilityGroup, {}, []);

			await ApiAssert.getResponse(`/ability-groups`, null, [], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Returns models from database', async () => {
			const expected = FakeEntityFactory.abilityGroups(categoryIds, 3);
			BackendTestConfig.mockDatabase.$mockFindManyBy(AbilityGroup, {}, expected);

			await ApiAssert.getResponse(`/ability-groups`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by single ID', async () => {
			const expected = FakeEntityFactory.abilityGroup(categoryIds);

			BackendTestConfig.mockDatabase.$mockFindManyBy(AbilityGroup, { id: [expected.id.toString()] }, [expected]);

			await ApiAssert.getResponse(`/ability-groups?id=${expected.id}`, null, [expected], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by many IDs', async () => {
			const expected = FakeEntityFactory.abilityGroups(categoryIds, 2);

			BackendTestConfig.mockDatabase.$mockFindManyBy(AbilityGroup, { id: [expected[0].id.toString(), expected[1].id.toString()] }, expected);

			await ApiAssert.getResponse(`/ability-groups?id=${expected[0].id},${expected[1].id}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Error when id filter is not numeric', async () => {
			await ApiAssert.getResponse(`/ability-groups?id=text`, "Non-numeric value passed in 'id' query filter", null, 400);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by single category ID', async () => {
			const expected = FakeEntityFactory.abilityGroup(categoryIds);

			BackendTestConfig.mockDatabase.$mockFindManyBy(AbilityGroup, { categoryId: [expected.categoryId.toString()] }, [expected]);

			await ApiAssert.getResponse(`/ability-groups?categoryId=${expected.categoryId}`, null, [expected], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by many category IDs', async () => {
			const expected = FakeEntityFactory.abilityGroups(categoryIds, 2);

			BackendTestConfig.mockDatabase.$mockFindManyBy(
				AbilityGroup,
				{ categoryId: [expected[0].categoryId.toString(), expected[1].categoryId.toString()] },
				expected
			);

			await ApiAssert.getResponse(`/ability-groups?categoryId=${expected[0].categoryId},${expected[1].categoryId}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Error when categoryId filter is not numeric', async () => {
			await ApiAssert.getResponse(`/ability-groups?categoryId=text`, "Non-numeric value passed in 'categoryId' query filter", null, 400);

			BackendTestConfig.mockDatabase.$teardown();
		});
	});

	describe('/ability-groups/:id', () => {
		it('Returns the specified ability', async () => {
			const expected = FakeEntityFactory.abilityGroup(categoryIds);
			BackendTestConfig.mockDatabase.$mockFindOneById(AbilityGroup, expected.id, expected);

			await ApiAssert.getResponse(`/ability-groups/${expected.id}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Throws error when ability does not exist', async () => {
			const expected = FakeEntityFactory.abilityGroup(categoryIds);
			BackendTestConfig.mockDatabase.$mockFindOneById(AbilityGroup, expected.id, undefined);

			await ApiAssert.getResponse(`/ability-groups/${expected.id}`, 'Model not found', null, 404);

			BackendTestConfig.mockDatabase.$teardown();
		});
	});
}
