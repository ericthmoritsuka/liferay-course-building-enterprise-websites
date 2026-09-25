/**
 * Creating and Submitting Publications Content
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/06-content-authoring-and-management/08-implementing-claritys-content-publishing-workflow.md.
 * Edit the lesson and regenerate; edits here are overwritten.
 *
 * A pass means nothing blocked a reader. It does not mean the
 * exercise built the right thing - nothing records what it should
 * build.
 */
import {test} from '@playwright/test';

import {fill, openMenu, press} from '../helpers/liferay';
import {signIn} from '../helpers/sign-in';

test('Creating and Submitting Publications Content', async ({page}) => {
	await signIn(page, 'christian');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Click the user profile icon, go to *Notifications*, and select the publications invitation.
	await press(page, 'Notifications');

	// Step 3. Click the *Publications* drop-down menu at the top of the page, click *Select a Publication*, and select *Arti
	await press(page, 'Publications');
	await press(page, 'Select a Publication');
	await press(page, 'Article Publication');

	// Step 4. Return to Clarity Public Enterprise Website, open the *Site Menu* (![](../../images/icon-menu.png)), expand *C
	await openMenu(page, 'Site Menu', 'Content & Data', 'Web Content');

	// Step 5. Go to the *Articles* folder, click *New*, and select *Article*.
	await press(page, 'Articles');
	await press(page, 'New');
	await press(page, 'Article');

	// Step 6. Enter these values:
	// Not performed: the step does not name a field and a value plainly enough.

	// Step 7. Click *Submit for Workflow*.
	await press(page, 'Submit for Workflow');

});
