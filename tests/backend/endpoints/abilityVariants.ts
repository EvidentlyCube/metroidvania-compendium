import 'mocha';
import { BackendTestConfig } from '../BackendTestConfig';
import { AbilityVariant } from '../../../backend/database/entities/AbilityVariant';
import { FakeEntityFactory } from '../_helpers/FakeEntityFactory';
import { ApiAssert } from '../_helpers/ApiAssert';

export function registerBackendEndpointAbilityVariantTests(): void {
	const categories = FakeEntityFactory.abilityCategories(1);
	const groups = FakeEntityFactory.abilityGroups(categories, 1);
	const abilities = FakeEntityFactory.abilities(groups, 3);

	describe('/ability-variants', () => {
		it('Returns empty data when no models in the database', async () => {
			BackendTestConfig.mockDatabase.$mockFindManyBy(AbilityVariant, {}, []);

			await ApiAssert.getResponse(`/ability-variants`, null, [], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Returns models from database', async () => {
			const expected = FakeEntityFactory.abilityVariants(abilities, 3);
			BackendTestConfig.mockDatabase.$mockFindManyBy(AbilityVariant, {}, expected);

			await ApiAssert.getResponse(`/ability-variants`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by single ID', async () => {
			const expected = FakeEntityFactory.abilityVariant(abilities);

			BackendTestConfig.mockDatabase.$mockFindManyBy(AbilityVariant, { id: [expected.id.toString()] }, [expected]);

			await ApiAssert.getResponse(`/ability-variants?id=${expected.id}`, null, [expected], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by many IDs', async () => {
			const expected = FakeEntityFactory.abilityVariants(abilities, 2);

			BackendTestConfig.mockDatabase.$mockFindManyBy(AbilityVariant, { id: [expected[0].id.toString(), expected[1].id.toString()] }, expected);

			await ApiAssert.getResponse(`/ability-variants?id=${expected[0].id},${expected[1].id}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Error when id filter is not numeric', async () => {
			await ApiAssert.getResponse(`/ability-variants?id=text`, "Non-numeric value passed in 'id' query filter", null, 400);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by single ability ID', async () => {
			const expected = FakeEntityFactory.abilityVariant(abilities);

			BackendTestConfig.mockDatabase.$mockFindManyBy(AbilityVariant, { abilityId: [expected.abilityId.toString()] }, [expected]);

			await ApiAssert.getResponse(`/ability-variants?abilityId=${expected.abilityId}`, null, [expected], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by many ability IDs', async () => {
			const expected = FakeEntityFactory.abilityVariants(abilities, 2);

			BackendTestConfig.mockDatabase.$mockFindManyBy(
				AbilityVariant,
				{ abilityId: [expected[0].abilityId.toString(), expected[1].abilityId.toString()] },
				expected
			);

			await ApiAssert.getResponse(`/ability-variants?abilityId=${expected[0].abilityId},${expected[1].abilityId}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Error when abilityId filter is not numeric', async () => {
			await ApiAssert.getResponse(`/ability-variants?abilityId=text`, "Non-numeric value passed in 'abilityId' query filter", null, 400);

			BackendTestConfig.mockDatabase.$teardown();
		});
	});

	describe('/ability-variants/:id', () => {
		it('Returns the specified ability', async () => {
			const expected = FakeEntityFactory.abilityVariant(abilities);
			BackendTestConfig.mockDatabase.$mockFindOneById(AbilityVariant, expected.id, expected);

			await ApiAssert.getResponse(`/ability-variants/${expected.id}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Throws error when ability does not exist', async () => {
			BackendTestConfig.mockDatabase.$mockFindOneById(AbilityVariant, 1, undefined);

			await ApiAssert.getResponse(`/ability-variants/1`, 'Model not found', null, 404);

			BackendTestConfig.mockDatabase.$teardown();
		});
	});
}
