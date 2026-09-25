/**
 * Adding Categories to a Vocabulary
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/06-content-authoring-and-management/05-organizing-claritys-content.md.
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

test('Adding Categories to a Vocabulary', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. In the Categories application, select the *FAQ* vocabulary in the Vocabularies sidebar.
	await press(page, 'FAQ');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/05-organizing-claritys-content/images/06.png'});

	// Step 2. Click *New* and enter `Retail Partners` for Name.
	await press(page, 'New');

	// Step 3. Click *Save* to add the category.
	await press(page, 'Save');

	// Step 4. Repeat steps 2-3 to add three more categories to the FAQ vocabulary:
	// Not performed: no control or value named in this step.

	// Step 5. Go to the Marketing Assets library's web content.
	// Not performed: no control or value named in this step.

	// Step 6. In the *FAQ* folder, go to *Returns and Exchanges* and edit the *What is your return policy?*article.
	await press(page, 'Returns and Exchanges');
	await press(page, 'What is your return policy?');

	// Step 7. In the right sidebar, expand *Categorization* and click *Select* next to FAQ.
	await press(page, 'Categorization');
	await press(page, 'Select', 'FAQ');

	// Step 8. Select the Returns and Exchanges checkbox and click *Done*, then click *Publish*.
	await press(page, 'Done');
	await press(page, 'Publish');

	// Step 9. Repeat steps 6-8 for the other eight FAQ articles, assigning the category that matches their folder name.
	// Not performed: no control or value named in this step.

});
