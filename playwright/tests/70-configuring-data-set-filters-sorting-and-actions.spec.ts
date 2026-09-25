/**
 * Configuring Data Set Filters, Sorting, and Actions
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

test('Configuring Data Set Filters, Sorting, and Actions', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. While editing the *Contact Us Responses* data set, go to the *Filters* tab, click *Add* (![](../../images/icon
	await press(page, 'Filters');
	await press(page, 'Add');
	await press(page, 'Date Range');

	// Step 2. Enter these details:
	// Not performed: the step does not name a field and a value plainly enough.

	// Step 3. Click *Save* to**create the filter.
	await press(page, 'Save');

	// Step 4. Click *Add* again and choose *Selection*.
	await press(page, 'Add');
	await press(page, 'Selection');

	// Step 5. Create a new filter with these details:
	// Not performed: no control or value named in this step.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/10-creating-a-dashboard-for-contact-us-responses/images/13.png'});

	// Step 6. Click *Save*.
	await press(page, 'Save');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/10-creating-a-dashboard-for-contact-us-responses/images/14.png'});

	// Step 7. Go to the *Sorting* tab and click *Add* (![](../../images/icon-plus.png)).
	await press(page, 'Sorting');
	await press(page, 'Add');

	// Step 8. Set Label to `Name` and Sort By to `fullName`.
	// Not performed: no control or value named in this step.

	// Step 9. Check the *Use as Default Sorting* checkbox and click *Save*.
	await press(page, 'Use as Default Sorting');
	await press(page, 'Save');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/10-creating-a-dashboard-for-contact-us-responses/images/15.png'});

	// Step 10. Repeat steps 7 and 8 to create two more sorting options:
	// Not performed: no control or value named in this step.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/10-creating-a-dashboard-for-contact-us-responses/images/16.png'});

	// Step 11. Go to the *Actions* tab, click *Add* (![](../../images/icon-plus.png)), and enter these details:
	await press(page, 'Actions');
	await press(page, 'Add');

	// Step 12. Open a new browser tab and go to `http://localhost:8080/web/clarity`
	// Not performed: no control or value named in this step.

	// Step 13. Open the Site Menu (![](../../images/icon-menu.png)), expand *Content & Data*, and select *Contact Us*.
	await openMenu(page, 'Site Menu', 'Content & Data', 'Contact Us');

	// Step 14. Click on the *ID* of any entry and copy the entire browser URL.
	await press(page, 'ID');

	// Step 15. Return to your data set browser tab and paste the copied value into the URL field.
	// Not performed: no control or value named in this step.

	// Step 16. At the end of the URL, change the individual entry's external reference code to {externalReferenceCode}
	// Not performed: no control or value named in this step.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/10-creating-a-dashboard-for-contact-us-responses/images/17.png'});

	// Step 17. Click *Save*.
	await press(page, 'Save');

	// Step 18. Repeat step 11 to create a second action:
	// Not performed: no control or value named in this step.

	// Step 19. Click *Save*.
	await press(page, 'Save');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/10-creating-a-dashboard-for-contact-us-responses/images/18.png'});

});
