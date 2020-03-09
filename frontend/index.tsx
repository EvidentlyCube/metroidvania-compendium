import * as React from 'react';
import * as ReactDOM from 'react-dom';
import configureStore from './storage/configureStore';
import {App} from './views/App';
const store = configureStore();
ReactDOM.render(
	<App store={store}/>,
	document.getElementById('app'),
);
