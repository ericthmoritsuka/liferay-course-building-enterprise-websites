/**
 * Adding Custom Fragments to Master Pages
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/05-site-building/08-creating-custom-fragments-for-clarity.md.
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

test('Adding Custom Fragments to Master Pages', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Open the *Page Templates* application and begin editing *Primary Master Page*.
	await press(page, 'Page Templates');
	await press(page, 'Primary Master Page');

	// Step 2. Add the *Search Button* fragment to the Header User Actions container.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 3. Select the *Search Button* fragment and configure these settings in the right side panel's General tab:
	await press(page, 'Search Button');
	// Not entered: Link, Page - chosen from a control rather than typed.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/08-creating-custom-fragments-for-clarity/images/09.png'});

	// Step 4. Click *Publish Master* and confirm with *Ok*.
	await press(page, 'Publish Master');
	await press(page, 'Ok');

	// Step 5. Repeat these steps to update *Secondary Master Page*.
	// Not performed: no control or value named in this step.

});
