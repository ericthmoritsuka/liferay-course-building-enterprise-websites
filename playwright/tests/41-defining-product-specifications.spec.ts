/**
 * Defining Product Specifications
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

test('Defining Product Specifications', async ({page}) => {
	await signIn(page, 'ian');

	// Step 1. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Commerce* tab, and click *Sp
	await openMenu(page, 'Global Menu', 'Commerce', 'Specifications');

	// Step 2. Click the *Specification Groups* tab.
	await press(page, 'Specification Groups');

	// Step 3. Click *New* to add a new specification group.
	await press(page, 'New');

	// Step 4. Enter the following:
	await fill(page, 'Title', 'Frame Description');
	await fill(page, 'Priority', '10.0');
	await fill(page, 'Key', 'frame-description');

	// Step 5. Click *Save* to finish creating your product specification group.
	await press(page, 'Save');

	// Step 6. Return to the *Specification Groups* overview and go to the *Specification Labels* tab.
	await press(page, 'Specification Labels');

	// Step 7. Click *New* to add a new specification.
	await press(page, 'New');

	// Step 8. Enter the following:
	await fill(page, 'Label', 'Frame Material');
	await fill(page, 'Description', 'The material of the frame.');
	await fill(page, 'Key', 'frame-material');
	// Not entered: Use in Faceted Navigation, Default Specification Group - chosen from a control rather than typed.

	// Step 9. Click *Save* to finish creating your specification label.
	await press(page, 'Save');

	// Step 10. Create two more specifications with these values:
	await fill(page, 'Label', 'Frame Color');
	await fill(page, 'Description', 'The color of the frame.');
	await fill(page, 'Key', 'frame-color');
	await fill(page, 'Label', 'Frame Size');
	await fill(page, 'Description', 'The size of the frame (in default units).');
	await fill(page, 'Key', 'frame-size');
	// Not entered: Use in Faceted Navigation, Default Specification Group - chosen from a control rather than typed.

	// Step 11. Return to the *Specification Labels* page.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

});
