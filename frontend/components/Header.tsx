import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppStore } from '../storage/common';
import styled from 'styled-components';
import { Styles } from './styles';

interface HeaderProps {
	breadcrumb: string;
}
const Header: React.FC<HeaderProps> = props => {
	const { breadcrumb } = props;
	return (
		<>
			<StyledNav>
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
			</StyledNav>
		</>
	);
};

const mapStateToProps = (state: AppStore): HeaderProps => {
	return {
		breadcrumb: state.headerBreadcrumb || 'Missing page name',
	};
};
export default connect(mapStateToProps)(Header);

const StyledNav = styled.nav`
	top: 0;
	left: 0;
	right: 0;
	position: fixed;
	height: ${Styles.headerHeight};
	align-items: center;
	display: flex;
	justify-content: space-between;
	padding: 10px;
	box-sizing: border-box;
	background: ${Styles.colorDarkBg};
	color: ${Styles.colorTextOnDarkBg};
	a {
		color: white;
		display: inline-block;
		padding: 0 10px;
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
`;
