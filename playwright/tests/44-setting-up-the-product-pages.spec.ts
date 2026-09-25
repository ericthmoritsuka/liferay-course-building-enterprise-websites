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
import {CAPTURE, capture} from '../helpers/screenshot';
import {signIn} from '../helpers/sign-in';

//
// The style guide's display width, captured at twice it.
//
test.use(CAPTURE);

test('Setting Up the Product Pages', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Go to the *Products* page and click *Edit* (![](../../images/icon-actions.png)).
	await press(page, 'Products');
	await press(page, 'Edit');

	// Step 3. Open the *Components* panel (![](../../images/icon-plus.png)).
	await press(page, 'Components');

	// Step 4. Go to the *Widgets* tab.
	await press(page, 'Widgets');

	// Step 5. Drag and drop the *Commerce Categories Navigation* widget into the Commerce Categories container.
	// Not performed: no control or value named in this step.

	// Step 6. Select the widget, click its *Actions* button (![](../../images/icon-actions.png)) in the top right corner, an
	await press(page, 'Actions');
	await press(page, 'Configuration');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/07-using-claritys-products-as-content/images/12.png'});

	// Step 7. For Vocabulary, select *Clarity Products*.
	await press(page, 'Clarity Products');

	// Step 8. Click *Save* and close the modal window.
	await press(page, 'Save');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/07-using-claritys-products-as-content/images/13.png'});

	// Step 9. Click *Publish* to view the updated page.
	await press(page, 'Publish');

	// Step 10. Open the *Site Menu* (![](../../images/icon-menu.png)), expand *Design*, and select *Templates*.
	await openMenu(page, 'Site Menu', 'Design', 'Templates');

	// Step 11. Go to the *Widget Templates* tab.
	await press(page, 'Widget Templates');

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
	await press(page, 'Products');

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

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/07-using-claritys-products-as-content/images/14.png'});

	// Step 22. Go to and begin editing the *Product List* page.
	await press(page, 'Product List');

	// Step 23. From the *Components* panel (![](../../images/icon-plus.png)), drag and drop the *Category Content* widget jus
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 24. Click *Publish*.
	await press(page, 'Publish');

	// Step 25. View the *Products* page and click one of the category cards to confirm the link is now working. However, sinc
	await press(page, 'Products');

	// Step 26. Open the *Site Menu* (![](../../images/icon-menu.png)), expand *Design*, and select *Templates*.
	await openMenu(page, 'Site Menu', 'Design', 'Templates');

	// Step 27. Go to the *Widget Templates* tab.
	await press(page, 'Widget Templates');

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
	await press(page, 'Product List');

	// Step 34. Within the Search Results container's grid element, select the *Search Results* widget.
	await press(page, 'Search Results');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/07-using-claritys-products-as-content/images/16.png'});

	// Step 35. Click its *Actions* button (![](../../images/icon-actions.png)), and click *Configuration*.
	await press(page, 'Actions');
	await press(page, 'Configuration');

	// Step 36. Expand *Display Template* and set the Display Template to *Clarity Search Results Cards*.
	await press(page, 'Display Template');
	await press(page, 'Clarity Search Results Cards');

	// Step 37. Click *Save* and close the modal window.
	await press(page, 'Save');

	// Step 38. Click *Publish*.
	await press(page, 'Publish');

	// Step 39. View the *Products* page again and click one of the category cards.
	await press(page, 'Products');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/07-using-claritys-products-as-content/images/17.png'});

	// Step 40. In the *Page Templates* application, go to the *Display Page Templates* tab.
	await press(page, 'Display Page Templates');

	// Step 41. Click *New* then *Display Page Template*.
	await press(page, 'New');
	await press(page, 'Display Page Template');

	// Step 42. Select *Primary Master Page*.
	await press(page, 'Primary Master Page');

	// Step 43. Enter these values and click *Save*:
	await fill(page, 'Name', 'Product Details');
	// Not entered: Content Type - chosen from a control rather than typed.
	await press(page, 'Save');

	// Step 44. Drag and drop the *Product Details Page* fragment composition into the drop zone.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 45. In the Product Details container's Description Container, map these fragments with their corresponding product
	// Not entered: Product Name, SKU, Description - inside a panel or a language this cannot address yet.

	// Step 46. Select the button's *link* sub-element and configure these settings:
	await press(page, 'link');
	// Not entered: Link - chosen from a control rather than typed.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/06-content-authoring-and-management/07-using-claritys-products-as-content/images/19.png'});

	// Step 47. Double click the *Button* fragment and change its text to `Contact Sales`.
	await press(page, 'Button');

	// Step 48. In the Specifications container, double click the *Heading* fragment and change its text to `Specifications`.
	await press(page, 'Heading');

	// Step 49. Map fragments in the Specifications container's nested grid to their fields:
	// Not entered: Specification Name, Specification Value - inside a panel or a language this cannot address yet.

	// Step 50. In the Attachments container, double click the *Heading* fragment and change its text to `Attachments`.
	await press(page, 'Heading');

	// Step 51. Map this fragment in the Attachments container's nested grid to its field:
	// Not entered: Attachment Name - inside a panel or a language this cannot address yet.

	// Step 52. Select the Attachment grid's *Download* button and set these values in the configuration side panel:
	await press(page, 'Download');
	// Not entered: General - chosen from a control rather than typed.

	// Step 53. Select the Download button's *link* sub-element and configure these settings:
	await press(page, 'link');
	// Not entered: Link - chosen from a control rather than typed.
	// Not entered: Link - inside a panel or a language this cannot address yet.

	// Step 54. Double click the *Download* button and change its text to `Download`.
	await press(page, 'Download');

	// Step 55. Click *Publish*.
	await press(page, 'Publish');

	// Step 56. Click *Actions* (![](../../images/icon-actions.png)) for the Product Details template and select *Mark as Defa
	await press(page, 'Actions', 'Product Details template');
	await press(page, 'Mark as Default');

	// Step 57. View the *Product List* page and select a product.
	await press(page, 'Product List');

});
