//Until we use pageReducer it seems like esLint won't count PageState and UpdatePageAction as used
// eslint-disable-next-line no-unused-vars
import {AppStore, SetBreadcrumbAction, SET_BREADCRUMB} from '../common';
const initialState: AppStore = {
	headerBreadcrumb: 'Home',
};
export function breadcrumbReducer(state = initialState, action: SetBreadcrumbAction): AppStore {
	switch (action.type) {
		case SET_BREADCRUMB: {
			return {
				headerBreadcrumb: action.headerBreadcrumb || 'Home',
			};
		}
		default:
			return state;
	}
}
