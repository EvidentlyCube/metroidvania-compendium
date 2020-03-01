//Until we use pageReducer it seems like esLint won't count PageState and UpdatePageAction as used
// eslint-disable-next-line no-unused-vars
import {Breadcrumb, SetBreadcrumbAction, SET_BREADCRUMB} from '../common';
const initialState: Breadcrumb = {
	pageName: 'Home',
};
export function breadcrumbReducer(state = initialState, action: SetBreadcrumbAction): Breadcrumb {
	switch (action.type) {
		case SET_BREADCRUMB: {
			return {
				pageName: action.payload.pageName ? action.payload.pageName : 'Home',
			};
		}
		default:
			return state;
	}
}
