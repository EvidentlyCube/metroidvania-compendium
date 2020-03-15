export type ImageProps = Required<Image>;
import DefaultImagePath from '../../assets/cover_default.jpg';
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

export const DefaultImage = new Image({ id: -1, name: 'undefined cover', fileUrl: DefaultImagePath });
