/**
 * Modifying a CSS Client Extension
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/10-extending-liferay-dxp/03-extending-claritys-front-end.md.
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

test('Modifying a CSS Client Extension', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. In the Clarity Public Enterprise Website, go to the Home page.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 3. Open and copy the contents of the `/exercises/module-10/layout-background-color.scss` file in your course work
	// Not performed: no control or value named in this step.

	// Step 4. From your course workspace, open the `/client-extensions/clarity-global-css/assets/global.css` file, add the c
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 5. Open a terminal window, navigate to the course workspace's `/client-extensions/clarity-global-css/` folder, an
	// Not performed: this step is done at a terminal, not in a browser.

	// Step 6. Open your Liferay server logs, found in your course workspace inside `/bundles/logs/`. The correct file will e
	// Not performed: no control or value named in this step.

	// Step 7. Go to Clarity's *Home* page and view the background color for See the Difference.
	await press(page, 'Home');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/10-extending-liferay-dxp/03-extending-claritys-front-end/images/03.png'});

});
