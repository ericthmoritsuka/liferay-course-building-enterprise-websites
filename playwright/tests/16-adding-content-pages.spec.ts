/**
 * Adding Content Pages
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

test('Adding Content Pages', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Site Builder*, and click *Pages*.
	await openMenu(page, 'Site Menu', 'Site Builder', 'Pages');

	// Step 3. In the Static Pages tab, click *New* and select the *Primary Master Page* template.
	await press(page, 'New');
	await press(page, 'Primary Master Page');

	// Step 4. For name, enter `FAQ` and click *Add*.
	await press(page, 'Add');

	// Step 5. For now, leave the page blank and click *Publish*.
	await press(page, 'Publish');

	// Step 6. Drag and drop *Product Detail* onto *Product List;* then, drag and drop *Product List* onto *Products*.
	// Not performed: no control or value named in this step.

	// Step 7. Drag and drop *Open Positions* onto *Careers*.
	// Not performed: no control or value named in this step.

});
