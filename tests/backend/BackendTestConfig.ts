import { Dependencies } from '../../backend/core/Dependencies';
import { MockDatabase } from './_mocks/MockDatabase';

export class BackendTestConfig {
	public static mockDatabase: MockDatabase;
	public static deps: Dependencies;
}
