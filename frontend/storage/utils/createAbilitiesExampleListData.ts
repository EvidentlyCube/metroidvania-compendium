import { AbilityExample } from '../models/AbilityExample';
import { Game } from '../models/Game';
import { Image, DefaultImage } from '../models/Image';
import { AbilityExampleRowProps } from '../../components/listings/AbilityExampleRow';

interface AbilitiesExampleListInitialProps {
	abilityExamples: Array<AbilityExample>;
	games: Map<number, Game>;
	abilityId: number;
	images: Map<number, Image>;
}
export function createAbilitiesExampleListData(props: AbilitiesExampleListInitialProps): Array<AbilityExampleRowProps> {
	const { abilityExamples, games, images, abilityId } = props;
	const abilitiesExampleListData: Array<AbilityExampleRowProps> = new Array();
	const abilityExamplesFiltered = abilityExamples.filter(abilityExample => abilityExample.abilityId == abilityId);
	for (const abilityExample of abilityExamplesFiltered) {
		abilitiesExampleListData.push({
			gameId: abilityExample.gameId,
			gameName: games.get(abilityExample.gameId)!.title,
			name: abilityExample.name,
			image: images.get(abilityExample.imageId) || DefaultImage,
			description: abilityExample.description,
			id: abilityExample.id,
		});
	}
	return abilitiesExampleListData;
}
