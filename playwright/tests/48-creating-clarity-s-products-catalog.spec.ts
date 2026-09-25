/**
 * Creating Clarity's Products Catalog
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/06-content-authoring-and-management/07-using-claritys-products-as-content.md.
 * Edit the lesson and regenerate; edits here are overwritten.
 *
 * A pass means nothing blocked a reader. It does not mean the
 * exercise built the right thing - nothing records what it should
 * build.
 */
import {test} from '@playwright/test';

import {fill, openMenu, press} from '../helpers/liferay';
import {signIn} from '../helpers/sign-in';

test('Creating Clarity\'s Products Catalog', async ({page}) => {
	await signIn(page, 'ian');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Commerce* tab, and click *Ca
	await openMenu(page, 'Global Menu', 'Commerce', 'Catalogs');

	// Step 3. Click *New*.
	await press(page, 'New');

	// Step 4. Enter the following:
	// Not performed: the step does not name a field and a value plainly enough.

	// Step 5. Click *Submit* to finish creating the catalog.
	await press(page, 'Submit');

});
