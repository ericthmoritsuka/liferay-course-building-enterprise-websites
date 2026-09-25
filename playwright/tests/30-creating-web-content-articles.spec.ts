/**
 * Creating Web Content Articles
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

test('Creating Web Content Articles', async ({page}) => {
	await signIn(page, 'christian');

	// Step 1. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Applications* tab, and click
	await openMenu(page, 'Global Menu', 'Applications', 'Asset Libraries');

	// Step 2. Select the *Marketing Assets* library and click *Web Content*.
	await press(page, 'Marketing Assets');
	await press(page, 'Web Content');

	// Step 3. Click *New*, then select *Folder*.
	await press(page, 'New');
	await press(page, 'Folder');

	// Step 4. Enter these values:
	await fill(page, 'Name', 'Announcements');
	await fill(page, 'Description', 'Stores announcement articles for the page header.');

	// Step 5. Click *Save*.
	await press(page, 'Save');

	// Step 6. Click the *Announcements* folder.
	await press(page, 'Announcements');

	// Step 7. Click *New* and select *Announcements*.
	await press(page, 'New');
	await press(page, 'Announcements');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/04-creating-and-mapping-claritys-content/images/08.png'});

	// Step 8. Enter these values:
	// Not entered: Metadata > Title, Fields > Message, Fields > Link Text, Fields > Link to Page - inside a panel or a language this cannot address yet.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 9. Click *Publish*.
	await press(page, 'Publish');

	// Step 10. Click *Web Content* in the breadcrumb menu.
	await press(page, 'Web Content');

	// Step 11. Click *FAQ* and go to the *Retail Partners* subfolder.
	await press(page, 'FAQ');
	await press(page, 'Retail Partners');

	// Step 12. Create these three FAQ articles:
	// Not entered: `Can I become a retail partner?`, `What types of eyewear do you offer?` - chosen from a control rather than typed.

	// Screenshot skipped: the step it belongs to was not performed.

});
