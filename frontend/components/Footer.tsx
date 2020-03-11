import * as React from 'react';
import styled from 'styled-components';
import { Styles } from './styles';

export const Footer: React.FC = () => {
	return (
		<StyledFooter>
			<p>
				Follow on <a href="https://github.com/EvidentlyCube/metroidvania-compendium">GitHub</a>
			</p>
		</StyledFooter>
	);
};
const StyledFooter = styled.footer`
	display: flex;
	justify-content: center;
	padding: 10px;
	background: ${Styles.colorDarkBg};
	color: ${Styles.colorTextOnDarkBg};

	a {
		color: ${Styles.colorTextOnDarkBg};
	}
`;
