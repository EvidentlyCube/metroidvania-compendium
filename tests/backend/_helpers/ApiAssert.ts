import request from 'supertest';
import { BackendTestConfig } from '../BackendTestConfig';
import { assert } from 'chai';

export class ApiAssert {
	public static async getResponse(requestUrl: string, error: string | null, data: any, status: number): Promise<void> {
		const result = await request(BackendTestConfig.deps.express).get(requestUrl);

		assert.isTrue(isJson(result.text), 'Response is not a valid json.');

		const resultJson = JSON.parse(result.text);
		assert.hasAllKeys(resultJson, ['error', 'data'], 'Response does not have required keys');

		assert.equal(resultJson.error, error, 'Error mismatch');
		assert.deepEqual(resultJson.data, JSON.parse(JSON.stringify(data)), 'Data mismatch');

		assert.equal(result.status, status, 'Response status mismatch');
	}
}

function isJson(str: string): boolean {
	try {
		JSON.parse(str);
		return true;
	} catch (e) {
		return false;
	}
}
