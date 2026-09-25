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

import {fill, openMenu, openPageSettings, press} from '../helpers/liferay';
import {CAPTURE, capture} from '../helpers/screenshot';
import {signIn} from '../helpers/sign-in';

//
// The style guide's display width, captured at twice it.
//
test.use(CAPTURE);

test('Creating Users', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Control Panel* tab, and clic
	await openMenu(page, 'Global Menu', 'Control Panel', 'Users and Organizations');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/04-security-and-identity-management/05-adding-claritys-users-and-groups/images/02.png'});

	await capture(page, {name: 'building-enterprise-websites-with-liferay/04-security-and-identity-management/05-adding-claritys-users-and-groups/images/03.png'});

	// Step 3. Click *New*.
	await press(page, 'New');

	// Step 4. To set the user's profile image, click the *Change Image* (![](../../images/icon-change.png)) button, and clic
	// Not performed: this step opens the file chooser the next step cannot use.

	// Step 5. Go to the `liferay-building-enterprise-websites/exercises/module-4/` course workspace folder, select `christia
	// Not performed: this step picks a file from disk, which a browser test cannot do.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 6. Enter these details for Christian Carter:
	await fill(page, 'Screen Name', 'christiancarter');
	await fill(page, 'Email Address', 'christian.carter@clarityvisionsolutions.com');
	await fill(page, 'Job Title', 'Marketing Coordinator');
	await fill(page, 'First Name', 'Christian');
	await fill(page, 'Last Name', 'Carter');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/04-security-and-identity-management/05-adding-claritys-users-and-groups/images/05.png'});

	// Step 7. Scroll to the bottom and click *Save*.
	await press(page, 'Save');

	// Step 8. In the left sidebar, click *Password*.
	await press(page, 'Password');

	// Step 9. Enter `learn` for his password.
	await fill(page, 'password', 'learn');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/04-security-and-identity-management/05-adding-claritys-users-and-groups/images/06.png'});

	// Step 10. Click *Save*.
	await press(page, 'Save');

});
