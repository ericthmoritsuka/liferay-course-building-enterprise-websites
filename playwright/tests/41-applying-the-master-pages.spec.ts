/**
 * Applying the Master Pages
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/05-site-building/06-designing-claritys-master-pages.md.
 * Edit the lesson and regenerate; edits here are overwritten.
 *
 * A pass means nothing blocked a reader. It does not mean the
 * exercise built the right thing - nothing records what it should
 * build.
 */
import {test} from '@playwright/test';

import {fill, openMenu, press} from '../helpers/liferay';
import {signIn} from '../helpers/sign-in';

test('Applying the Master Pages', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Design*, click *Page Templates* and go
	await openMenu(page, 'Site Menu', 'Design', 'Page Templates');

	// Step 2. Click Leadership Profile to edit it.
	// Not performed: no control or value named in this step.

	// Step 3. Click the Page Design Options tab (![](../../images/icon-look-and-feel-2.png)) in the left side panel.
	// Not performed: no control or value named in this step.

	// Step 4. Select the *Secondary Master Page*.
	await press(page, 'Secondary Master Page');

	// Step 5. Click *Publish*.
	await press(page, 'Publish');

	// Step 6. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Site Builder*, and click *Pages*.
	await openMenu(page, 'Site Menu', 'Site Builder', 'Pages');

	// Step 7. Repeat steps 2-5 to edit the *Home* and *Sign In* content pages' master templates. Set the Home page's master 
	// Not performed: no control or value named in this step.

});
