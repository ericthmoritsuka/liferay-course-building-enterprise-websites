/**
 * Mapping Content to Fragments
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/06-content-authoring-and-management/04-creating-and-mapping-claritys-content.md.
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

test('Mapping Content to Fragments', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Begin editing Clarity's *Home* page.
	await press(page, 'Home');

	// Step 3. In the *Browser* side panel (![](../../images/icon-browser.png)), select the *Banner* container.
	await press(page, 'Banner');

	// Step 4. Select the *Image* fragment in the *Banner* container.
	await press(page, 'Image');
	await press(page, 'Banner');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/04-creating-and-mapping-claritys-content/images/11.png'});

	// Step 5. Select the fragment's *image-square* sub-element to access its mapping options.
	await press(page, 'image-square');

	// Step 6. For Source Selection, select *Mapping*.
	await press(page, 'Mapping');

	// Step 7. For Item, click *Select Item* (![](../../images/icon-plus.png)).
	await press(page, 'Select Item');

	// Step 8. Go to the *Documents and Media* tab and click *Sites and Libraries* in the breadcrumb menu.
	// Not performed: this step opens the file chooser the next step cannot use.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 9. Go to the *Asset Library* tab, select *Marketing Assets*, and select the image named `home-banner-narrow-no-ba
	// Not performed: this step picks a file from disk, which a browser test cannot do.

	// Step 10. For Field, select *File URL*. The image should appear in the Home page banner.
	await press(page, 'File URL');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/04-creating-and-mapping-claritys-content/images/13.png'});

	// Step 11. Repeat steps 4-10 for the *Image* fragment in the Clarity Solutions Promo container, selecting the `sunglasses
	// Not performed: no control or value named in this step.

	// Step 12. In the Browser side panel (![](../../images/icon-browser.png)), select the Content Wrapper container in the Cl
	// Not performed: no control or value named in this step.

	// Step 13. In the configuration side panel, go to the *Styles* tab.
	await press(page, 'Styles');

	// Step 14. Under Background, set Image Source to *Mapping* and select the `gradient-overlay` image from the Marketing Ass
	await press(page, 'Mapping');

	// Step 15. For Field, select *File URL*. The texture should overlay the gradient promotion.
	await press(page, 'File URL');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/04-creating-and-mapping-claritys-content/images/14.png'});

	// Step 16. Repeat steps 12-15 for the *Distributor Promo* container and select the `home-promotion` image from the Market
	await press(page, 'Distributor Promo');

	// Step 17. Select the *Banner Content* container and configure this setting:
	await press(page, 'Banner Content');
	// Not entered: General - chosen from a control rather than typed.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/04-creating-and-mapping-claritys-content/images/15.png'});

	// Step 18. Repeat the previous step for these three containers:
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 19. Click *Publish*.
	await press(page, 'Publish');

});
