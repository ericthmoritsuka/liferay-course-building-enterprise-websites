/**
 * Deploying a Client Extension for Favicon
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/10-extending-liferay-dxp/03-extending-claritys-front-end.md.
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

test('Deploying a Client Extension for Favicon', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. In a terminal window, go to the` /client-extensions/clarity-solution-theme-favicon/` folder in your course wor
	// Not performed: this step is done at a terminal, not in a browser.

	// Step 2. Run this command to build and deploy the client extension:
	// Not performed: this step is done at a terminal, not in a browser.

	// Step 3. Check the Liferay logs to verify the command executes successfully:
	// Not performed: no control or value named in this step.

	// Step 4. From the Clarity Public Enterprise Website, open the *Site Menu* (![](../../images/icon-product-menu.png)), ex
	await openMenu(page, 'Site Menu', 'Site Builder', 'Pages');

	// Step 5. Click *Actions* (![](../../images/icon-actions.png)) in the Application Bar and select *Configuration*.
	await press(page, 'Actions');
	await press(page, 'Configuration');

	// Step 6. In the Design tab, click *Select Favicon* (![](../../images/icon-change.png)).
	await press(page, 'Select Favicon');

	// Step 7. In the modal window, go to the *Client Extension* tab and select *Clarity Solution Theme Favicon Primary*.
	await press(page, 'Client Extension');
	await press(page, 'Clarity Solution Theme Favicon Primary');

	// Step 8. Click *Save*.
	await press(page, 'Save');

	// Step 9. Go to the Home page and verify the page's favicon was updated to white text on a green background.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

});
