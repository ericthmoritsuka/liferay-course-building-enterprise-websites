/**
 * Creating and Assigning User Roles
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/04-security-and-identity-management/06-defining-and-assigning-roles-to-claritys-users.md.
 * Edit the lesson and regenerate; edits here are overwritten.
 *
 * A pass means nothing blocked a reader. It does not mean the
 * exercise built the right thing - nothing records what it should
 * build.
 */
import {test} from '@playwright/test';

import {fill, openMenu, press} from '../helpers/liferay';
import {CAPTURE, capture} from '../helpers/screenshot';
import {signIn} from '../helpers/sign-in';

//
// The style guide's display width, captured at twice it.
//
test.use(CAPTURE);

test('Creating and Assigning User Roles', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Control Panel* tab, and clic
	await openMenu(page, 'Global Menu', 'Control Panel', 'Roles');

	// Step 3. Click *New*.
	await press(page, 'New');

	// Step 4. Enter these details for the role:
	// Not performed: the step does not name a field and a value plainly enough.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/04-security-and-identity-management/06-defining-and-assigning-roles-to-claritys-users/images/01.png'});

	// Step 5. Click *Save*.
	await press(page, 'Save');

	// Step 6. Go to the *Assignees* tab and click *User Groups*.
	await press(page, 'Assignees');
	await press(page, 'User Groups');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/04-security-and-identity-management/06-defining-and-assigning-roles-to-claritys-users/images/02.png'});

	// Step 7. Click *New*.
	await press(page, 'New');

	// Step 8. Select *Marketing*.
	await press(page, 'Marketing');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/04-security-and-identity-management/06-defining-and-assigning-roles-to-claritys-users/images/03.png'});

	// Step 9. Click *Add*.
	await press(page, 'Add');

});
