/**
 * Using Headless APIs to Batch Import Web Content
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

test('Using Headless APIs to Batch Import Web Content', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Return to the API Explorer browser tab: `http://localhost:8080/o/api`.
	// Not performed: no control or value named in this step.

	// Step 2. Scroll down to the StructuredContent section and expand the *postSiteStructuredContentBatch* endpoint.
	// Not performed: no control or value named in this step.

	// Step 3. For siteId, enter the site ID for Clarity Public Enterprise Website.
	// Not performed: the step does not name a field and a value plainly enough.

	// Step 4. Open and copy the contents of the `exercises/module-8/` `import-web-content-articles-batch.json` file from you
	// Not performed: no control or value named in this step.

	// Step 5. Paste its contents into the Request Body field in place of the placeholder text.
	// Not performed: no control or value named in this step.

	// Step 6. Click *Execute*.
	await press(page, 'Execute');

	// Step 7. Return to the Clarity Public Enterprise Website window, open the *Site Menu* (![](../../images/icon-product-me
	await openMenu(page, 'Site Menu', 'Content & Data', 'Web Content');

	// Step 8. Open the *Articles* folder and confirm the three new articles appear.
	// Not performed: no control or value named in this step.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/08-headless-apis/04-using-apis-to-import-claritys-content/images/03.png'});

});
