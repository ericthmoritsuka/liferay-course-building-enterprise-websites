/**
 * Filtering Results with Custom Filters
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/09-search/03-setting-up-claritys-search-pages.md.
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

test('Filtering Results with Custom Filters', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Applications* tab, and click
	await openMenu(page, 'Global Menu', 'Applications', 'Asset Libraries');

	// Step 2. Select the *HR* library and click *Web Content*.
	await press(page, 'HR');
	await press(page, 'Web Content');

	// Step 3. Go to the *Structures* tab and copy the Job Listing structure's ID.
	await press(page, 'Structures');

	// Step 4. Go to the *Open Positions* page and begin editing it.
	await press(page, 'Open Positions');

	// Step 5. From the *Components* panel, drag and drop a *Custom Filter* widget into the Search Results and Options contai
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 6. Select the *Custom Filter* widget, click its *Actions* button (![](../../images/icon-actions.png)), and select
	await press(page, 'Custom Filter');
	await press(page, 'Actions');
	await press(page, 'Configuration');

	// Step 7. For Filter Field, enter these values:
	await fill(page, 'Filter Field', 'classTypeId');
	// Not entered: Filter Value, Invisible - chosen from a control rather than typed.

	// Step 8. Click *Save* and close the modal window.
	await press(page, 'Save');

	// Step 9. Click *Publish*.
	await press(page, 'Publish');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/09-search/03-setting-up-claritys-search-pages/images/14.png'});

});
