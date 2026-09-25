/**
 * Using Headless to Import Taxonomy Categories
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

test('Using Headless to Import Taxonomy Categories', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Applications* tab, and click
	await openMenu(page, 'Global Menu', 'Applications', 'Asset Libraries');

	// Step 2. Select the *HR* library and click *Categories*.
	await press(page, 'HR');
	await press(page, 'Categories');

	// Step 3. Go to the *Location* vocabulary in the left side menu.
	await press(page, 'Location');

	// Step 4. In your browser's navigation bar, take note of the vocabulary ID that appears in the page URL. For example, `(
	// Not performed: no control or value named in this step.

	// Step 5. Open a new browser window and access Liferay's API Explorer at `http://localhost:8080/o/api`.
	// Not performed: no control or value named in this step.

	// Step 6. Click the *REST Applications* drop-down menu and select *headless-admin-taxonomy/v1.0*.
	await press(page, 'REST Applications');
	await press(page, 'headless-admin-taxonomy/v1.0');

	// Step 7. Scroll down to the *TaxonomyCategory* section and expand the *postTaxonomyVocabularyTaxonomyCategoryBatch* end
	await press(page, 'postTaxonomyVocabularyTaxonomyCategoryBatch');

	// Step 8. For taxonomyVocabularyId, enter the Location vocabulary ID.
	// Not performed: this step opens the file chooser the next step cannot use.

	// Step 9. Open and copy the `exercises/module-8/` `import-taxonomy-categories-batch.json` file's contents from your cour
	// Not performed: this step picks a file from disk, which a browser test cannot do.

	// Step 10. Paste its contents into the Request Body field in place of the placeholder text.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 11. Click *Execute*.
	await press(page, 'Execute');

	// Step 12. Return to the HR Asset Library window and refresh the page.
	// Not performed: no control or value named in this step.

	// Step 13. Click *HR* in the breadcrumb menu to return to the library overview page.
	await press(page, 'HR');

	// Step 14. Click *Web Content* and open the *Job Listings* folder.
	await press(page, 'Web Content');
	await press(page, 'Job Listings');

	// Step 15. Begin editing an article and assign any of the newly added locations (e.g. *Morocco, Casablanca*).
	await press(page, 'Morocco, Casablanca');

	// Step 16. Click *Publish*. You can now search for the content using the new location category.
	await press(page, 'Publish');

});
