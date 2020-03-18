import 'mocha';
import { BackendTestConfig } from '../BackendTestConfig';
import { FakeEntityFactory } from '../_helpers/FakeEntityFactory';
import { Image } from '../../../backend/database/entities/Image';
import { ApiAssert } from '../_helpers/ApiAssert';

export function registerBackendEndpointImagesTests(): void {
	describe('/images', () => {
		it('Returns empty data when no models in the database', async () => {
			BackendTestConfig.mockDatabase.$mockFindAll(Image, []);

			await ApiAssert.getResponse(`/images`, null, [], 200);

			BackendTestConfig.mockDatabase.$teardown();
		});

		it('Returns models from database', async () => {
			const expected = FakeEntityFactory.images(3);

			BackendTestConfig.mockDatabase.$mockFindAll(Image, expected);
			await ApiAssert.getResponse('/images', null, expected, 200);

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
