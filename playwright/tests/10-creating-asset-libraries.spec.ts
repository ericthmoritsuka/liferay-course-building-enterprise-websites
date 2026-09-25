/**
 * Creating Asset Libraries
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/06-content-authoring-and-management/03-managing-claritys-digital-assets.md.
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

test('Creating Asset Libraries', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Applications* tab, and click
	await openMenu(page, 'Global Menu', 'Applications', 'Asset Libraries');

	// Step 3. Click *New* and enter `Clarity Branding and Logo` for the name.
	await press(page, 'New');

	// Step 4. Click *Save*. This creates a library and redirects you to its configuration page.
	await press(page, 'Save');

	// Step 5. Go to the *Sites* tab in the sidebar menu.
	// Not performed: no control or value named in this step.

	// Step 6. Click *Add* and select *Clarity Public Enterprise Website*.
	await press(page, 'Add');
	await press(page, 'Clarity Public Enterprise Website');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/03-managing-claritys-digital-assets/images/03.png'});

	// Step 7. Return to the *Asset Libraries* overview page.
	// Not performed: no control or value named in this step.

	// Step 8. Click *Clarity Branding and Logo* to access its applications and begin adding content.
	await press(page, 'Clarity Branding and Logo');

	// Step 9. Select *Documents and Media*.
	await press(page, 'Documents and Media');

	// Step 10. Click *New* and select *Multiple Files Upload*.
	await press(page, 'New');
	await press(page, 'Multiple Files Upload');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/03-managing-claritys-digital-assets/images/04.png'});

	// Step 11. Select all 12 logo images from your course workspace's `/exercises/module-6/` resources folder.
	// Not performed: no control or value named in this step.

	// Step 12. Click *Publish*.
	await press(page, 'Publish');

});
