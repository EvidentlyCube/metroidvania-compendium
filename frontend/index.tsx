import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './Hello';
import { MainRouter } from './Router';

ReactDOM.render(
	<MainRouter/>,
	document.getElementById('router'),
);

ReactDOM.render(
	<Hello compiler="TypeScript" framework="React" />,
	document.getElementById('app'),
);
