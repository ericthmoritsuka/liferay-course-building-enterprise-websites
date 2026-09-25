/**
 * Attaching the Workflow to the Object
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

test('Attaching the Workflow to the Object', async ({page}) => {
	await signIn(page, 'ian');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. From the *Clarity Public Enterprise Website*, open the Site Menu (![](../../images/icon-menu.png)), expand *Co
	await openMenu(page, 'Site Menu', 'Configuration', 'Workflow');

	// Step 3. Click *Edit* for the Contact Us asset type.
	await press(page, 'Edit', 'Contact Us asset type');

	// Step 4. Select the *Contact Us Follow Up* workflow.
	await press(page, 'Contact Us Follow Up');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/10-creating-a-dashboard-for-contact-us-responses/images/08.png'});

	// Step 5. Click *Save*.
	await press(page, 'Save');

});
