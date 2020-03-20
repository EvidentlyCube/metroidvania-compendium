import request from 'supertest';
import { BackendTestConfig } from '../BackendTestConfig';
import { assert } from 'chai';

interface ApiResponse {
	error: string | null;
	stacktrace: string | null;
	data: any | null;
}

export class ApiAssert {
	public static async getResponse(requestUrl: string, error: string | null, data: any, status: number): Promise<void> {
		const result = await request(BackendTestConfig.deps.server).get(requestUrl);

		assert.isTrue(isJson(result.text), `Response is not a valid json: ${result.text.substr(0, 256)}`);

		const resultJson = JSON.parse(result.text);
		assert.hasAllKeys(resultJson, ['error', 'stacktrace', 'data'], 'Response does not have required keys');

		const response = resultJson as ApiResponse;
		if (response.error && !error) {
			assert.fail(`No error expected but got this instead:\n${response.error}\n${response.stacktrace}`);
		}

		assert.equal(response.error, error, 'Error mismatch');
		assert.deepEqual(response.data, JSON.parse(JSON.stringify(data)), 'Data mismatch');

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
