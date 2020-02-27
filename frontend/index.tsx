import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import { Hello } from './Hello';
import { MainRouter } from './Components/Router';
import { Footer } from './Components/Footer';

ReactDOM.render(
	<>
		<MainRouter/>
		{/* <Hello compiler="TypeScript" framework="React" /> */}
		<hr></hr>
		<Footer/>
	</>,
	document.getElementById('app'),
);

