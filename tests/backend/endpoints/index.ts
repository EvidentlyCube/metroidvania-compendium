import 'mocha';
import { registerBackendEndpointEnvironmentTests } from './environments';
import { registerBackendEndpointImagesTests } from './images';
import { registerBackendEndpointAbilityCategoryTests } from './abilityCategories';
import { registerBackendEndpointAbilityGroupsTests } from './abilityGroups';
import { registerBackendEndpointAbilityTests } from './abilities';
import { registerBackendEndpointGameSeriesTests } from './gameSeries';
import { registerBackendEndpointGamesTests } from './games';
import { registerBackendEndpointGameLinksTests } from './gameLinks';
import { registerBackendEndpointAbilityVariantTests } from './abilityVariants';
import { registerBackendEndpointAbilityExampleTests } from './abilityExamples';

export function registerBackendEndpointTests(): void {
	describe('Endpoints', () => {
		registerBackendEndpointAbilityCategoryTests();
		registerBackendEndpointAbilityGroupsTests();
		registerBackendEndpointAbilityTests();
		registerBackendEndpointAbilityVariantTests();
		registerBackendEndpointAbilityExampleTests();
		registerBackendEndpointGamesTests();
		registerBackendEndpointGameLinksTests();
		registerBackendEndpointGameSeriesTests();
		registerBackendEndpointEnvironmentTests();
		registerBackendEndpointImagesTests();
	});
}
