/**
 * Adding Clarity's Logo to the Master Pages
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/06-content-authoring-and-management/03-managing-claritys-digital-assets.md.
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

test('Adding Clarity\'s Logo to the Master Pages', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. From the *Clarity Public Enterprise Website*, open the *Site Menu* (![](../../images/icon-menu.png)), expand *
	await openMenu(page, 'Site Menu', 'Design', 'Page Templates');

	// Step 2. In the *Masters* tab, click *Primary Master Page* to begin editing it.
	await press(page, 'Primary Master Page');

	// Step 3. Double click the header's *Image* fragment.
	await press(page, 'Image');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/03-managing-claritys-digital-assets/images/06.png'});

	// Step 4. In the configuration side panel, click *Select Image* (![](../../images/icon-plus.png)).
	await press(page, 'Select Image');

	// Step 5. Click *Sites and Libraries* in the breadcrumb menu.
	await press(page, 'Sites and Libraries');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/03-managing-claritys-digital-assets/images/07.png'});

	// Step 6. Go to the *Asset Library* tab.
	await press(page, 'Asset Library');

	// Step 7. Select *Clarity Branding and Logo*.
	await press(page, 'Clarity Branding and Logo');

	// Step 8. Select `logo-name-vector` to add the image to the header.
	// Not performed: no control or value named in this step.

	// Step 9. In the configuration side panel, configure these settings for the image-square element:
	// Not entered: Link - chosen from a control rather than typed.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 10. Repeat steps 3-9 for the footer image fragment, instead selecting the `logo-full-name-vector` image.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 11. Click *Publish Master* and confirm with *Ok* to save your changes to the primary master page.
	await press(page, 'Publish Master');
	await press(page, 'Ok');

	// Step 12. Repeat steps 1-9 to update the header image in the *Secondary Master Page* template to use `logo-name-vector`.
	// Not performed: no control or value named in this step.

});
