/**
 * Creating a Workflow
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

test('Creating a Workflow', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Applications* tab, and click
	await openMenu(page, 'Global Menu', 'Applications', 'Process Builder');

	// Step 3. Click *New* to create a new workflow.
	await press(page, 'New');

	// Step 4. For its name, enter `Contact Us Follow Up`.
	await fill(page, 'name', 'Contact Us Follow Up');

	// Step 5. In the Nodes panel, find the *Task* node and drag it into the workflow editor.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 6. In the side panel, configure these settings for the Task node.
	await fill(page, 'Label', 'Follow Up');
	await fill(page, 'Node Name', 'followUp');
	await fill(page, 'Description', 'Ask a Distributor Representative to verify a new Contact Us submission.');

	// Step 7. Click the *Start* node, then hover your mouse over it and drag an arrow to the Task node.
	await press(page, 'Start');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/10-creating-a-dashboard-for-contact-us-responses/images/02.png'});

	// Step 8. In the side panel, configure these settings for the Transition Label.
	await fill(page, 'Label', 'Review');
	await fill(page, 'Transition Name', 'review_contact_us_entry');
	// Not entered: Default - chosen from a control rather than typed.

	// Step 9. Drag another arrow from the Follow Up node to the End node.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 10. In the side panel, configure these settings for the second Transition Label.
	// Not entered: Label, Transition Name, Default - chosen from a control rather than typed.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 11. Click the *Follow Up* node to begin configuring it.
	await press(page, 'Follow Up');

	// Step 12. Under Assignments, click *Asset Creator*.
	await press(page, 'Asset Creator');

	// Step 13. For Assignment Type, select *Role*.
	await press(page, 'Role');

	// Step 14. For Role, select *Distributor Representative*.
	await press(page, 'Distributor Representative');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/10-creating-a-dashboard-for-contact-us-responses/images/05.png'});

	// Step 15. Click *Back* (![Back Arrow](../../images/icon-angle-left.png)) on the sidebar to continue editing the Follow U
	await press(page, 'Back');

	// Step 16. Under Notifications, click *New*.
	await press(page, 'New');

	// Step 17. For Name, enter `Follow Up Task`.
	await fill(page, 'Name', 'Follow Up Task');

	// Step 18. For Template, enter this text:
	// Not performed: the step does not name a field and a value plainly enough.

	// Step 19. For Notification Types, select *User Notification*.
	await press(page, 'User Notification');

	// Step 20. For Recipient Type, select *Role*.
	await press(page, 'Role');

	// Step 21. For Role Name, select *Distributor Representative*.
	await press(page, 'Distributor Representative');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/10-creating-a-dashboard-for-contact-us-responses/images/06.png'});

	// Step 22. Click the End node to begin configuring it.
	// Not performed: no control or value named in this step.

	// Step 23. Under Actions, click *New*.
	await press(page, 'New');

	// Step 24. Set the following attributes for the new action:
	await fill(page, 'Name', 'Approve Entry');
	// Not entered: Type, Status, Execution Type - chosen from a control rather than typed.

	// Step 25. Click *Publish*.
	await press(page, 'Publish');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/10-creating-a-dashboard-for-contact-us-responses/images/07.png'});

});
