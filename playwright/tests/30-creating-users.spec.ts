/**
 * Creating Users
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/04-security-and-identity-management/05-adding-claritys-users-and-groups.md.
 * Edit the lesson and regenerate; edits here are overwritten.
 *
 * A pass means nothing blocked a reader. It does not mean the
 * exercise built the right thing - nothing records what it should
 * build.
 */
import {test} from '@playwright/test';

import {fill, openMenu, press} from '../helpers/liferay';
import {signIn} from '../helpers/sign-in';

test('Creating Users', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Control Panel* tab, and clic
	await openMenu(page, 'Global Menu', 'Control Panel', 'Users and Organizations');

	// Step 3. Click *New*.
	await press(page, 'New');

	// Step 4. To set the user's profile image, click the *Change Image* (![](../../images/icon-change.png)) button, and clic
	await press(page, 'Change Image');
	await press(page, 'Select');

	// Step 5. Go to the `liferay-building-enterprise-websites/exercises/module-4/` course workspace folder, select `christia
	await press(page, 'Done');

	// Step 6. Enter these details for Christian Carter:
	// Not performed: the step does not name a field and a value plainly enough.

	// Step 7. Scroll to the bottom and click *Save*.
	await press(page, 'Save');

	// Step 8. In the left sidebar, click *Password*.
	await press(page, 'Password');

	// Step 9. Enter `learn` for his password.
	await fill(page, 'password', 'learn');

	// Step 10. Click *Save*.
	await press(page, 'Save');

});
