/**
 * Auto-Tagging Content
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

test('Auto-Tagging Content', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Control Panel* tab, and clic
	await openMenu(page, 'Global Menu', 'Control Panel', 'Instance Settings');

	// Step 3. Under Content and Data, click *Assets*.
	await press(page, 'Assets');

	// Step 4. Click *Asset Auto Tagging* in the left menu.
	await press(page, 'Asset Auto Tagging');

	// Step 5. Select the *Enable Auto Tagging of Assets* and *Update Auto Tags* checkboxes.
	await press(page, 'Enable Auto Tagging of Assets');
	await press(page, 'Update Auto Tags');

	// Step 6. Set the max number of tags to `2`.
	// Not performed: no control or value named in this step.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/05-organizing-claritys-content/images/04.png'});

	// Step 7. Click *Update*.
	await press(page, 'Update');

	// Step 8. Click *OpenNLP Text Auto Tagging* in the left menu.
	await press(page, 'OpenNLP Text Auto Tagging');

	// Step 9. Select *Web Content Article* in the drop-down menu.
	await press(page, 'Web Content Article');

	// Step 10. Click *Update*.
	await press(page, 'Update');

	// Step 11. Click *TensorFlow Image Auto Tagging* in the left menu.
	await press(page, 'TensorFlow Image Auto Tagging');

	// Step 12. Select the *Enable TensorFlow Image Auto Tagging* checkbox and click *Update*.
	await press(page, 'Enable TensorFlow Image Auto Tagging');
	await press(page, 'Update');

	// Step 13. Go to the *Marketing Assets* library and select *Web Content*.
	await press(page, 'Marketing Assets');
	await press(page, 'Web Content');

	// Step 14. Go to the *General* folder, click *New,* and select *Basic Web Content*.
	await press(page, 'General');
	await press(page, 'New');
	await press(page, 'Basic Web Content');

	// Step 15. Using the *AI Creator* (![](../../images/icon-ai-creator.png)) or other sample content, populate the title fie
	// Not performed: no control or value named in this step.

	// Step 16. Click *Publish*.
	await press(page, 'Publish');

	// Step 17. Begin editing the article. In the right side panel, you should see tags set for the content.
	// Not performed: no control or value named in this step.

});
