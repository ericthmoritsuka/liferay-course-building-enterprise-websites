/**
 * Creating a Picklist
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

test('Creating a Picklist', async ({page}) => {
	await signIn(page, 'ian');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Control Panel* tab, and clic
	await openMenu(page, 'Global Menu', 'Control Panel', 'Picklists');

	// Step 3. Click New (![](../../images/icon-plus.png)).
	// Not performed: no control or value named in this step.

	// Step 4. Enter `Inquiry Nature` for the Name and click *Save*.
	await press(page, 'Save');

	// Step 5. Click on the newly created *Inquiry Nature* picklist to add items to it.
	await press(page, 'Inquiry Nature');

	// Step 6. Under the Items section, click *New* (![](../../images/icon-plus.png)) and create the following items one by o
	await press(page, 'New');

	// Step 7. Click *Sales* and observe its language selector.
	await press(page, 'Sales');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/09-building-claritys-contact-us-form/images/02.png'});

	// Step 8. Change the language selector to Spanish (**es_ES**), enter `Ventas` for the name, and click *Save*.
	await press(page, 'Save');

	// Step 9. Repeat steps 7-8 to add a Spanish translation for the other three items:
	// Not performed: no control or value named in this step.

	// Step 10. Click *Save*.
	await press(page, 'Save');

});
