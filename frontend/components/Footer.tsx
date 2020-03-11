import * as React from 'react';
import styled from 'styled-components';
import { Theme } from './styles/themes';

const StyledFooter = styled.footer`
	display: flex;
	justify-content: center;
	padding: 10px;
	background: ${Theme.colorDarkBg};
	color: ${Theme.colorTextOnDarkBg};

	a {
		color: ${Theme.colorTextOnDarkBg};
	}
`;
export const Footer: React.FC = () => {
	return (
		<StyledFooter>
			<p>
				Follow on <a href="https://github.com/EvidentlyCube/metroidvania-compendium">GitHub</a>
			</p>
		</StyledFooter>
	);
};
