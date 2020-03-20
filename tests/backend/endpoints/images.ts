import 'mocha';
import { BackendTestConfig } from '../BackendTestConfig';
import { FakeEntityFactory } from '../_helpers/FakeEntityFactory';
import { ApiAssert } from '../_helpers/ApiAssert';
import { Image } from '../../../backend/database/entities/Image';

export function registerBackendEndpointImagesTests(): void {
	describe('/images', () => {
		it('Returns empty data when no models in the database', async () => {
			BackendTestConfig.mockDatabase.$mockFindManyBy(Image, {}, []);

			await ApiAssert.getResponse(`/images`, null, [], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Returns models from database', async () => {
			const expected = FakeEntityFactory.images(3);

			BackendTestConfig.mockDatabase.$mockFindManyBy(Image, {}, expected);
			await ApiAssert.getResponse('/images', null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by single ID', async () => {
			const expected = FakeEntityFactory.image();

			BackendTestConfig.mockDatabase.$mockFindManyBy(Image, { id: [expected.id.toString()] }, [expected]);

			await ApiAssert.getResponse(`/images?id=${expected.id}`, null, [expected], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Filters by many IDs', async () => {
			const expected = FakeEntityFactory.images(2);

			BackendTestConfig.mockDatabase.$mockFindManyBy(Image, { id: [expected[0].id.toString(), expected[1].id.toString()] }, expected);

			await ApiAssert.getResponse(`/images?id=${expected[0].id},${expected[1].id}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Error when id filter is not numeric', async () => {
			await ApiAssert.getResponse(`/images?id=text`, "Non-numeric value passed in 'id' query filter", null, 400);

			BackendTestConfig.mockDatabase.$teardown();
		});
	});

	describe('/images/:id', () => {
		it('Returns the specified image', async () => {
			const expected = FakeEntityFactory.image();
			BackendTestConfig.mockDatabase.$mockFindOneById(Image, expected.id, expected);

			await ApiAssert.getResponse(`/images/${expected.id}`, null, expected, 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Throws error when image does not exist', async () => {
			const expected = FakeEntityFactory.image();
			BackendTestConfig.mockDatabase.$mockFindOneById(Image, expected.id, undefined);

			await ApiAssert.getResponse(`/images/${expected.id}`, 'Model not found', null, 404);

			BackendTestConfig.mockDatabase.$teardown();
		});
	});
}
