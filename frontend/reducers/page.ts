//Until we use pageReducer it seems like esLint won't count PageState and UpdatePageAction as used
// eslint-disable-next-line no-unused-vars
import {PageState, UpdatePageAction, UPDATE_PAGE} from '../types';

const intialState: PageState = {
	pageName: 'Home',
};
export function pageReducer(state = intialState, action: UpdatePageAction): PageState {
	switch (action.type) {
		case UPDATE_PAGE: {
			return {
				pageName: action.payload.pageName,
			};
		}
		default:
			return state;
	}
}
