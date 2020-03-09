export const SET_BREADCRUMB = 'SET_BREADCRUMB';

export interface AppStore {
	headerBreadcrumb: string;
}
export interface SetBreadcrumbAction{
	type: typeof SET_BREADCRUMB;
	headerBreadcrumb: string;
}
export const BreadcrumbActions = {
	setBreadcrumb: function(headerBreadcrumb: string): SetBreadcrumbAction {
		return {
			type: SET_BREADCRUMB,
			headerBreadcrumb: headerBreadcrumb,
		};
	},
};
// Making one variable, that will be extended with new actions, to be passed to configureStore
export type AppActions = SetBreadcrumbAction;
