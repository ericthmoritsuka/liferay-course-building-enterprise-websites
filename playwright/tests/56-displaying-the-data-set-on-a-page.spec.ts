/**
 * Displaying the Data Set on a Page
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/06-content-authoring-and-management/10-creating-a-dashboard-for-contact-us-responses.md.
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

test('Displaying the Data Set on a Page', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. From the Clarity Public Enterprise Website, open the *Site Menu* (![](../../images/icon-menu.png)), expand *Si
	await openMenu(page, 'Site Menu', 'Site Builder', 'Pages');

	// Step 3. Click *New* to create a new page.
	await press(page, 'New');

	// Step 4. Select *Primary Master Page* and name the page `Contact Us Responses`.
	await press(page, 'Primary Master Page');

	// Step 5. Click *Add*.
	await press(page, 'Add');

	// Step 6. Drag and drop the Data Set fragment into the page's drop zone.
	// Not performed: no control or value named in this step.

	// Step 7. In the General panel, click *Add* (![](../../images/icon-plus.png)) to select a data set.
	await press(page, 'Add');

	// Step 8. Select the *Contact Us Responses* data set and click *Save*.
	await press(page, 'Contact Us Responses');
	await press(page, 'Save');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/10-creating-a-dashboard-for-contact-us-responses/images/19.png'});

	// Step 9. Click *Publish*.
	await press(page, 'Publish');

	// Step 10. Verify everything works as expected:
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

});
