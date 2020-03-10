import { AppStore, SET_BREADCRUMB, AppActions } from '../common';

export function breadcrumbReducer(state: AppStore, action: AppActions): AppStore {
	switch (action.type) {
		case SET_BREADCRUMB: {
			return {
				...state,
				headerBreadcrumb: action.headerBreadcrumb,
			};
		}
		default:
			return state;
	}
}
