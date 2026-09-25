/**
 * Creating a Vocabulary
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

test('Creating a Vocabulary', async ({page}) => {
	await signIn(page, 'christian');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Applications* tab, and click
	await openMenu(page, 'Global Menu', 'Applications', 'Asset Libraries');

	// Step 3. Select the *Marketing Assets* library and click *Categories*.
	await press(page, 'Marketing Assets');
	await press(page, 'Categories');

	// Step 4. Click *Add* (![](../../images/icon-plus.png)) next to Vocabularies to create a new vocabulary.
	await press(page, 'Add');

	// Step 5. Enter these details:
	// Not performed: the step does not name a field and a value plainly enough.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/05-organizing-claritys-content/images/05.png'});

	// Step 6. Click *Save* then *Ok*to confirm and create the vocabulary.
	await press(page, 'Save');
	await press(page, 'Ok');

});
