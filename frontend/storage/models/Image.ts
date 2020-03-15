export type ImageProps = Required<Image>;
import UndefinedCover from '../../assets/cover_undefined.jpg';
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

export const undefinedCover = new Image({ id: -1, name: 'undefined cover', fileUrl: UndefinedCover });
