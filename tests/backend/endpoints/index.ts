import 'mocha';
import { registerBackendEndpointEnvironmentTests } from './environments';
import { registerBackendEndpointImagesTests } from './images';
import { registerBackendEndpointAbilityCategoryTests } from './abilityCategories';
import { registerBackendEndpointAbilityGroupsTests } from './abilityGroups';
import { registerBackendEndpointAbilityTests } from './abilities';
import { registerBackendEndpointGameSeriesTests } from './gameSeries';
import { registerBackendEndpointGamesTests } from './games';
import { registerBackendEndpointGameLinksTests } from './gameLinks';

export function registerBackendEndpointTests(): void {
	describe('Endpoints', () => {
		registerBackendEndpointAbilityCategoryTests();
		registerBackendEndpointAbilityGroupsTests();
		registerBackendEndpointAbilityTests();
		registerBackendEndpointGamesTests();
		registerBackendEndpointGameLinksTests();
		registerBackendEndpointGameSeriesTests();
		registerBackendEndpointEnvironmentTests();
		registerBackendEndpointImagesTests();
	});
}
