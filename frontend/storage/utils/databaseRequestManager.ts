import axios, { AxiosResponse } from 'axios';
import { SERVER_ADRESS } from '../common';

export async function singleDatabaseRequest(endpoint: string, queryParams: Map<string, any>) {
	let endpointFullString = SERVER_ADRESS + endpoint;
	if (queryParams.size !== 0) {
		endpointFullString += '?';
		for (const [key, value] of queryParams.entries()) {
			endpointFullString += key + '=' + value + '&';
		}
	}
	const response = await axios.get(endpointFullString).catch(function(error) {
		console.log(error);
		return null;
	});
	if (response) {
		return response;
	}
}
export async function multiDatabaseRequest(endpointsArray: Array<String>, queryParamsArray: Array<Map<string, any>>) {
	const requestsArray: Promise<AxiosResponse<any>>[] = [];
	for (let i = 0; i < endpointsArray.length; i++) {
		let endpointFullString = SERVER_ADRESS + endpointsArray[i];
		if (queryParamsArray[i].size !== 0) {
			endpointFullString += '?';
			for (const [key, value] of queryParamsArray[i].entries()) {
				endpointFullString += key + '=' + value + '&';
			}
		}
		requestsArray.push(axios.get(endpointFullString));
	}
	const responseArray = await axios.all(requestsArray).catch(function(error) {
		console.log(error);
		return null;
	});
	if (responseArray) {
		return responseArray;
	}
}
