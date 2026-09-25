/**
 * Creating Custom Fragments
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/05-site-building/08-creating-custom-fragments-for-clarity.md.
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

test('Creating Custom Fragments', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Design*, and click *Fragments*.
	await openMenu(page, 'Site Menu', 'Design', 'Fragments');

	// Step 3. Under Fragment Sets, click *Clarity Components*.
	await press(page, 'Clarity Components');

	// Step 4. Click *New*, select *Basic Fragment*, and click *Next*.
	await press(page, 'New');
	await press(page, 'Basic Fragment');
	await press(page, 'Next');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/08-creating-custom-fragments-for-clarity/images/03.png'});

	// Step 5. For name, enter `Search Button` and click *Add*.
	await fill(page, 'name', 'Search Button');
	await press(page, 'Add');

	// Step 6. Go to the *Configuration* tab.
	// Not performed: this step opens the file chooser the next step cannot use.

	// Step 7. In your course workspace, open the `exercises/module-5/search-button-configuration.json` file and copy its con
	// Not performed: this step picks a file from disk, which a browser test cannot do.

	// Step 8. Navigate back to the Search Button fragment and replace the placeholder text in the editor with the copied .js
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 9. In your course workspace, open the `exercises/module-5/search-button.ftl` file and copy its contents.
	// Not performed: no control or value named in this step.

	// Step 10. Navigate back to the Search Button fragment, go to the Code tab, and replace the placeholder HTML code with th
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 11. Click *Publish*.
	await press(page, 'Publish');

});
