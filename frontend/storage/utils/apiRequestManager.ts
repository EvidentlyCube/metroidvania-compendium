import axios from 'axios';
import { SERVER_ADRESS } from '../common';

export async function apiRequestGet(endpoint: string, queryParams: { [key: string]: any }) {
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
		console.log(error);
		return null;
	}
}

function createApiRequestUrl(endpoint: string, queryParams: { [key: string]: any }): string {
	let endpointFullString = SERVER_ADRESS + endpoint + '?';
	for (const key in queryParams) {
		endpointFullString += key + '=';
		if (Array.isArray(queryParams[key])) {
			endpointFullString += queryParams[key].join(',');
		} else {
			endpointFullString += queryParams[key];
		}
		endpointFullString += '&';
	}
	return endpointFullString;
}
