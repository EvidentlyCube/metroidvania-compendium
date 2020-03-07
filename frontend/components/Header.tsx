import * as React from 'react';
import {
	Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import {AppStore} from '../storage/common';

interface HeaderProps{
	currBreadcrumb: AppStore | undefined;
}
const Header: React.FC<HeaderProps> = (props) => {
	const breadcrumb = props.currBreadcrumb.headerBreadcrumb || 'Missing page name';
	console.log(breadcrumb);
	return (
		<>
			<nav>
				<div><strong>Metroidvania Compendium</strong>
					<span> » {breadcrumb}</span>
				</div>
				<div>
					{/* Spans are placeholder before styling, to have a space between links */}
					<Link to="/">Home</Link><span>  </span>
					<Link to="/games">Game List</Link><span>  </span>
					<Link to="/abilities">Abilities</Link><span>  </span>
					<Link to="/config">Config</Link><span>  </span>
				</div>
			</nav>
			<hr></hr>
		</>

	);
};

const mapPropsToStore = (state: AppStore): HeaderProps => {
	return {
		currBreadcrumb: state ? state : undefined,
	};
};
export default connect(mapPropsToStore)(Header);