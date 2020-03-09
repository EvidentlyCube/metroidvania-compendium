// eslint-disable-next-line no-unused-vars
import { AppStore, AppActions} from '../common';
import { breadcrumbReducer } from './breadcrumbReducer';
import { gameSpoilersReducer } from './gameSpoilersReducer';
export function appReducer(
	state: AppStore | undefined,
	action: AppActions,
): AppStore {
	state = breadcrumbReducer(state, action);
	state = gameSpoilersReducer(state, action);
	return state;
}
