/**
 * Updating Menu Display Fragments
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/05-site-building/07-creating-claritys-navigation-menus.md.
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

test('Updating Menu Display Fragments', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Begin editing the *Primary Master Page* template.
	await press(page, 'Primary Master Page');

	// Step 2. Select the *Menu Display* fragment in the header.
	await press(page, 'Menu Display');

	// Step 3. In the configuration right side panel, click *Change Source* (![](../../images/icon-change.png)) for the menu'
	await press(page, 'Change Source', 'menu\'s source');

	// Step 4. Click *Header Page Menu* and click *Select This Level*.
	await press(page, 'Header Page Menu');
	await press(page, 'Select This Level');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/07-creating-claritys-navigation-menus/images/08.png'});

	// Step 5. Click *Publish Master**,*then confirm by clicking *Ok*.
	await press(page, 'then confirm by clicking');

	// Step 6. Repeat these steps to update the Secondary Master Page's Menu Display fragment.
	// Not performed: no control or value named in this step.

	// Step 7. Navigate to the Home page to observe how your changes to the template were automatically applied to the connec
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

});
