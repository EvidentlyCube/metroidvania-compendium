import { AppStore, AppActions } from '../common';
import { breadcrumbReducer } from './breadcrumbReducer';
import { gameVisibilityReducer } from './gameVisibilityReducer';
import { downloadReducer } from './downloadReducer';
export function appReducer(state: AppStore, action: AppActions): AppStore {
	state = breadcrumbReducer(state, action);
	state = gameVisibilityReducer(state, action);
	state = downloadReducer(state, action);
	return state;
}
