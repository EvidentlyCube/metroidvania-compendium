import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './Hello';
import { MainRouter } from './Router';

ReactDOM.render(
	<div>
		<MainRouter/>
		<Hello compiler="TypeScript" framework="React" />
	</div>,
	document.getElementById('app'),
);
