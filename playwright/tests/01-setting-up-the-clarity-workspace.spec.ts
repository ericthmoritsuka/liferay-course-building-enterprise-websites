/**
 * Setting Up the Clarity Workspace
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/03-course-environment-setup/02-setting-up-claritys-workspace.md.
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

test('Setting Up the Clarity Workspace', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Open your terminal and clone the training workspace to your computer:
	// Not performed: this step is done at a terminal, not in a browser.

	// Step 2. Go to the workspace's root folder in your terminal:
	// Not performed: this step is done at a terminal, not in a browser.

	// Step 3. Initialize your Liferay bundle.
	// Not performed: no control or value named in this step.

	// Step 4. Use Blade to start your Liferay server:
	// Not performed: this step is done at a terminal, not in a browser.

	// Step 5. When finished, access your Liferay DXP instance by going to `localhost:8080` in your browser.
	// Not performed: no control or value named in this step.

	// Step 6. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 7. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Control Panel* tab, and clic
	await openMenu(page, 'Global Menu', 'Control Panel', 'Search');

	// Step 8. Go to the *Index Actions* tab and click *Reindex* for All Search Indexes.
	await press(page, 'Index Actions');
	await press(page, 'Reindex', 'All Search Indexes');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/03-course-environment-setup/02-setting-up-claritys-workspace/images/02.png'});

	// Step 9. When prompted, click *Execute* to confirm.
	await press(page, 'Execute');

	// Step 10. Take some time to explore the site and resources included in the training workspace.
	// Not performed: no control or value named in this step.

	// Step 11. Open your terminal and navigate to the workspace's root folder.
	// Not performed: this step is done at a terminal, not in a browser.

	// Step 12. Run this command to switch to the `final` branch:
	// Not performed: this step is done at a terminal, not in a browser.

	// Step 13. Follow steps 3-10 of the [previous section](https://learn.liferay.com/l/26540021#workspace-setup-for-course-ex
	// Not performed: no control or value named in this step.

	// Step 14. Take some time to explore the finalized site.
	// Not performed: no control or value named in this step.

});
