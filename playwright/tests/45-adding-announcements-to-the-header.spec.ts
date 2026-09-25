/**
 * Adding Announcements to the Header
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/06-content-authoring-and-management/06-displaying-claritys-content.md.
 * Edit the lesson and regenerate; edits here are overwritten.
 *
 * A pass means nothing blocked a reader. It does not mean the
 * exercise built the right thing - nothing records what it should
 * build.
 */
import {test} from '@playwright/test';

import {fill, openMenu, press} from '../helpers/liferay';
import {signIn} from '../helpers/sign-in';

test('Adding Announcements to the Header', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Open the Site Menu (![](../../images/icon-product-menu.png)), expand Site Builder, and select Collections.
	await openMenu(page, 'Site Menu', 'Site Builder', 'Collections');

	// Step 2. Create a new dynamic collection titled `Announcements`.
	// Not performed: no control or value named in this step.

	// Step 3. While editing the collection, set its Item Type to *Web Content Article* and Item Subtype to *Announcements*.
	// Not performed: the step does not name a field and a value plainly enough.

	// Step 4. Add the *Marketing Assets* library to its scope and click *Save* to publish the collection.
	await press(page, 'Marketing Assets');
	await press(page, 'Save');

	// Step 5. Open the Site Menu (![](../../images/icon-product-menu.png)), expand *Design*, and select *Page Templates*.
	await openMenu(page, 'Site Menu', 'Design', 'Page Templates');

	// Step 6. Begin editing the *Primary Master Page* template.
	// Not performed: no control or value named in this step.

	// Step 7. Select the *Header Announcement Bar* container, go to the Styles tab, and click the Value from Stylebook butto
	await press(page, 'Header Announcement Bar');

	// Step 8. Under Brand Colors, select *Brand Color 1*.
	await press(page, 'Brand Color 1');

	// Step 9. Add a *Collection Display* fragment to the container, select it, and configure these settings:
	await press(page, 'Collection Display');

	// Step 10. Add a *Container* fragment inside the collection display, rename it `Announcement`, and configure these settin
	// Not performed: no control or value named in this step.

	// Step 11. Add a *Paragraph* fragment inside the Announcement container and select it.
	await press(page, 'Paragraph');

	// Step 12. Go to the Styles tab and click *Text Color* to edit it.
	await press(page, 'Text Color');

	// Step 13. Under Theme Colors, select *Light*.
	await press(page, 'Light');

	// Step 14. Select the paragraph's *element-text* sub-element and set its mapping to Content (Announcements) > *Message*.
	await press(page, 'element-text');
	await press(page, 'Message');

	// Step 15. Add a *Clarity Button* fragment to the Announcement container after the paragraph, select it, and configure th
	await press(page, 'Clarity Button');

	// Step 16. Select the button's *link* sub-element and configure these settings:
	await press(page, 'link');

	// Step 17. Adjust the margins and padding for the announcement bar's elements until you are satisfied with it.
	// Not performed: no control or value named in this step.

	// Step 18. Click *Publish Master* then confirm with *Ok* to save your changes.
	await press(page, 'Publish Master');
	await press(page, 'Ok');

});
