/**
 * Configuring Publications and Workflow for Content
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

test('Configuring Publications and Workflow for Content', async ({page}) => {
	await signIn(page, 'ian');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Applications* tab, and click
	await openMenu(page, 'Global Menu', 'Applications', 'Publications');

	// Step 3. Toggle *Enable Publications*.
	// Not performed: no control or value named in this step.

	// Step 4. Click *Back* (![Back Arrow](../../images/icon-angle-left.png)) to return to the Publications application page.
	await press(page, 'Back');

	// Step 5. Click *New* to create a new publication.
	await press(page, 'New');

	// Step 6. For Name, enter `Article Publication`.
	await fill(page, 'Name', 'Article Publication');

	// Step 7. Click *Create*.
	await press(page, 'Create');

	// Step 8. Return to *Clarity Public Enterprise Website*.
	// Not performed: no control or value named in this step.

	// Step 9. Open the *Site Menu* (![](../../images/icon-menu.png)), expand *Content & Data*, and click *Web Content*.
	await openMenu(page, 'Site Menu', 'Content & Data', 'Web Content');

	// Step 10. In the Web Content tab, click *Actions* (![](../../images/icon-actions.png)) for the Articles folder and selec
	await press(page, 'Actions');
	await press(page, 'Edit');

	// Step 11. Expand the *Structure Restrictions and Workflow* section and select *Set the default workflow for the folder's
	await press(page, 'Structure Restrictions and Workflow');

	// Step 12. Select *Single Approver* in the drop-down menu.
	await press(page, 'Single Approver');

	// Step 13. Click *Save*.
	await press(page, 'Save');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/08-implementing-claritys-content-publishing-workflow/images/05.png'});

	// Step 14. Go to the *Publications* application in the Global Menu (![](../../images/icon-applications-menu.png)).
	// Not performed: no control or value named in this step.

	// Step 15. Click *Actions* (![](../../images/icon-actions.png)) for Article Publication, and select *Invite Users*.
	await press(page, 'Actions');
	await press(page, 'Invite Users');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/08-implementing-claritys-content-publishing-workflow/images/06.png'});

	// Step 16. Click the role drop-down menu and select *Editor*.
	await press(page, 'Editor');

	// Step 17. For People, enter `Christian Carter` and select his user profile.
	// Not performed: no control or value named in this step.

	// Step 18. Repeat steps 3-4 to invite Clara Murphy using these values:
	// Not performed: no control or value named in this step.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/08-implementing-claritys-content-publishing-workflow/images/07.png'});

	// Step 19. Click *Send* and click *OK* to confirm.
	await press(page, 'Send');
	await press(page, 'OK');

});
