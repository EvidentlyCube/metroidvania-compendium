import axios from 'axios';
import { SERVER_ADRESS } from '../common';

export async function singleApiRequestGet(endpoint: string, queryParams: Map<string, any>) {
	const endpointFullString = fullEndpointAddressCreator(endpoint, queryParams);
	try {
		const response = await axios.get(endpointFullString);
		if (typeof response.data === 'object' && response.data.error === null) {
			return response.data.data;
		} else {
			throw new Error('Invalid structure of the response. Response acquired from the server: ' + response);
		}
	} catch (error) {
		console.log(error);
		return null;
	}
}

function fullEndpointAddressCreator(endpoint: string, queryParams: Map<string, any>): string {
	let endpointFullString = SERVER_ADRESS + endpoint;
	if (queryParams.size !== 0) {
		endpointFullString += '?';
		for (const [key, value] of queryParams.entries()) {
			endpointFullString += key + '=' + value + '&';
		}
	}
	return endpointFullString;
}
