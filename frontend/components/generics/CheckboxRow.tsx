import * as React from 'react';
import styled from 'styled-components';

const Label = styled.label`
	display: block;
	margin-bottom: 10px;
`;
export interface CheckboxRowProps {
	label: string;
	id: string;
	value: string;
	defaultCheckValue: boolean;
	callback: (value: string, checkValue: boolean) => void;
}

export const CheckboxRow: React.FC<CheckboxRowProps> = props => (
	<Label htmlFor={props.id} style={{ display: 'block' }}>
		<input
			type="checkbox"
			onClick={() => props.callback(props.value, props.defaultCheckValue)}
			checked={props.defaultCheckValue}
			name={props.value}
			id={props.id}
		/>
		&nbsp;{props.label}
	</Label>
);
