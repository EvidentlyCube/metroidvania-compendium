import axios from 'axios';
const config = require('../../../config/config.js');
import { Dictionary } from '../../../common/types';

export const ApiRequests = {
	get: async function<T>(endpoint: string, queryParams: Dictionary): Promise<T> {
		const endpointFullString = createApiRequestUrl(endpoint, queryParams);
		try {
			const { data } = await axios.get(endpointFullString);
			if (typeof data !== 'object') {
				throw new Error('Response was not an object. Response acquired from the server: ' + data);
			} else if (data.error !== null) {
				throw new Error(data.error);
			} else {
				return data.data;
			}
		} catch (error) {
			throw new Error(error);
		}
	},
};

function createApiRequestUrl(endpoint: string, queryParams: Dictionary): string {
	let endpointFullString = config.apiUrl + endpoint;
	const keysArray = Object.keys(queryParams);
	if (keysArray.length > 0) {
		endpointFullString += '?' + keysArray.map(key => `${key}=${queryParams[key]}`).join('&');
	}
	return endpointFullString;
}
