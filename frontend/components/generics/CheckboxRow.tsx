import * as React from 'react';
export interface CheckboxRowProps {
	label: string;
	id: string;
	value: string;
	defaultCheckValue: boolean;
	callback: (value: string, checkValue: boolean) => void;
}

export const CheckboxRow: React.FC<CheckboxRowProps> = props => (
	<label htmlFor={props.id} style={{ display: 'block' }}>
		<input
			type="checkbox"
			onClick={() => props.callback(props.value, props.defaultCheckValue)}
			defaultChecked={props.defaultCheckValue}
			name={props.value}
			id={props.id}
		/>
		{props.label}
	</label>
);
