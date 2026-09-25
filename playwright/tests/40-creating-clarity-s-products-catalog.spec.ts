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
import {CAPTURE, capture} from '../helpers/screenshot';
import {signIn} from '../helpers/sign-in';

//
// The style guide's display width, captured at twice it.
//
test.use(CAPTURE);

test('Creating Clarity\'s Products Catalog', async ({page}) => {
	await signIn(page, 'ian');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Commerce* tab, and click *Ca
	await openMenu(page, 'Global Menu', 'Commerce', 'Catalogs');

	// Step 3. Click *New*.
	await press(page, 'New');

	// Step 4. Enter the following:
	await fill(page, 'Name', 'Clarity Eyewear');
	// Not entered: Default Catalog Language, Currency - chosen from a control rather than typed.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/07-using-claritys-products-as-content/images/04.png'});

	// Step 5. Click *Submit* to finish creating the catalog.
	await press(page, 'Submit');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/07-using-claritys-products-as-content/images/05.png'});

});
