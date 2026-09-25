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
import {signIn} from '../helpers/sign-in';

test('Adding Categories to a Vocabulary', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. In the Categories application, select the *FAQ* vocabulary in the Vocabularies sidebar.
	await press(page, 'FAQ');

	// Step 2. Click *New* and enter `Retail Partners` for Name.
	await press(page, 'New');

	// Step 3. Click *Save* to add the category.
	await press(page, 'Save');

	// Step 4. Repeat steps 2-3 to add three more categories to the FAQ vocabulary:
	// Not performed: no control or value named in this step.

	// Step 5. Go to the Marketing Assets library's web content.
	// Not performed: no control or value named in this step.

	// Step 6. In the *FAQ* folder, go to *Returns and Exchanges* and edit the *What is your return policy?*article.
	// Not performed: no control or value named in this step.

	// Step 7. In the right sidebar, expand *Categorization* and click *Select* next to FAQ.
	await press(page, 'Categorization');
	await press(page, 'Select');

	// Step 8. Select the Returns and Exchanges checkbox and click *Done*, then click *Publish*.
	await press(page, 'Done');
	await press(page, 'Publish');

	// Step 9. Repeat steps 6-8 for the other eight FAQ articles, assigning the category that matches their folder name.
	// Not performed: no control or value named in this step.

});
