import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppStore } from '../storage/common';

interface HeaderProps {
	breadcrumb: string;
}
const Header: React.FC<HeaderProps> = props => {
	const { breadcrumb } = props;
	return (
		<>
			<nav>
				<div>
					<strong>Metroidvania Compendium</strong>
					<span> » {breadcrumb}</span>
				</div>
				<div>
					{/* Spans are placeholder before styling, to have a space between links */}
					<Link to="/">Home</Link>
					<span> </span>
					<Link to="/games">Game List</Link>
					<span> </span>
					<Link to="/abilities">Abilities</Link>
					<span> </span>
					<Link to="/config">Config</Link>
					<span> </span>
				</div>
			</nav>
			<hr></hr>
		</>
	);
};

const mapStateToProps = (state: AppStore): HeaderProps => {
	return {
		breadcrumb: state.headerBreadcrumb || 'Missing page name',
	};
};
export default connect(mapStateToProps)(Header);
