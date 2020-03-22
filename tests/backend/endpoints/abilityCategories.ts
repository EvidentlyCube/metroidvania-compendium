import 'mocha';
import { BackendTestConfig } from '../BackendTestConfig';
import { AbilityCategory } from '../../../backend/database/entities/AbilityCategory';
import { FakeEntityFactory } from '../_helpers/FakeEntityFactory';
import { ApiAssert } from '../_helpers/ApiAssert';

export function registerBackendEndpointAbilityCategoryTests(): void {
	describe('/ability-categories', () => {
		it('Returns empty data when no models in the database', async () => {
			BackendTestConfig.mockDatabase.$mockFindManyBy(AbilityCategory, {}, []);

			await ApiAssert.getResponse(`/ability-categories`, null, [], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Returns models from database', async () => {
			const expected = FakeEntityFactory.abilityCategories(3);
			BackendTestConfig.mockDatabase.$mockFindManyBy(AbilityCategory, {}, expected);

			await ApiAssert.getResponse(`/ability-categories`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by single ID', async () => {
			const expected = FakeEntityFactory.abilityCategory();

			BackendTestConfig.mockDatabase.$mockFindManyBy(AbilityCategory, { id: [expected.id.toString()] }, [expected]);

			await ApiAssert.getResponse(`/ability-categories?id=${expected.id}`, null, [expected], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by many IDs', async () => {
			const expected = FakeEntityFactory.abilityCategories(2);

			BackendTestConfig.mockDatabase.$mockFindManyBy(AbilityCategory, { id: [expected[0].id.toString(), expected[1].id.toString()] }, expected);

			await ApiAssert.getResponse(`/ability-categories?id=${expected[0].id},${expected[1].id}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Error when id filter is not numeric', async () => {
			await ApiAssert.getResponse(`/ability-categories?id=text`, "Non-numeric value passed in 'id' query filter", null, 400);

			BackendTestConfig.mockDatabase.$teardown();
		});
	});

	describe('/ability-categories/:id', () => {
		it('Returns the specified ability', async () => {
			const expected = FakeEntityFactory.abilityCategory();
			BackendTestConfig.mockDatabase.$mockFindOneById(AbilityCategory, expected.id, expected);

			await ApiAssert.getResponse(`/ability-categories/${expected.id}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Throws error when ability does not exist', async () => {
			const expected = FakeEntityFactory.abilityCategory();
			BackendTestConfig.mockDatabase.$mockFindOneById(AbilityCategory, expected.id, undefined);

			await ApiAssert.getResponse(`/ability-categories/${expected.id}`, 'Model not found', null, 404);

			BackendTestConfig.mockDatabase.$teardown();
		});
	});
}
