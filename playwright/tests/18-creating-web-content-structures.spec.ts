/**
 * Creating Web Content Structures
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/06-content-authoring-and-management/04-creating-and-mapping-claritys-content.md.
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

test('Creating Web Content Structures', async ({page}) => {
	await signIn(page, 'christian');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Applications* tab, and click
	await openMenu(page, 'Global Menu', 'Applications', 'Asset Libraries');

	// Step 3. Select the *Marketing Assets* library and click *Web Content*.
	await press(page, 'Marketing Assets');
	await press(page, 'Web Content');

	// Step 4. Go to the *Structures* tab and click *New*.
	await press(page, 'Structures');
	await press(page, 'New');

	// Step 5. Enter `Announcements` for the title.
	await fill(page, 'title', 'Announcements');

	// Step 6. From the Builder sidebar, drag and drop a *Text* field into the structure.
	// Not performed: no control or value named in this step.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/04-creating-and-mapping-claritys-content/images/05.png'});

	// Step 7. Select the *Text* field and configure these options:
	await press(page, 'Text');

	// Step 8. Click the *back arrow* (![](../../images/icon-angle-left.png)) to return to the Builder sidebar menu.
	await press(page, 'back arrow');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/04-creating-and-mapping-claritys-content/images/06.png'});

	// Step 9. Drag and drop another *Text* field just below the first one.
	// Not performed: no control or value named in this step.

	// Step 10. Select the *Text* field and configure these options:
	await press(page, 'Text');

	// Step 11. Return to the Builder sidebar.
	// Not performed: no control or value named in this step.

	// Step 12. Drag and drop a *Link to Page* field on top of the *Link Text* field.
	// Not performed: no control or value named in this step.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/04-creating-and-mapping-claritys-content/images/07.png'});

	// Step 13. Select the *Link to Page* field and configure this option:
	await press(page, 'Link to Page');

	// Step 14. Click *Save*.
	await press(page, 'Save');

});
