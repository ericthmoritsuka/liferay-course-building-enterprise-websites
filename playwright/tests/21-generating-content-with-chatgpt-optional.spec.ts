/**
 * Generating Content with ChatGPT (Optional)
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
import {signIn} from '../helpers/sign-in';

test('Generating Content with ChatGPT (Optional)', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Sign in as the Clarity Admin user.
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Control Panel* tab, and clic
	await openMenu(page, 'Global Menu', 'Control Panel', 'Instance Settings');

	// Step 3. Click *AI Creator*.
	await press(page, 'AI Creator');

	// Step 4. Enter your ChatGPT API key.
	// Not performed: the step does not name a field and a value plainly enough.

	// Step 5. Ensure these options are checked:
	// Not performed: no control or value named in this step.

	// Step 6. Click *Save*.
	await press(page, 'Save');

	// Step 7. Go to the *Marketing Assets* library and select *Web Content*.
	await press(page, 'Marketing Assets');
	await press(page, 'Web Content');

	// Step 8. Click *New* and select *Basic Web Content*.
	await press(page, 'New');
	await press(page, 'Basic Web Content');

	// Step 9. Click *AI Creator* (![](../../images/icon-ai-creator.png)) to generate content with ChatGPT.
	await press(page, 'AI Creator');

	// Step 10. Enter your desired description, tone, and word count.
	// Not performed: the step does not name a field and a value plainly enough.

	// Step 11. Click *Create*.
	await press(page, 'Create');

	// Step 12. Click *Add* to copy the response into your web content.
	await press(page, 'Add');

});
