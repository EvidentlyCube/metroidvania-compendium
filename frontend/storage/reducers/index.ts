import { AppStore, AppActions } from '../common';
import { breadcrumbReducer } from './breadcrumbReducer';
import { gameVisibilityReducer } from './gameVisibilityReducer';
import { dataLoadReducer } from './dataLoadReducer';
export function appReducer(state: AppStore, action: AppActions): AppStore {
	state = breadcrumbReducer(state, action);
	state = gameVisibilityReducer(state, action);
	state = dataLoadReducer(state, action);
	return state;
}
