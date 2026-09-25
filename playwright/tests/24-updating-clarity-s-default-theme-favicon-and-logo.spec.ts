/**
 * Updating Clarity's Default Theme, Favicon, and Logo
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/05-site-building/09-applying-claritys-brand-styling.md.
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

test('Updating Clarity\'s Default Theme, Favicon, and Logo', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Site Builder*, and click *Pages*.
	await openMenu(page, 'Site Menu', 'Site Builder', 'Pages');

	// Step 3. Click *Actions* (![](../../images/icon-actions.png)) in the Application Bar and select *Configuration*.
	await press(page, 'Actions');
	await press(page, 'Configuration');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/09-applying-claritys-brand-styling/images/01.png'});

	// Step 4. Click *Change Current Theme* and select *Dialect*.
	// Not performed: this step opens the file chooser the next step cannot use.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 5. Under Basic Settings, click *Select Favicon* (![](../../images/icon-change.png)) and add the `clarity-favicon.
	// Not performed: this step picks a file from disk, which a browser test cannot do.

	// Step 6. Click *Change Logo* (![](../../images/icon-change.png)) and select the `clarity-logo-c.png` file found in the 
	// Not performed: this step picks a file from disk, which a browser test cannot do.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 7. Scroll down to the bottom and click *Save*.
	await press(page, 'Save');

});
