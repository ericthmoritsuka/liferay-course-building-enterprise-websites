/**
 * Creating Clarity`s Calendar Page
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/09-search/04-personalizing-claritys-search-experiences.md.
 * Edit the lesson and regenerate; edits here are overwritten.
 *
 * A pass means nothing blocked a reader. It does not mean the
 * exercise built the right thing - nothing records what it should
 * build.
 */
import {test} from '@playwright/test';

import {fill, openMenu, press} from '../helpers/liferay';
import {signIn} from '../helpers/sign-in';

test('Creating Clarity`s Calendar Page', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Site Builder*, and click *Pages*.
	await openMenu(page, 'Site Menu', 'Site Builder', 'Pages');

	// Step 2. Click *New* and select *Primary Master Page*.
	await press(page, 'New');
	await press(page, 'Primary Master Page');

	// Step 3. For Name, enter `Calendar`.
	await fill(page, 'Name', 'Calendar');

	// Step 4. Click *Add*.
	await press(page, 'Add');

	// Step 5. In the *Components* side panel, go to the *Widgets* tab.
	// Not performed: no control or value named in this step.

	// Step 6. Drag and drop the *Calendar* widget into the page.
	// Not performed: no control or value named in this step.

	// Step 7. From the *Fragments* panel, drag and drop a *Container* fragment above the Calendar widget.
	// Not performed: no control or value named in this step.

	// Step 8. Select the *container* and configure these settings in the configuration side panel:
	await press(page, 'container');

	// Step 9. From the *Fragments* panel, drag and drop a *Heading* fragment into the container.
	// Not performed: no control or value named in this step.

	// Step 10. Set the Heading fragment's text to `Upcoming Events`.
	// Not performed: no control or value named in this step.

	// Step 11. From the *Fragments* panel, drag and drop a *Collection Display* into the container, below the Heading.
	// Not performed: no control or value named in this step.

	// Step 12. Click *Publish*.
	await press(page, 'Publish');

	// Step 13. In the list of site pages, click *Actions* (![](../../images/icon-options.png)) for the Calendar page and sele
	await press(page, 'Actions');
	await press(page, 'View');

	// Step 14. Select the *Month* view and click any date before your current date, enter `Past Job Fair` as the name, and cl
	await press(page, 'Month');
	await press(page, 'Save');

	// Step 15. Click any date that is after your current date, enter `Upcoming Job Fair` as the name, and click *Save*.
	await press(page, 'Save');

	// Step 16. Add one more event after Upcoming Job Fair named `Campus Recruiting Event`.
	// Not performed: no control or value named in this step.

});
