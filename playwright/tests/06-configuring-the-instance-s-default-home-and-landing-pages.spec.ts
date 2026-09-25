/**
 * Configuring the Instance's Default Home and Landing Pages
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/05-site-building/03-configuring-claritys-site.md.
 * Edit the lesson and regenerate; edits here are overwritten.
 *
 * A pass means nothing blocked a reader. It does not mean the
 * exercise built the right thing - nothing records what it should
 * build.
 */
import {test} from '@playwright/test';

import {fill, openMenu, press} from '../helpers/liferay';
import {signIn} from '../helpers/sign-in';

test('Configuring the Instance\'s Default Home and Landing Pages', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Control Panel* tab, and clic
	await openMenu(page, 'Global Menu', 'Control Panel', 'Instance Settings');

	// Step 3. Under Platform, click *Instance Configuration* and go to the *General* tab.
	await press(page, 'Instance Configuration');
	await press(page, 'General');

	// Step 4. For Home URL, enter `/web/clarity`.
	await fill(page, 'Home URL', '/web/clarity');

	// Step 5. For Default Landing Page, enter `/web/clarity`.
	await fill(page, 'Default Landing Page', '/web/clarity');

	// Step 6. For Default Logout Page, enter `/web/clarity`.
	await fill(page, 'Default Logout Page', '/web/clarity');

	// Step 7. Click *Save*.
	await press(page, 'Save');

});
