/**
 * Building the Form
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

test('Building the Form', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Go to Clarity's public enterprise website and begin editing the *Contact Us* page.
	// Not performed: no control or value named in this step.

	// Step 3. Drag and drop a *Form Container* into the Contact Form container:
	// Not performed: no control or value named in this step.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/09-building-claritys-contact-us-form/images/06.png'});

	// Step 4. Select the form container and configure these settings:
	// Not performed: no control or value named in this step.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/09-building-claritys-contact-us-form/images/07.png'});

	// Step 5. Go to the *General* tab, click the Content Type drop-down menu, and select *Contact Us*.
	await press(page, 'General');
	await press(page, 'Contact Us');

	// Step 6. Select all fields except External Reference Code and click *Save*.
	await press(page, 'Save');

	// Step 7. Click *Add Localization Select*.
	await press(page, 'Add Localization Select');

	// Step 8. Select the *Localization Select* fragment and configure these settings:
	await press(page, 'Localization Select');

	// Step 9. Drag and drop the field fragments into this order:
	// Not performed: no control or value named in this step.

	// Step 10. Select each of these field fragments and configure this setting:
	// Not performed: no control or value named in this step.

	// Step 11. Click *Publish*.
	await press(page, 'Publish');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/09-building-claritys-contact-us-form/images/08.png'});

	// Step 12. Test the form by submitting an entry.
	// Not performed: no control or value named in this step.

	// Step 13. Click the *Site Menu* (![](../../images/icon-menu.png)), expand *Content & Data*, and click *Contact Us*. The 
	await press(page, 'Site Menu');
	await press(page, 'Content & Data');
	await press(page, 'Contact Us');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/09-building-claritys-contact-us-form/images/09.png'});

	// Step 14. Click to view the entry and try to change the language locale to `es-ES`.
	// Not performed: no control or value named in this step.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/09-building-claritys-contact-us-form/images/10.png'});

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/09-building-claritys-contact-us-form/images/11.png'});

});
