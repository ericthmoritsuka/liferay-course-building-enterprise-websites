/**
 * Creating a Site
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/05-site-building/02-setting-up-claritys-site.md.
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

test('Creating a Site', async ({page}) => {
	await signIn(page, 'ian');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Control Panel* tab, and clic
	await openMenu(page, 'Global Menu', 'Control Panel', 'Sites');

	// Step 3. Click *New*.
	await press(page, 'New');

	// Step 4. Select the *Blank Site* template.
	await press(page, 'Blank Site');

	// Step 5. Enter `Clarity Distributor Portal` for name.
	await fill(page, 'name', 'Clarity Distributor Portal');

	// Step 6. Click *Add*.
	await press(page, 'Add');

});
