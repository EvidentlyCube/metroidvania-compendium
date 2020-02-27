import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './Hello';
import { MainRouter } from './Router';
import { Footer } from './Components';

ReactDOM.render(
	<div>
		<MainRouter/>
		<Hello compiler="TypeScript" framework="React" />
		<hr></hr>
		<Footer/>
	</div>,
	document.getElementById('app'),
);

