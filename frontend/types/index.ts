export const UPDATE_PAGE = 'UPDATE_PAGE';
export interface PageState {
	pageName: string;
}
export interface UpdatePageAction{
	type: typeof UPDATE_PAGE;
	payload: PageState;
}

