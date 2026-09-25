/**
 * Connecting to Headless APIs Using the API Explorer
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

test('Connecting to Headless APIs Using the API Explorer', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Configuration*, and select *Site Setti
	await openMenu(page, 'Site Menu', 'Configuration', 'Site Settings');

	// Step 3. Select *Site Configuration* under Platform.
	await press(page, 'Site Configuration');

	// Step 4. Copy the *Site ID* and save it for a future step.
	// Not performed: no control or value named in this step.

	// Step 5. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Categorization*, and select *Categorie
	await openMenu(page, 'Site Menu', 'Categorization', 'Categories');

	// Step 6. Click *Blog Posts* under the Clarity vocabularies.
	await press(page, 'Blog Posts');

	// Step 7. Click the name of one of the categories in the list.
	// Not performed: no control or value named in this step.

	// Step 8. In your browser's navigation bar, make note of the category's ID that appears in the page URL. For example, `.
	// Not performed: no control or value named in this step.

	// Step 9. Open a new browser window and access Liferay's API Explorer at `http://localhost:8080/o/api`.
	// Not performed: no control or value named in this step.

	// Step 10. Scroll down to the *Document* section and expand the *postSiteDocument* endpoint.
	await press(page, 'postSiteDocument');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/08-headless-apis/04-using-apis-to-import-claritys-content/images/01.png'});

	// Step 11. For the siteId field, enter the site ID for Clarity Public Enterprise Website.
	// Not performed: the step does not name a field and a value plainly enough.

	// Step 12. For the document field, delete the default JSON content and uncheck *Send empty value*.
	// Not performed: this step opens the file chooser the next step cannot use.

	// Step 13. For file field, click *Choose File* and select the `/exercises/module-8/glasses-book.png` file from your cours
	// Not performed: this step picks a file from disk, which a browser test cannot do.

	// Step 14. Click *Execute*.
	await press(page, 'Execute');

	// Step 15. In the response body, look for the image's ID. For example:
	// Not performed: no control or value named in this step.

	// Step 16. Scroll up to the *BlogPosting* section and expand the *postSiteBlogPosting* endpoint.
	await press(page, 'postSiteBlogPosting');

	// Step 17. For siteId, enter the site ID for Clarity Public Enterprise Website.
	// Not performed: the step does not name a field and a value plainly enough.

	// Step 18. For Request Body, delete the default JSON content.
	// Not performed: this step opens the file chooser the next step cannot use.

	// Step 19. Open and copy the contents of the `exercises/module-8/blog-entry.json` file from your course workspace.
	// Not performed: this step picks a file from disk, which a browser test cannot do.

	// Step 20. Paste the structure into the postSiteBlogPosting's Request Body field.
	// Not performed: no control or value named in this step.

	// Step 21. Replace `{image-id}` and `{category-id}` with your image ID and the blog category ID, respectively.
	// Not performed: no control or value named in this step.

	// Step 22. Click *Execute*. Make sure the response code is `200`.
	await press(page, 'Execute');

	// Step 23. Return to the Clarity Public Enterprise Website window, open the *Site Menu* (![](../../images/icon-product-me
	await openMenu(page, 'Site Menu', 'Content & Data', 'Blogs');

	// Step 24. Confirm the `Things I Find Interesting in Eyewear` blog post appears.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

});
