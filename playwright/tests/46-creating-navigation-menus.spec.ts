/**
 * Creating Navigation Menus
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/05-site-building/07-creating-claritys-navigation-menus.md.
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

test('Creating Navigation Menus', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Site Builder*, and click *Navigation M
	await openMenu(page, 'Site Menu', 'Site Builder', 'Navigation Menus');

	// Step 3. Click *New*.
	await press(page, 'New');

	// Step 4. For Name, enter `Header Page Menu`.
	await fill(page, 'Name', 'Header Page Menu');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/07-creating-claritys-navigation-menus/images/02.png'});

	// Step 5. Click *Save*.
	await press(page, 'Save');

	// Step 6. Click *Add*. This displays a list of available types of items you can add to the menu.
	await press(page, 'Add');

	// Step 7. Select the *Page* item type.
	await press(page, 'Page');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/07-creating-claritys-navigation-menus/images/03.png'});

	// Step 8. Check these six pages:
	// Not performed: no control or value named in this step.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/07-creating-claritys-navigation-menus/images/04.png'});

	// Step 9. Click *Select*. This saves your menu changes.
	await press(page, 'Select');

	// Step 10. Click *Actions* (![](../../images/icon-actions.png)) for one of the menu items and select *View Info*.
	await press(page, 'Actions');
	await press(page, 'View Info');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/07-creating-claritys-navigation-menus/images/05.png'});

	// Step 11. Drag and drop the pages into this order:
	// Not performed: no control or value named in this step.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/07-creating-claritys-navigation-menus/images/06.png'});

	// Step 12. Return to the *Navigation Menus* overview page.
	// Not performed: no control or value named in this step.

	// Step 13. Select *Footer Resources Menu*.
	await press(page, 'Footer Resources Menu');

	// Step 14. Click *Add*.
	await press(page, 'Add');

	// Step 15. Select the *Page* item type.
	await press(page, 'Page');

	// Step 16. Check *FAQ*.
	// Not performed: no control or value named in this step.

	// Step 17. Click *Select*.
	await press(page, 'Select');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/07-creating-claritys-navigation-menus/images/07.png'});

});
