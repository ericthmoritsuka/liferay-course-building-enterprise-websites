/**
 * Creating and Assigning User Groups
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
import {CAPTURE, capture} from '../helpers/screenshot';
import {signIn} from '../helpers/sign-in';

//
// The style guide's display width, captured at twice it.
//
test.use(CAPTURE);

test('Creating and Assigning User Groups', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Control Panel* tab, and clic
	await openMenu(page, 'Global Menu', 'Control Panel', 'User Groups');

	// Step 2. Click *New*.
	await press(page, 'New');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/04-security-and-identity-management/05-adding-claritys-users-and-groups/images/07.png'});

	// Step 3. Enter these details for the user group:
	await fill(page, 'Name', 'Marketing');
	await fill(page, 'Description', 'Members of the marketing department at Clarity.');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/04-security-and-identity-management/05-adding-claritys-users-and-groups/images/08.png'});

	// Step 4. Click *Save*.
	await press(page, 'Save');

	// Step 5. Click the *Marketing* user group.
	await press(page, 'Marketing');

	// Step 6. Click *New*.
	await press(page, 'New');

	// Step 7. Select *Christian Carter* and *Clara Murphy*.
	await press(page, 'Christian Carter');
	await press(page, 'Clara Murphy');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/04-security-and-identity-management/05-adding-claritys-users-and-groups/images/09.png'});

	// Step 8. Click *Add*.
	await press(page, 'Add');

});
