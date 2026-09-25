/**
 * Using Blade to Create Workspaces from Scratch
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

test('Using Blade to Create Workspaces from Scratch', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. In your terminal, run this command to list available Liferay DXP versions:
	// Not performed: this step is done at a terminal, not in a browser.

	// Step 2. Run this command with your chosen version and a name for your workspace:
	// Not performed: this step is done at a terminal, not in a browser.

	// Step 3. Verify the workspace was created successfully.
	// Not performed: no control or value named in this step.

});
