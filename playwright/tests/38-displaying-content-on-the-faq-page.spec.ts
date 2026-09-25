/**
 * Displaying Content on the FAQ Page
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/06-content-authoring-and-management/06-displaying-claritys-content.md.
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

test('Displaying Content on the FAQ Page', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Begin editing the *FAQ* page.
	await press(page, 'FAQ');

	// Step 2. Double click the *Image* fragment to configure its image-square sub-element.
	await press(page, 'Image');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/06-displaying-claritys-content/images/13.png'});

	// Step 3. Set the image to `glasses-vertical-banner-with-text-lg` from the Marketing Assets library.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 4. In the first FAQ Section, which has a configured label of RETAIL PARTNERS, click *Select Collection* and click
	await press(page, 'Select Collection');
	await press(page, 'FAQ - Retail Partners');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/06-displaying-claritys-content/images/15.png'});

	// Step 5. In the configuration panel for the *Collection Display*, select *None* for Pagination and check *Display All C
	await press(page, 'None', 'Pagination');
	await press(page, 'Display All Collection Items');

	// Step 6. Select the *main-text* sub-element and set its Mapping Field to Basic Information > *Title*.
	await press(page, 'main-text');
	await press(page, 'Title');

	// Step 7. Select the *answer-text* sub-element and set its Mapping Field to Content (FAQ) > *Answer*.
	await press(page, 'answer-text');
	await press(page, 'Answer');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/06-displaying-claritys-content/images/16.png'});

	// Step 8. Repeat steps 4-7 for the other three FAQ Section fragments.
	// Not performed: no control or value named in this step.

	// Step 9. In the *Promoted Articles* container, map the Article Cards collection display to the Helpful Articles collect
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 10. For the collection display's Pagination, select *None*.
	await press(page, 'None');

	// Step 11. Select each of the following elements, set its Source Selection to *Mapping* (if applicable), and select the c
	await press(page, 'Mapping');

	// Step 12. Select the *card-link* sub-element, go to the *Link* tab.
	await press(page, 'card-link');
	await press(page, 'Link');

	// Step 13. For Link, select *Mapped URL*.
	await press(page, 'Mapped URL');

	// Step 14. For Field, select Display Page > *Default*.
	await press(page, 'Default');

	// Step 15. Select the *Banner Content* container and configure this setting:
	await press(page, 'Banner Content');
	// Not entered: General - chosen from a control rather than typed.

	// Step 16. Repeat step 15 for the *FAQ Content* container.
	// Not performed: no control or value named in this step.

	// Step 17. Click *Publish*.
	await press(page, 'Publish');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/06-displaying-claritys-content/images/18.png'});

});
