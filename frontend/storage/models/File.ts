export type FileProps = Required<File>;
export enum Types {
	'image',
	'downloadable',
}
export class File {
	public readonly id: number;

	public readonly name: string;

	public readonly type: Types;

	public readonly fileUrl: string;

	constructor(props: FileProps) {
		this.id = props.id;
		this.name = props.name;
		this.type = props.type;
		this.fileUrl = props.fileUrl;
	}
}
