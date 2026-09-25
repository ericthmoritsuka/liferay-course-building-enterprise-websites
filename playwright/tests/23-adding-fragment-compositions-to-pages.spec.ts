/**
 * Adding Fragment Compositions to Pages
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/05-site-building/08-creating-custom-fragments-for-clarity.md.
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

test('Adding Fragment Compositions to Pages', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Go to and begin editing the *Leadership Profile* display page template.
	await press(page, 'Leadership Profile');

	// Step 2. Drag and drop the *Leadership Profile Display* fragment composition into the central content area.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 3. Click *Publish*.
	await press(page, 'Publish');

	// Step 4. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Site Builder*, and click *Pages*.
	await openMenu(page, 'Site Menu', 'Site Builder', 'Pages');

	// Step 5. Repeat steps 1-3 to add the *Home Page* composition to *Home* and *FAQ Page* composition to *FAQ*. For the Hom
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

});
