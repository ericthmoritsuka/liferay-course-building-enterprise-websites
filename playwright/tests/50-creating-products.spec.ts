/**
 * Creating Products
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/06-content-authoring-and-management/07-using-claritys-products-as-content.md.
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

test('Creating Products', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Commerce* tab, and click *Pr
	await openMenu(page, 'Global Menu', 'Commerce', 'Products');

	// Step 2. Click *New* and select *Simple*.
	await press(page, 'New');
	await press(page, 'Simple');

	// Step 3. Enter the following:
	// Not performed: the step does not name a field and a value plainly enough.

	// Step 4. Click *Submit* to finish creating your product.
	await press(page, 'Submit');

	// Step 5. In the Full Description field editor, add a product description with the *AI Creator* button (![](../../images
	// Not performed: no control or value named in this step.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/07-using-claritys-products-as-content/images/07.png'});

	// Step 6. In the Categorization section, click *Select* for Clarity Products.
	await press(page, 'Select');

	// Step 7. Select *Sunglasses* and click *Done* to apply the category to this item.
	await press(page, 'Sunglasses');
	await press(page, 'Done');

	// Step 8. Scroll down to the Specifications section, click *New*, and select *Add an Existing Specification*.
	await press(page, 'New');
	await press(page, 'Add an Existing Specification');

	// Step 9. Enter these fields and click *Submit*:
	await press(page, 'Submit');

	// Step 10. Repeat steps 8-9 for the other specifications and enter these values:
	// Not performed: the step does not name a field and a value plainly enough.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/07-using-claritys-products-as-content/images/08.png'});

	// Step 11. Click *Save as Draft* to save your changes.
	await press(page, 'Save as Draft');

	// Step 12. Go to the *Media* tab.
	// Not performed: no control or value named in this step.

	// Step 13. For Images, click *New* and click *Select File*.
	await press(page, 'New');
	await press(page, 'Select File');

	// Step 14. Select the *classic-aviator-sunglasses* image from the Product Images asset library.
	await press(page, 'classic-aviator-sunglasses');

	// Step 15. Enter these details for the image:
	// Not performed: the step does not name a field and a value plainly enough.

	// Step 16. Click *Publish* to save the product image.
	await press(page, 'Publish');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/07-using-claritys-products-as-content/images/09.png'});

	// Step 17. Click *Publish* to finish creating the product.
	await press(page, 'Publish');

	// Step 18. Repeat steps 1-17 to create two more simple products: AquaComfort Plus Dailies and Single Vision Lenses.
	// Not performed: no control or value named in this step.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/07-using-claritys-products-as-content/images/10.png'});

});
