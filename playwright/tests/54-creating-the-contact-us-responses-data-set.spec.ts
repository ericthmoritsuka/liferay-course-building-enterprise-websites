/**
 * Creating the Contact Us Responses Data Set
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

test('Creating the Contact Us Responses Data Set', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Control Panel* tab, and clic
	await openMenu(page, 'Global Menu', 'Control Panel', 'Data Sets');

	// Step 2. Click *Add* to create a new data set and enter these details:
	await press(page, 'Add');
	await fill(page, 'Name', 'Contact Us Responses');
	// Not entered: REST Application, REST Schema, REST Endpoint - chosen from a control rather than typed.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/10-creating-a-dashboard-for-contact-us-responses/images/09.png'});

	// Step 3. Click *Save*.
	await press(page, 'Save');

	// Step 4. Click *Contact Us Responses* to begin editing it.
	await press(page, 'Contact Us Responses');

	// Step 5. Add this value to the Parameters input box:
	// Not performed: the step does not name a field and a value plainly enough.

	// Step 6. Click*Save*.
	await press(page, 'Save');

	// Step 7. Go to the *Visualization Modes* tab.
	await press(page, 'Visualization Modes');

	// Step 8. Go to the *List* tab.
	await press(page, 'List');

	// Step 9. Click *Add* (![](../../images/icon-plus.png)) for the Title row and select *Assign from Data Source*.
	await press(page, 'Add', 'Title row');
	await press(page, 'Assign from Data Source');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/10-creating-a-dashboard-for-contact-us-responses/images/10.png'});

	// Step 10. Select the *fullName* field.
	await press(page, 'fullName');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/10-creating-a-dashboard-for-contact-us-responses/images/11.png'});

	// Step 11. Click *Save*.
	await press(page, 'Save');

	// Step 12. Click *Add* (![](../../images/icon-plus.png)) for the Description row and select *Add Field Manually*.
	await press(page, 'Add', 'Description row');
	await press(page, 'Add Field Manually');

	// Step 13. For Field Name, type `comment`.
	await fill(page, 'Field Name', 'comment');

	// Step 14. Click *Add*.
	await press(page, 'Add');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/10-creating-a-dashboard-for-contact-us-responses/images/12.png'});

});
