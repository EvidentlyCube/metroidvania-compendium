import * as React from 'react';
//Callback with id and value
export interface CheckboxRowProps {
	label: string;
	id: string;
	name: string;
	defaultCheckValue: boolean;
	callback: (name: string, checkValue: boolean) => void;
}

export const CheckboxRow: React.FC<CheckboxRowProps> = props => (
	<>
		<input
			type="checkbox"
			onClick={() => props.callback(props.name, props.defaultCheckValue)}
			defaultChecked={props.defaultCheckValue}
			name={props.name}
			id={props.id}
		/>
		<label htmlFor={props.id}> {props.label}</label>
		<br></br>
	</>
);
