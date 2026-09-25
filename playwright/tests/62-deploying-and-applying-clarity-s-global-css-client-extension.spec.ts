/**
 * Deploying and Applying Clarity's Global CSS Client Extension
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

test('Deploying and Applying Clarity\'s Global CSS Client Extension', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Open a new terminal window and go to the course workspace's `/client-extensions/clarity-global-css/` folder.
	// Not performed: this step is done at a terminal, not in a browser.

	// Step 2. Run this command to build and deploy the client extension:
	// Not performed: this step is done at a terminal, not in a browser.

	// Step 3. Open your Liferay server logs, found in your course workspace inside `/bundles/logs/`. The correct file will e
	// Not performed: no control or value named in this step.

	// Step 4. Verify that step 2's command executed successfully:
	// Not performed: no control or value named in this step.

	// Step 5. In the Clarity Public Enterprise Website, open the *Site Menu* (![](../../images/icon-product-menu.png)), expa
	await openMenu(page, 'Site Menu', 'Site Builder', 'Pages');

	// Step 6. Click *Actions* (![](../../images/icon-actions.png)) in the Application Bar and select *Configuration*.
	await press(page, 'Actions');
	await press(page, 'Configuration');

	// Step 7. Under Customization, click ![](../../images/icon-plus.png) *Add CSS Client Extensions,*select *Clarity Global 
	await press(page, 'Add CSS Client Extensions');
	await press(page, 'Clarity Global CSS');
	await press(page, 'Add');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/09-applying-claritys-brand-styling/images/08.png'});

	// Step 8. Click *Save*.
	await press(page, 'Save');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/09-applying-claritys-brand-styling/images/09.png'});

});
