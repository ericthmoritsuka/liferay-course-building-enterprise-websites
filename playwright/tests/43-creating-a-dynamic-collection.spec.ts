/**
 * Creating a Dynamic Collection
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/06-content-authoring-and-management/06-displaying-claritys-content.md.
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

test('Creating a Dynamic Collection', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Open the Site Menu (![](../../images/icon-product-menu.png)), expand Site Builder, and select Collections.
	await openMenu(page, 'Site Menu', 'Site Builder', 'Collections');

	// Step 2. Click *New* and select *Dynamic Collection*.
	await press(page, 'New');
	await press(page, 'Dynamic Collection');

	// Step 3. For Title, enter `FAQ - Retail Partners` and click *Save*.
	await press(page, 'Save');

	// Step 4. For Item Type, select Single Item Type > *Web Content Article*.
	await press(page, 'Web Content Article');

	// Step 5. For Item Subtype, select Single Item Type > *FAQ*.
	await press(page, 'FAQ');

	// Step 6. Expand *Scope*, click *Select,* then click *Other Site or Asset Library...*.
	await press(page, 'Scope');
	await press(page, 'Select');
	await press(page, 'Other Site or Asset Library');

	// Step 7. Go to the *Asset Libraries* tab and click *Marketing Assets*.
	await press(page, 'Asset Libraries');
	await press(page, 'Marketing Assets');

	// Step 8. Expand *Filter,* set the rule to Contains All of the following *Categories*, and click the category selection 
	await press(page, 'Filter');
	await press(page, 'Categories');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/06-displaying-claritys-content/images/11.png'});

	// Step 9. Click *Retail Partners* then click *Save* to create the collection.
	await press(page, 'Retail Partners');
	await press(page, 'Save');

	// Step 10. Click *Save* to create the collection.
	await press(page, 'Save');

	// Step 11. Repeat steps 2-10 to create three more dynamic collections:
	// Not performed: no control or value named in this step.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/06-displaying-claritys-content/images/12.png'});

});
