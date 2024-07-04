import { UserLanguage } from '../constants/database.constant';

describe('User Model', () => {
	it('Check vietnamese language', () => {
		expect(UserLanguage.JP).toBe(1);
	});
});