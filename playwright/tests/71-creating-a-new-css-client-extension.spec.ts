/**
 * Creating a New CSS Client Extension
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/10-extending-liferay-dxp/03-extending-claritys-front-end.md.
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

test('Creating a New CSS Client Extension', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Applications* tab, and click
	await openMenu(page, 'Global Menu', 'Applications', 'Client Extensions');

	// Step 2. Click *New* and select *Add CSS*.
	await press(page, 'New');
	await press(page, 'Add CSS');

	// Step 3. For name, enter `Clarity Animation`.
	await fill(page, 'name', 'Clarity Animation');

	// Step 4. For CSS URL, enter `https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css`.
	await fill(page, 'CSS URL', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/10-extending-liferay-dxp/03-extending-claritys-front-end/images/05.png'});

	// Step 5. Click *Publish*.
	await press(page, 'Publish');

	// Step 6. Go to the *Home* page in the Clarity Public Enterprise Website.
	await press(page, 'Home');

	// Step 7. Click *Configure Page* (![](../../images/icon-cog.png)) and select the *Design* tab.
	await press(page, 'Configure Page');
	await press(page, 'Design');

	// Step 8. Scroll down and click *Add CSS Client Extensions*.
	await press(page, 'Add CSS Client Extensions');

	// Step 9. Select the checkbox for *Clarity Animation* and click *Add*.
	await press(page, 'Clarity Animation');
	await press(page, 'Add');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/10-extending-liferay-dxp/03-extending-claritys-front-end/images/06.png'});

	// Step 10. Scroll down and click *Save*.
	await press(page, 'Save');

	// Step 11. Return to the Home page, click *Edit* (![](../../images/icon-edit.png)), and click *Publish*.
	await press(page, 'Edit');
	await press(page, 'Publish');

	// Step 12. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Design*, and click *Fragments*.
	await openMenu(page, 'Site Menu', 'Design', 'Fragments');

	// Step 13. Under Fragment Sets, click *Clarity Components*.
	await press(page, 'Clarity Components');

	// Step 14. Select the *Clarity Gradient Container* fragment to begin editing it.
	await press(page, 'Clarity Gradient Container');

	// Step 15. Open and copy the contents of the `/exercises/module-10/clarity-animation.html` file from your course workspac
	// Not performed: no control or value named in this step.

	// Step 16. Paste its contents into the fragment's HTML field.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 17. Click *Publish*.
	await press(page, 'Publish');

	// Step 18. Click *Actions* (![](../../images/icon-actions.png)) for the Clarity Gradient Container fragment, and select *
	await press(page, 'Actions', 'Clarity Gradient Container fragment');
	await press(page, 'View Usages');

	// Step 19. Check all boxes and click *Propagate*.
	await press(page, 'Propagate');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/10-extending-liferay-dxp/03-extending-claritys-front-end/images/08.png'});

	// Step 20. Go to the Home Page and confirm the animation works, fading in the See Further with Clarity Vision Solutions s
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

});
