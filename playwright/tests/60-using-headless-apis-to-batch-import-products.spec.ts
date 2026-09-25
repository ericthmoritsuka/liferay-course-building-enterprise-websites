/**
 * Using Headless APIs to Batch Import Products
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/08-headless-apis/04-using-apis-to-import-claritys-content.md.
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

test('Using Headless APIs to Batch Import Products', async ({page}) => {
	await signIn(page, 'ian');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Commerce* tab, and click *Pr
	await openMenu(page, 'Global Menu', 'Commerce', 'Products');

	// Step 3. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Commerce* tab, and click *Ca
	await openMenu(page, 'Global Menu', 'Commerce', 'Catalogs');

	// Step 4. Click *Clarity Eyewear*.
	await press(page, 'Clarity Eyewear');

	// Step 5. Open a new browser window and access Liferay's API Explorer at `http://localhost:8080/o/api`.
	// Not performed: no control or value named in this step.

	// Step 6. Click the *REST Applications* drop-down menu and select *headless-commerce-admin-catalog/v1.0*.
	await press(page, 'REST Applications');
	await press(page, 'headless-commerce-admin-catalog/v1.0');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/08-headless-apis/04-using-apis-to-import-claritys-content/images/04.png'});

	// Step 7. Scroll down to the Product section and expand the *postProductBatch* endpoint.
	await press(page, 'postProductBatch');

	// Step 8. Open and copy the contents of the `exercises/module-8/import-products-batch.json` file in your course workspac
	// Not performed: no control or value named in this step.

	// Step 9. Paste its contents into the *Request Body* field in place of the placeholder text.
	// Not performed: no control or value named in this step.

	// Step 10. Replace `{catalog-id}` for all products with the Clarity Eyewear catalog ID identified in step 4.
	// Not performed: no control or value named in this step.

	// Step 11. Click *Execute*.
	await press(page, 'Execute');

	// Step 12. Return to the Clarity Public Enterprise Website window, open the *Global Menu* (![](../../images/icon-applicat
	await openMenu(page, 'Global Menu', 'Commerce', 'Products');

	// Step 13. Confirm eight new products appear.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

});
