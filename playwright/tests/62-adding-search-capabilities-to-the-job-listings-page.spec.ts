/**
 * Adding Search Capabilities to the Job Listings Page
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/09-search/03-setting-up-claritys-search-pages.md.
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

test('Adding Search Capabilities to the Job Listings Page', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Site Menu* (![](../../images/icon-product-menu.png)), click *Page Tree*, expand *Careers*, and click
	await openMenu(page, 'Site Menu', 'Page Tree', 'Open Positions');

	// Step 3. Click *Edit* (![](../../images/icon-edit.png)).
	await press(page, 'Edit');

	// Step 4. In the *Components* panel (![](../../images/icon-plus.png)), go to the *Widgets* tab.
	await press(page, 'Widgets');

	// Step 5. Drag and drop a *Search Bar* widget into the Banner container, placing it under the Heading fragment.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 6. Select the widget and configure this setting:
	// Not entered: General > Frame - inside a panel or a language this cannot address yet.

	// Step 7. From the *Components* panel, drag and drop a *Type Facet* widget into the grid's left module.
	// Not performed: the step does not name a field and a value plainly enough.

	// Step 8. Select the widget, click *Actions* (![](../../images/icon-actions.png)) in the top right corner, and select *C
	await press(page, 'Actions');
	await press(page, 'Configuration');

	// Step 9. Use the left arrow button (![](../../images/icon-angle-left.png)) to remove all asset types except for Web Con
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 10. Click *Save* and close the configuration window.
	await press(page, 'Save');

	// Step 11. From the *Components* panel, drag and drop three *Category Facet* widgets into the left module of the grid fra
	// Not performed: the step does not name a field and a value plainly enough.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 12. Select the first *Category Facet* widget, click its *Actions* button (![](../../images/icon-actions.png)) and 
	await press(page, 'Category Facet');
	await press(page, 'Actions');
	await press(page, 'Configuration');

	// Step 13. For Display Template, select the *Clarity Search Category* template.
	await press(page, 'Clarity Search Category');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/09-search/03-setting-up-claritys-search-pages/images/05.png'});

	// Step 14. For Category Parameter Name, enter a unique value (e.g., `category-region`).
	await fill(page, 'Category Parameter Name', 'category-region');

	// Step 15. Scroll down and choose *Select Vocabularies*.
	await press(page, 'Select Vocabularies');

	// Step 16. Expand the *Clarity Enterprise Website* vocabularies and select the *Region* vocabulary.
	await press(page, 'Clarity Enterprise Website');
	await press(page, 'Region');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/09-search/03-setting-up-claritys-search-pages/images/06.png'});

	// Step 17. Click *Save* and close the configuration window.
	await press(page, 'Save');

	// Step 18. Repeat steps 12-17 for the other two category facet widgets. In step 16, select the *Location* vocabulary for 
	await press(page, 'Location');
	await press(page, 'Job Positions');

	// Step 19. From the *Components* panel, drag and drop a *Search Results* widget into the right module of the grid fragmen
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 20. From the *Components* panel, drag and drop a *Search Options* widget into the Search Results and Options conta
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 21. Select the *Search Options* widget, click its *Actions* button (![](../../images/icon-actions.png)), and selec
	await press(page, 'Search Options');
	await press(page, 'Actions');
	await press(page, 'Configuration');

	// Step 22. Check *Allow Empty Searches*.
	// Not performed: no control or value named in this step.

	// Step 23. Click *Save* and close the window.
	await press(page, 'Save');

	// Step 24. Click *Publish*.
	await press(page, 'Publish');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/09-search/03-setting-up-claritys-search-pages/images/09.png'});

	// Step 25. Go to the *Careers* page and begin editing it (![](../../images/icon-edit.png)).
	await press(page, 'Careers');

	// Step 26. Select the banner's *Explore Open Positions* button and open the configuration side panel for its link element
	await press(page, 'Explore Open Positions');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/09-search/03-setting-up-claritys-search-pages/images/10.png'});

	// Step 27. Go to the *Link* tab and configure these settings:
	await press(page, 'Link');
	// Not entered: Link - chosen from a control rather than typed.
	// Not entered: Page - inside a panel or a language this cannot address yet.

	// Step 28. Click *Publish*.
	await press(page, 'Publish');

});
