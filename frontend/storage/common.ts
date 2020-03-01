export const SET_BREADCRUMB = 'SET_BREADCRUMB';

export interface Breadcrumb {
	pageName: string;
}
export interface SetBreadcrumbAction{
	type: typeof SET_BREADCRUMB;
	payload: Breadcrumb;
}
export const BreadcrumbActions = {
	setBreadcrumb: function(breadcrumbState: Breadcrumb): SetBreadcrumbAction {
		return {
			type: SET_BREADCRUMB,
			payload: breadcrumbState,
		};
	},
};

