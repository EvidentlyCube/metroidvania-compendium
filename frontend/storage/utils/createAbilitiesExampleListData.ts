import { AbilityExample } from '../models/AbilityExample';
import { Game } from '../models/Game';
import { Image, DefaultImage } from '../models/Image';
import { AbilityExampleRowProps } from '../../components/listings/AbilityExampleRow';

interface AbilitiesExampleListInitialProps {
	abilityExamples: AbilityExample[];
	games: Map<number, Game>;
	images: Map<number, Image>;
}
export function createAbilitiesExampleListData(props: AbilitiesExampleListInitialProps): AbilityExampleRowProps[] {
	const { abilityExamples, games, images } = props;
	const abilitiesExampleListData: AbilityExampleRowProps[] = [];
	for (const abilityExample of abilityExamples) {
		abilitiesExampleListData.push({
			gameId: abilityExample.gameId,
			gameName: games.get(abilityExample.gameId)!.title,
			name: abilityExample.name,
			image: images.get(abilityExample.imageId || -1) || DefaultImage,
			description: abilityExample.description,
			id: abilityExample.id,
		});
	}
	return abilitiesExampleListData;
}
