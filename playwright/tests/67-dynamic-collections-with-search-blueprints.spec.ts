/**
 * Dynamic Collections with Search Blueprints
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/09-search/04-personalizing-claritys-search-experiences.md.
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

test('Dynamic Collections with Search Blueprints', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), , go to the *Applications* tab, and cli
	await openMenu(page, 'Global Menu', 'Applications', 'Blueprints');

	// Step 2. Go to the *Elements* tab and click *New*.
	await press(page, 'Elements');
	await press(page, 'New');

	// Step 3. For Title, enter `Future Events`
	await fill(page, 'Title', 'Future Events');

	// Step 4. Click *Create*.
	await press(page, 'Create');

	// Step 5. Open and copy the contents of the `/exercises/module-9/filter-future-events.json` file in your course workspac
	// Not performed: no control or value named in this step.

	// Step 6. Paste its contents in the JSON field, in place of the placeholder text.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 7. Click *Save*.
	await press(page, 'Save');

	// Step 8. While in the Blueprints application, go to the *Blueprints* tab.
	await press(page, 'Blueprints');

	// Step 9. Click *New*.
	await press(page, 'New');

	// Step 10. Enter `Future Events` for the title and toggle Enable as a Collection Provider to enabled.
	// Not performed: the step does not name a field and a value plainly enough.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 11. Click *Create*.
	await press(page, 'Create');

	// Step 12. In the right configuration menu, search for Future Events and click *Add* to include it in your query.
	await press(page, 'Add');

	// Step 13. In the Query Builder tab, click *Selected Types* in the Source section.
	await press(page, 'Selected Types');

	// Step 14. Click *Select Asset Types*, select *Calendar Event,* and**click *Done*.
	await press(page, 'Select Asset Types');
	await press(page, 'Calendar Event');
	await press(page, 'Done');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/09-search/04-personalizing-claritys-search-experiences/images/09.png'});

	// Step 15. Click *Save*.
	await press(page, 'Save');

	// Step 16. Go to the *Calendar* page and begin editing it.
	await press(page, 'Calendar');

	// Step 17. In the container, click *Select Collection* for the Collection Display.
	await press(page, 'Select Collection');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/09-search/04-personalizing-claritys-search-experiences/images/10.png'});

	// Step 18. Go to the *Collection Providers* tab and select *Future Events*.
	await press(page, 'Collection Providers');
	await press(page, 'Future Events');

	// Step 19. Configure this setting for the collection display:
	// Not entered: General - chosen from a control rather than typed.

	// Step 20. From the *Components* panel's *Fragments* tab, drag and drop a *Heading* fragment into the *Collection Display
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 21. Select the *Heading* fragment and select *H2* for the Heading Level**field.
	await press(page, 'Heading');
	await press(page, 'H2');

	// Step 22. Click the *Heading* fragment again to select its *element-text*, then select *Basic Information > Title* for i
	await press(page, 'Heading');
	await press(page, 'element-text');
	await press(page, 'Basic Information > Title');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/09-search/04-personalizing-claritys-search-experiences/images/12.png'});

	// Step 23. Click *Publish*.
	await press(page, 'Publish');

});
