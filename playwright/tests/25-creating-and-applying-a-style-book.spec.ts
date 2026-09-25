/**
 * Creating and Applying a Style Book
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/05-site-building/09-applying-claritys-brand-styling.md.
 * Edit the lesson and regenerate; edits here are overwritten.
 *
 * A pass means nothing blocked a reader. It does not mean the
 * exercise built the right thing - nothing records what it should
 * build.
 */
import {test} from '@playwright/test';

import {fill, openMenu, openPageSettings, press} from '../helpers/liferay';
import {CAPTURE, capture} from '../helpers/screenshot';
import {signIn} from '../helpers/sign-in';

//
// The style guide's display width, captured at twice it.
//
test.use(CAPTURE);

test('Creating and Applying a Style Book', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Design*, and click *Style Books*.
	await openMenu(page, 'Site Menu', 'Design', 'Style Books');

	// Step 2. Click *New*.
	await press(page, 'New');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/09-applying-claritys-brand-styling/images/04.png'});

	// Step 3. Select *Classic Theme* for Create Style Book For.
	await press(page, 'Classic Theme', 'Create Style Book For');

	// Step 4. Name the Style Book `Clarity Style Book` and click *Save*.
	await press(page, 'Save');

	// Step 5. Ensure the upper right drop down is set to *Color System*.
	// Not performed: no control or value named in this step.

	// Step 6. In the *Brand Colors* section, click the color icon for Brand Color 1, and change its Hex value to Clarity's m
	await press(page, 'Brand Colors');

	// Step 7. Expand the *Theme Colors* section, click the color icon for Primary, and change its Hex value to Clarity's dar
	await press(page, 'Theme Colors');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/09-applying-claritys-brand-styling/images/05.png'});

	// Step 8. Click the *Color System* drop down and select *Buttons*.
	await press(page, 'Color System');
	await press(page, 'Buttons');

	// Step 9. In the *Button Primary* section, change these three values to Clarity's dark cyan color of `#187373`:
	// Not performed: no control or value named in this step.

	// Step 10. Click *Publish,*then confirm by clicking *Publish*again.
	await press(page, 'Publish');
	await press(page, 'Publish');

	// Step 11. Click *Actions* (![](../../images/icon-actions.png)) for the Clarity Style Book**and select *Mark as Default f
	await press(page, 'Actions');
	await press(page, 'Mark as Default for Classic Theme');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/09-applying-claritys-brand-styling/images/06.png'});

	// Step 12. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Design*, and click *Page Templates*.
	await openMenu(page, 'Site Menu', 'Design', 'Page Templates');

	// Step 13. Begin editing the *Primary Master Page*.
	await press(page, 'Primary Master Page');

	// Step 14. Click on *Page Design Options* (![](../../images/icon-look-and-feel-2.png)) in the left-side panel and select 
	await press(page, 'Page Design Options');
	await press(page, 'Clarity Style Book');

	// Step 15. Click *Publish Master* then confirm by clicking *Ok*.
	await press(page, 'Publish Master');
	await press(page, 'Ok');

	// Step 16. Repeat steps 13-16 to apply the Clarity Style Book to the *Secondary Master Page*.
	// Not performed: no control or value named in this step.

	// Step 17. Go to the site's Home page and observe the Start Your Journey button's new color.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

});
