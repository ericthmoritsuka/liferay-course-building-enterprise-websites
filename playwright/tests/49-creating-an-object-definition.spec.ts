/**
 * Creating an Object Definition
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/06-content-authoring-and-management/09-building-claritys-contact-us-form.md.
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

test('Creating an Object Definition', async ({page}) => {
	await signIn(page, 'ian');

	// Step 1. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Control Panel* tab, and clic
	await openMenu(page, 'Global Menu', 'Control Panel', 'Objects');

	// Step 2. Click *New*.
	await press(page, 'New');

	// Step 3. Enter these details:
	// Not entered: Label, Plural Label, Object Name - chosen from a control rather than typed.

	// Step 4. Click *Save*.
	await press(page, 'Save');

	// Step 5. From the Objects overview page, click *Contact Us* to begin editing the object definition.
	await press(page, 'Contact Us');

	// Step 6. In the Details tab, configure these settings:
	// Not entered: Scope > Scope, Scope > Panel Link, Configuration > Show Widget in Page Builder, Configuration > Enable Entry History in Audit Framework - inside a panel or a language this cannot address yet.

	// Step 7. Click *Save*.
	await press(page, 'Save');

	// Step 8. Go to the *Fields* tab.
	await press(page, 'Fields');

	// Step 9. Click *New*, enter these details, and click *Save*:
	await press(page, 'New');
	await fill(page, 'Label', 'Full Name');
	await fill(page, 'Field Name', 'fullName');
	// Not entered: Type, Enable Entry Translation, Mandatory, Accept Unique Values Only - chosen from a control rather than typed.
	await press(page, 'Save');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/09-building-claritys-contact-us-form/images/03.png'});

	// Step 10. Repeat the previous step to create the remaining six fields:
	// Not entered: `Email Address`, `Phone`, `Nature of Inquiry`, `State or Province`, `City`, `Comment` - chosen from a control rather than typed.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 11. Return to the *Details* tab and click *Publish*.
	await press(page, 'Publish');

	// Step 12. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Control Panel* tab, and clic
	await openMenu(page, 'Global Menu', 'Control Panel', 'Roles');

	// Step 13. In the *Regular Roles* tab, click *Web Developer* to edit that role.
	await press(page, 'Web Developer');

	// Step 14. Go to the *Define Permissions* tab and search for `Contact Us`.
	await press(page, 'Define Permissions');

	// Step 15. Click on *Contact Us* in the *Content & Data* section.
	await press(page, 'Contact Us');
	await press(page, 'Content & Data');

	// Step 16. Check all permissions under *General Permissions* and *Resource Permissions*.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 17. Click *Save*.
	await press(page, 'Save');

});
