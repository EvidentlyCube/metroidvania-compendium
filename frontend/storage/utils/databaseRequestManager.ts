import axios, { AxiosResponse } from 'axios';
import { SERVER_ADRESS } from '../common';

export async function singleDatabaseRequest(endpointDetails: string) {
	const response = await axios.get(SERVER_ADRESS + endpointDetails).catch(function(error) {
		console.log(error);
		return null;
	});
	if (response) {
		return response;
	}
}
export async function multiDatabaseRequest(endpointDetailsArray: Array<String>) {
	const requestsArray: Promise<AxiosResponse<any>>[] = [];
	for (const endpointDetails of endpointDetailsArray) {
		requestsArray.push(axios.get(SERVER_ADRESS + endpointDetails));
	}
	const responseArray = await axios.all(requestsArray).catch(function(error) {
		console.log(error);
		return null;
	});
	if (responseArray) {
		return responseArray;
	}
}
