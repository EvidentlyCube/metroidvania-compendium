// eslint-disable-next-line no-unused-vars
import {AppStore, SetBreadcrumbAction, SET_BREADCRUMB} from '../common';
const initialState: AppStore = {
	headerBreadcrumb: 'Home',
};
export function breadcrumbReducer(state = initialState, action: SetBreadcrumbAction): AppStore {
	switch (action.type) {
		case SET_BREADCRUMB: {
			return {
				...state,
				headerBreadcrumb: action.headerBreadcrumb || 'Home',
			};
		}
		default:
			return state;
	}
}
