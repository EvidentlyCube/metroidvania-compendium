import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import {pageReducer} from './reducers/page';
// import { Hello } from './Hello';

import {App} from './viewsASD/App';
// const store = createStore(pageReducer);
ReactDOM.render(
	<>
		{/* <Provider store={store}> */}
		<App/>
		{/* </Provider> */}
	</>,
	document.getElementById('app'),
);
