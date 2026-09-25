/**
 * Setting Up the Product Pages
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/06-content-authoring-and-management/07-using-claritys-products-as-content.md.
 * Edit the lesson and regenerate; edits here are overwritten.
 *
 * A pass means nothing blocked a reader. It does not mean the
 * exercise built the right thing - nothing records what it should
 * build.
 */
import {test} from '@playwright/test';

import {fill, openMenu, press} from '../helpers/liferay';
import {signIn} from '../helpers/sign-in';

test('Setting Up the Product Pages', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Go to the *Products* page and click *Edit* (![](../../images/icon-actions.png)).
	await press(page, 'Products');
	await press(page, 'Edit');

	// Step 3. Open the *Components* panel (![](../../images/icon-plus.png)).
	// Not performed: no control or value named in this step.

	// Step 4. Go to the *Widgets* tab.
	// Not performed: no control or value named in this step.

	// Step 5. Drag and drop the *Commerce Categories Navigation* widget into the Commerce Categories container.
	// Not performed: no control or value named in this step.

	// Step 6. Select the widget, click its *Actions* button (![](../../images/icon-actions.png)) in the top right corner, an
	await press(page, 'Actions');
	await press(page, 'Configuration');

	// Step 7. For Vocabulary, select *Clarity Products*.
	await press(page, 'Clarity Products');

	// Step 8. Click *Save* and close the modal window.
	await press(page, 'Save');

	// Step 9. Click *Publish* to view the updated page.
	await press(page, 'Publish');

	// Step 10. Open the *Site Menu* (![](../../images/icon-menu.png)), expand *Design*, and select *Templates*.
	await openMenu(page, 'Site Menu', 'Design', 'Templates');

	// Step 11. Go to the *Widget Templates* tab.
	// Not performed: no control or value named in this step.

	// Step 12. Click *New* and select *Commerce Categories Navigation Template*.
	await press(page, 'New');
	await press(page, 'Commerce Categories Navigation Template');

	// Step 13. Enter `Clarity Category Cards` as the template name.
	await fill(page, 'template name', 'Clarity Category Cards');

	// Step 14. From your course workspace, open the `exercises/module-6/commerce-category-navigation-cards.ftl` file.
	// Not performed: no control or value named in this step.

	// Step 15. Copy and paste this file's contents into the widget template editor.
	// Not performed: no control or value named in this step.

	// Step 16. Click *Save*.
	await press(page, 'Save');

	// Step 17. Return to the *Products* page and begin editing it again.
	// Not performed: no control or value named in this step.

	// Step 18. Select the *Commerce Categories Navigation* widget, click its *Actions* button (![](../../images/icon-actions.
	await press(page, 'Commerce Categories Navigation');
	await press(page, 'Actions');
	await press(page, 'Configuration');

	// Step 19. For Display Template, select *Clarity Category Cards*.
	await press(page, 'Clarity Category Cards');

	// Step 20. Click *Save* and close the modal window.
	await press(page, 'Save');

	// Step 21. Click *Publish* and view the page.
	await press(page, 'Publish');

	// Step 22. Go to and begin editing the *Product List* page.
	// Not performed: no control or value named in this step.

	// Step 23. From the *Components* panel (![](../../images/icon-plus.png)), drag and drop the *Category Content* widget jus
	// Not performed: no control or value named in this step.

	// Step 24. Click *Publish*.
	await press(page, 'Publish');

	// Step 25. View the *Products* page and click one of the category cards to confirm the link is now working. However, sinc
	await press(page, 'Products');

	// Step 26. Open the *Site Menu* (![](../../images/icon-menu.png)), expand *Design*, and select *Templates*.
	await openMenu(page, 'Site Menu', 'Design', 'Templates');

	// Step 27. Go to the *Widget Templates* tab.
	// Not performed: no control or value named in this step.

	// Step 28. Click *New* and select *Search Results Template*.
	await press(page, 'New');
	await press(page, 'Search Results Template');

	// Step 29. Enter `Clarity Search Results Cards` as the template name.
	await fill(page, 'template name', 'Clarity Search Results Cards');

	// Step 30. From your course workspace, open the `exercises/module-6/commerce-search-results-cards.ftl` file.
	// Not performed: no control or value named in this step.

	// Step 31. Copy and paste this file's contents into the widget template editor.
	// Not performed: no control or value named in this step.

	// Step 32. Click *Save*.
	await press(page, 'Save');

	// Step 33. Go back to the *Product List* page and begin editing it.
	// Not performed: no control or value named in this step.

	// Step 34. Within the Search Results container's grid element, select the *Search Results* widget.
	await press(page, 'Search Results');

	// Step 35. Click its *Actions* button (![](../../images/icon-actions.png)), and click *Configuration*.
	await press(page, 'Actions');
	await press(page, 'Configuration');

	// Step 36. Expand *Display Template* and set the Display Template to *Clarity Search Results Cards*.
	// Not performed: no control or value named in this step.

	// Step 37. Click *Save* and close the modal window.
	await press(page, 'Save');

	// Step 38. Click *Publish*.
	await press(page, 'Publish');

	// Step 39. View the *Products* page again and click one of the category cards.
	await press(page, 'Products');

	// Step 40. In the *Page Templates* application, go to the *Display Page Templates* tab.
	// Not performed: no control or value named in this step.

	// Step 41. Click *New* then *Display Page Template*.
	await press(page, 'New');
	await press(page, 'Display Page Template');

	// Step 42. Select *Primary Master Page*.
	await press(page, 'Primary Master Page');

	// Step 43. Enter these values and click *Save*:
	await press(page, 'Save');

	// Step 44. Drag and drop the *Product Details Page* fragment composition into the drop zone.
	// Not performed: no control or value named in this step.

	// Step 45. In the Product Details container's Description Container, map these fragments with their corresponding product
	// Not performed: no control or value named in this step.

	// Step 46. Select the button's *link* sub-element and configure these settings:
	await press(page, 'link');

	// Step 47. Double click the *Button* fragment and change its text to `Contact Sales`.
	await press(page, 'Button');

	// Step 48. In the Specifications container, double click the *Heading* fragment and change its text to `Specifications`.
	await press(page, 'Heading');

	// Step 49. Map fragments in the Specifications container's nested grid to their fields:
	// Not performed: no control or value named in this step.

	// Step 50. In the Attachments container, double click the *Heading* fragment and change its text to `Attachments`.
	await press(page, 'Heading');

	// Step 51. Map this fragment in the Attachments container's nested grid to its field:
	// Not performed: no control or value named in this step.

	// Step 52. Select the Attachment grid's *Download* button and set these values in the configuration side panel:
	await press(page, 'Download');

	// Step 53. Select the Download button's *link* sub-element and configure these settings:
	await press(page, 'link');

	// Step 54. Double click the *Download* button and change its text to `Download`.
	await press(page, 'Download');

	// Step 55. Click *Publish*.
	await press(page, 'Publish');

	// Step 56. Click *Actions* (![](../../images/icon-actions.png)) for the Product Details template and select *Mark as Defa
	await press(page, 'Actions');
	await press(page, 'Mark as Default');

	// Step 57. View the *Product List* page and select a product.
	await press(page, 'Product List');

});
