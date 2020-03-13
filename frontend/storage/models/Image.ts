export type ImageProps = Required<Image>;
export class Image {
	public readonly id: number;

	public readonly name: string;

	public readonly fileUrl: string;

	constructor(props: ImageProps) {
		this.id = props.id;
		this.name = props.name;
		this.fileUrl = props.fileUrl;
	}
}
