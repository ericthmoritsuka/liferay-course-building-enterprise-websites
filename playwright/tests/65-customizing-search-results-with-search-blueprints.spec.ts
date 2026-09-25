/**
 * Customizing Search Results with Search Blueprints
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/09-search/04-personalizing-claritys-search-experiences.md.
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

test('Customizing Search Results with Search Blueprints', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Applications* tab, and click
	await openMenu(page, 'Global Menu', 'Applications', 'Asset Libraries');

	// Step 3. Select the *HR* library and click *Web Content*.
	await press(page, 'HR');
	await press(page, 'Web Content');

	// Step 4. Go to the *Structures* tab and begin editing *Job Listing*.
	await press(page, 'Structures');
	await press(page, 'Job Listing');

	// Step 5. Click *Properties* (![](../../images/icon-cog3.png)) and copy the Structure Key value for a later step.
	await press(page, 'Properties');

	// Step 6. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Applications* tab, and click
	await openMenu(page, 'Global Menu', 'Applications', 'Blueprints');

	// Step 7. Click *New*.
	await press(page, 'New');

	// Step 8. For Title, enter `Boost Associate Job Listings`.
	await fill(page, 'Title', 'Boost Associate Job Listings');

	// Step 9. Click *Create*.
	await press(page, 'Create');

	// Step 10. In the right configuration menu, expand the *Filter* section, and click *Add* for Filter by Exact Terms Match.
	await press(page, 'Filter');
	await press(page, 'Add', 'Filter by Exact Terms Match');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/09-search/04-personalizing-claritys-search-experiences/images/01.png'});

	// Step 11. For the Filter by Exact Terms Match Field, enter `ddmStructureKey`.
	await fill(page, 'Filter by Exact Terms Match', 'ddmStructureKey');

	// Step 12. For Values, enter step 5's Job Listing structure key.
	// Not performed: the step does not name a field and a value plainly enough.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 13. In the Query Builder tab, click *Selected Types* in the Source section.
	await press(page, 'Selected Types');

	// Step 14. Click *Select Asset Types*, select *Web Content Article,* and**click *Done*.
	await press(page, 'Select Asset Types');
	await press(page, 'Web Content Article');
	await press(page, 'Done');

	// Step 15. In the top menu, click *Preview* and enter a job listing search (e.g., `Developer`).
	await press(page, 'Preview');

	// Step 16. In the *Query Builder* tab, click *Add* (![](../../images/icon-add.png)) within Query Elements to add a second
	await press(page, 'Add');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/09-search/04-personalizing-claritys-search-experiences/images/03.png'});

	// Step 17. In the right configuration menu, expand the *Boost* section, and click *Add* for Boost All Keywords Match.
	await press(page, 'Boost');
	await press(page, 'Add', 'Boost All Keywords Match');

	// Step 18. For its Text to Match field, enter `VP.`
	await fill(page, 'Text to Match', 'VP.');

	// Step 19. Click *Preview* and click *Refresh* to see the filter applied.
	await press(page, 'Preview');
	await press(page, 'Refresh');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/09-search/04-personalizing-claritys-search-experiences/images/04.png'});

	// Step 20. Change `VP` to `Associate` and click *Refresh* in the search preview.
	await press(page, 'Refresh');

	// Step 21. Click *Save*.
	await press(page, 'Save');

	// Step 22. Go to and begin editing the *Open Positions* page.
	await press(page, 'Open Positions');

	// Step 23. From the *Components* panel, drag and drop a *Blueprints Options* widget into the Search Results and Options c
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 24. Select the *Blueprints Options* widget, click its *Options* button (![](../../images/icon-options.png)), and s
	await press(page, 'Blueprints Options');
	await press(page, 'Options');
	await press(page, 'Configuration');

	// Step 25. For Blueprint, click *Select* and select the Boost Associate Job Listings blueprint.
	await press(page, 'Select');

	// Step 26. Click *Save* and close the modal window.
	await press(page, 'Save');

	// Step 27. Click *Publish*.
	await press(page, 'Publish');

});
