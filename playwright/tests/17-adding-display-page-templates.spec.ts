/**
 * Adding Display Page Templates
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/05-site-building/04-adding-pages-to-claritys-site.md.
 * Edit the lesson and regenerate; edits here are overwritten.
 *
 * A pass means nothing blocked a reader. It does not mean the
 * exercise built the right thing - nothing records what it should
 * build.
 */
import {test} from '@playwright/test';

import {fill, openMenu, press} from '../helpers/liferay';
import {signIn} from '../helpers/sign-in';

test('Adding Display Page Templates', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Design*, and click *Page Templates*.
	await openMenu(page, 'Site Menu', 'Design', 'Page Templates');

	// Step 2. Go to the *Display Page Templates* tab.
	// Not performed: no control or value named in this step.

	// Step 3. Click *New* and select *Display Page Template*.
	await press(page, 'New');
	await press(page, 'Display Page Template');

	// Step 4. Select *Blank*.
	await press(page, 'Blank');

	// Step 5. For Name, enter `Leadership Profile`.
	await fill(page, 'Name', 'Leadership Profile');

	// Step 6. For Content Type, select *Web Content Article*.
	await press(page, 'Web Content Article');

	// Step 7. For Subtype, select *Leadership Profile*.
	await press(page, 'Leadership Profile');

	// Step 8. Click *Save*.
	await press(page, 'Save');

	// Step 9. For now, leave the template blank and click *Publish*.
	await press(page, 'Publish');

	// Step 10. Click *Actions* (![](../../images/icon-actions.png)) for the Leadership Profile template and select *Mark as D
	await press(page, 'Actions');
	await press(page, 'Mark as Default');

});
