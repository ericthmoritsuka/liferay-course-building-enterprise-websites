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
import {signIn} from '../helpers/sign-in';

test('Creating an Object Definition', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Control Panel* tab, and clic
	await openMenu(page, 'Global Menu', 'Control Panel', 'Objects');

	// Step 2. Click *New*.
	await press(page, 'New');

	// Step 3. Enter these details:
	// Not performed: the step does not name a field and a value plainly enough.

	// Step 4. Click *Save*.
	await press(page, 'Save');

	// Step 5. From the Objects overview page, click *Contact Us* to begin editing the object definition.
	await press(page, 'Contact Us');

	// Step 6. In the Details tab, configure these settings:
	// Not performed: no control or value named in this step.

	// Step 7. Click *Save*.
	await press(page, 'Save');

	// Step 8. Go to the *Fields* tab.
	// Not performed: no control or value named in this step.

	// Step 9. Click *New*, enter these details, and click *Save*:
	await press(page, 'New');
	await press(page, 'Save');

	// Step 10. Repeat the previous step to create the remaining six fields:
	// Not performed: no control or value named in this step.

	// Step 11. Return to the *Details* tab and click *Publish*.
	await press(page, 'Publish');

	// Step 12. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Control Panel* tab, and clic
	await openMenu(page, 'Global Menu', 'Control Panel', 'Roles');

	// Step 13. In the *Regular Roles* tab, click *Web Developer* to edit that role.
	await press(page, 'Web Developer');

	// Step 14. Go to the *Define Permissions* tab and search for `Contact Us`.
	// Not performed: no control or value named in this step.

	// Step 15. Click on *Contact Us* in the *Content & Data* section.
	await press(page, 'Contact Us');
	await press(page, 'Content & Data');

	// Step 16. Check all permissions under *General Permissions* and *Resource Permissions*.
	// Not performed: no control or value named in this step.

	// Step 17. Click *Save*.
	await press(page, 'Save');

});
