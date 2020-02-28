//Until we use sendPage it seems like esLint won't count PageState and UpdatePageAction as used
// eslint-disable-next-line no-unused-vars
import {UPDATE_PAGE, UpdatePageAction, PageState} from '../types';
export function sendPage(newState: PageState): UpdatePageAction {
	return {
		type: UPDATE_PAGE,
		payload: newState,
	};
}
