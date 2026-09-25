/**
 * Adding Search Capabilities to Product Pages
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/09-search/03-setting-up-claritys-search-pages.md.
 * Edit the lesson and regenerate; edits here are overwritten.
 *
 * A pass means nothing blocked a reader. It does not mean the
 * exercise built the right thing - nothing records what it should
 * build.
 */
import {test} from '@playwright/test';

import {fill, openMenu, press} from '../helpers/liferay';
import {signIn} from '../helpers/sign-in';

test('Adding Search Capabilities to Product Pages', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Go to Clarity's *Product List* page and observe the included components.
	// Not performed: no control or value named in this step.

	// Step 2. Begin editing the page.
	// Not performed: no control or value named in this step.

	// Step 3. From the *Components* panel, drag and drop a *Category Facet* widget into the grid's left module between the s
	// Not performed: no control or value named in this step.

	// Step 4. Select the new *Category Facet* widget, click its *Actions* button (![](../../images/icon-actions.png)), and s
	await press(page, 'Category Facet');
	await press(page, 'Actions');
	await press(page, 'Configuration');

	// Step 5. For Display Template, select the *Clarity Search Category* template.
	await press(page, 'Clarity Search Category');

	// Step 6. For Display Template, select the *Clarity Search Category* template.
	await press(page, 'Clarity Search Category');

	// Step 7. Click *Publish*.
	await press(page, 'Publish');

});
