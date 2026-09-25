/**
 * Creating a Manual Collection
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/06-content-authoring-and-management/06-displaying-claritys-content.md.
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

test('Creating a Manual Collection', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Open the Site Menu (![](../../images/icon-product-menu.png)), expand Site Builder, and select Collections.
	await openMenu(page, 'Site Menu', 'Site Builder', 'Collections');

	// Step 3. Click *New* and select *Manual Collection*.
	await press(page, 'New');
	await press(page, 'Manual Collection');

	// Step 4. For Title, enter `Helpful Articles` and click *Save*.
	await fill(page, 'Title', 'Helpful Articles');
	await press(page, 'Save');

	// Step 5. For Item Type, select *Web Content Article*.
	await press(page, 'Web Content Article');

	// Step 6. For Item Subtype, select *Article*.
	await press(page, 'Article');

	// Step 7. Click *Save*.
	await press(page, 'Save');

	// Step 8. In the Collection Items section, click *Select* and select *Article*.
	await press(page, 'Select');
	await press(page, 'Article');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/06-displaying-claritys-content/images/04.png'});

	// Step 9. Go to the *Articles* folder and select these three articles:
	await press(page, 'Articles');

	// Step 10. Click *Add*.
	await press(page, 'Add');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/06-displaying-claritys-content/images/05.png'});

	// Step 11. Go to the *Home* page and click *Edit* (![](../../images/icon-edit.png)).
	await press(page, 'Home');
	await press(page, 'Edit');

	// Step 12. Select the *Collection Display* fragment in the Helpful Articles container.
	await press(page, 'Collection Display');

	// Step 13. In the configuration side panel, click *Select Collection* (![](../../images/icon-add.png)).
	await press(page, 'Select Collection');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/06-displaying-claritys-content/images/06.png'});

	// Step 14. Choose the *Helpful Articles* collection.
	await press(page, 'Helpful Articles');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/06-displaying-claritys-content/images/07.png'});

	// Step 15. In the configuration panel, select *None* for Pagination.
	await press(page, 'None', 'Pagination');

	// Step 16. Within the Collection Display's Collection Item, select the *Clarity Card* fragment and note the five sub-elem
	await press(page, 'Clarity Card');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/06-displaying-claritys-content/images/08.png'});

	// Step 17. Select each of the following elements, set its Source Selection to *Mapping* (if applicable), and select the c
	await press(page, 'Mapping');

	// Step 18. Select the *card-link* sub-element, go to the *Link* tab.
	await press(page, 'card-link');
	await press(page, 'Link');

	// Step 19. For Link, select *Mapped URL*.
	await press(page, 'Mapped URL');

	// Step 20. For Field, select Display Page > *Default*.
	await press(page, 'Default');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/06-displaying-claritys-content/images/09.png'});

	// Step 21. Click *Publish* to save your changes to the Home page.
	await press(page, 'Publish');

	// Step 22. Open the Site Menu (![](../../images/icon-product-menu.png)), expand *Content & Data*, and select *Web Content
	await openMenu(page, 'Site Menu', 'Content & Data', 'Web Content');

	// Step 23. Go to the *Articles* folder and click *Enhancing Efficiency in Eyewear Manufacturing: A Comprehensive Approach
	await press(page, 'Articles');

	// Step 24. In the right sidebar, expand *Categorization* and click *Select* next to Articles.
	await press(page, 'Categorization');
	await press(page, 'Select', 'Articles');

	// Step 25. Select the *Innovation* category and click *Done*, then click *Publish*.
	await press(page, 'Innovation');
	await press(page, 'Done');
	await press(page, 'Publish');

	// Step 26. Repeat steps 23-25 for the other two assets in this folder, selecting different Articles categories.
	// Not performed: no control or value named in this step.

	// Step 27. Open the Site Menu (![](../../images/icon-product-menu.png)), expand *Design*, and click *Page Templates*.
	await openMenu(page, 'Site Menu', 'Design', 'Page Templates');

	// Step 28. For the Article display page template, click *Actions* (![](../../images/icon-actions.png)) and click *Edit*.
	await press(page, 'Actions');
	await press(page, 'Edit');

	// Step 29. Set the Subtype to *Article*, click *Save*, then click *Publish* for the template.
	await press(page, 'Article');
	await press(page, 'Save');
	await press(page, 'Publish', 'template');

	// Step 30. Click *Actions* (![](../../images/icon-actions.png)) again for Article and click *Mark as Default*.
	await press(page, 'Actions');
	await press(page, 'Mark as Default');

	// Step 31. Return to the Home page and verify the mappings now work as expected.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

});
