/**
 * Reviewing and Publishing Content
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
import {CAPTURE, capture} from '../helpers/screenshot';
import {signIn} from '../helpers/sign-in';

//
// The style guide's display width, captured at twice it.
//
test.use(CAPTURE);

test('Reviewing and Publishing Content', async ({page}) => {
	await signIn(page, 'clara');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 2. Click the *Publications* drop-down menu at the top of the page, click *Select a Publication*, and choose *Arti
	await press(page, 'Publications');
	await press(page, 'Select a Publication');
	await press(page, 'Article Publication');

	// Step 3. Click the *Publications* drop-down menu again and select *Review Changes*.
	await press(page, 'Publications');
	await press(page, 'Review Changes');

	// Step 4. Click *Publish*.
	await press(page, 'Publish');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/08-implementing-claritys-content-publishing-workflow/images/10.png'});

	// Step 5. Click Clara's user profile icon and go to *My Workflow Tasks*.
	await press(page, 'My Workflow Tasks');

	// Step 6. Go to the *Assigned to My Roles* tab to see the pending workflow task.
	await press(page, 'Assigned to My Roles');

	// Step 7. Click *Actions* (![](../../images/icon-actions.png)) for the workflow task and select *Assign to Me*.
	await press(page, 'Actions');
	await press(page, 'Assign to Me');

	// Step 8. Enter a comment and click *Done*.
	await press(page, 'Done');

	// Step 9. Click *Actions* (![](../../images/icon-actions.png)) for the task and select *Approve*.
	await press(page, 'Actions');
	await press(page, 'Approve');

	// Step 10. Enter a comment and click *Done*.
	await press(page, 'Done');

	// Step 11. Click the *Publications* drop-down menu again and select *Review Changes*.
	await press(page, 'Publications');
	await press(page, 'Review Changes');

	// Step 12. Click *Publish*, verify there are no conflicts, and click *Publish* again to add the changes to production.
	await press(page, 'Publish');
	await press(page, 'Publish');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/08-implementing-claritys-content-publishing-workflow/images/11.png'});

});
