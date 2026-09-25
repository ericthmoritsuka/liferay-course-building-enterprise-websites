/**
 * Designing Clarity's Master Pages
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/05-site-building/06-designing-claritys-master-pages.md.
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

test('Designing Clarity\'s Master Pages', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. On the Clarity Public Enterprise Website, open the *Site Menu* (![](../../images/icon-product-menu.png)), expa
	await openMenu(page, 'Site Menu', 'Design', 'Page Templates');

	// Step 3. On the *Masters* tab, click *Primary Master Page* to begin editing that template.
	await press(page, 'Primary Master Page');

	// Step 4. Open the *Components* tab (![](../../images/icon-plus.png)) in the left side panel.
	// Not performed: no control or value named in this step.

	// Step 5. Drag and drop a *Container* fragment to the top of the template, above the drop zone. This container is for th
	// Not performed: no control or value named in this step.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/06-designing-claritys-master-pages/images/07.png'});

	// Step 6. Go to the *Browser* tab in the side panel, double-click the name of the container and rename it `Page Header`.
	await press(page, 'Browser');

	// Step 7. Add two additional containers within the Page Header container and name them `Header Announcement Bar` and `He
	// Not performed: no control or value named in this step.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/06-designing-claritys-master-pages/images/08.png'});

	// Step 8. Select the *Header Announcement Bar* and configure these settings in the right side panel:
	await press(page, 'Header Announcement Bar');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/06-designing-claritys-master-pages/images/09.png'});

	// Step 9. Select the *Header Navigation Bar* container and configure these settings:
	await press(page, 'Header Navigation Bar');

	// Step 10. Add a *Grid* element to the Header Navigation Bar container.
	// Not performed: no control or value named in this step.

	// Step 11. Widen the center module by dragging the dividers outward one space on each side.
	// Not performed: no control or value named in this step.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/06-designing-claritys-master-pages/images/10.png'});

	// Step 12. Select the grid and configure these settings:
	// Not performed: no control or value named in this step.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/06-designing-claritys-master-pages/images/11.png'});

	// Step 13. Add a container to each grid area and name them Header Branding, Header Navigation, and Header User Actions.
	// Not performed: no control or value named in this step.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/06-designing-claritys-master-pages/images/12.png'});

	// Step 14. Select the *Header Branding* container and configure these settings:
	await press(page, 'Header Branding');

	// Step 15. Select the *Header Navigation* container and configure these settings:
	await press(page, 'Header Navigation');

	// Step 16. Select the *Header User Actions* container and configure these settings:
	await press(page, 'Header User Actions');

	// Step 17. Add these fragments to the containers:
	// Not performed: no control or value named in this step.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/06-designing-claritys-master-pages/images/13.png'});

});
