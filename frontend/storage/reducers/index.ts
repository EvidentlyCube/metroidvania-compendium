// eslint-disable-next-line no-unused-vars
import { AppStore, AppActions} from '../common';
import { breadcrumbReducer } from './breadcrumbReducer';
import { gameVisibilityReducer } from './gameVisibilityReducer';
export function appReducer(
	state: AppStore,
	action: AppActions,
): AppStore {
	state = breadcrumbReducer(state, action);
	state = gameVisibilityReducer(state, action);
	return state;
}
