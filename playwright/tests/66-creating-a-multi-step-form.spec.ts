/**
 * Creating a Multi-Step Form
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/06-content-authoring-and-management/09-building-claritys-contact-us-form.md.
 * Edit the lesson and regenerate; edits here are overwritten.
 *
 * A pass means nothing blocked a reader. It does not mean the
 * exercise built the right thing - nothing records what it should
 * build.
 */
import {test} from '@playwright/test';

import {fill, openMenu, press} from '../helpers/liferay';
import {signIn} from '../helpers/sign-in';

test('Creating a Multi-Step Form', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Control Panel* tab, and clic
	await openMenu(page, 'Global Menu', 'Control Panel', 'Objects');

	// Step 2. Begin editing the *Contact Us* object definition.
	// Not performed: no control or value named in this step.

	// Step 3. In the Details tab, toggle the *Allow Users to Save Entries as Draft* field to Enabled.
	// Not performed: no control or value named in this step.

	// Step 4. Click *Save*.
	await press(page, 'Save');

	// Step 5. Navigate back to the *Contact Us* page and start editing it.
	// Not performed: no control or value named in this step.

	// Step 6. Drag and drop a *Stepper* fragment into the Form Container above the *Localization Select* fragment.
	await press(page, 'Stepper');
	await press(page, 'Localization Select');

	// Step 7. Click *Continue*.
	await press(page, 'Continue');

	// Step 8. Drag and drop the *Next* button under the Nature of Inquiry field.
	// Not performed: no control or value named in this step.

	// Step 9. Configure these settings for the Stepper fragment:
	// Not performed: no control or value named in this step.

	// Step 10. Select the Form Container and toggle the *Display All Steps in Edit Mode* to Enabled.
	await press(page, 'Display All Steps in Edit Mode');

	// Step 11. Scroll down and move these fields into the second step's drop zone:
	// Not performed: no control or value named in this step.

	// Step 12. Select the form container and disable the *Display All Steps in Edit Mode* option.
	await press(page, 'Display All Steps in Edit Mode');

	// Step 13. Click the first circle in the Stepper fragment to edit the first step.
	// Not performed: no control or value named in this step.

	// Step 14. Drag and drop a *container* above the *Next* button and configure these settings:
	// Not performed: no control or value named in this step.

	// Step 15. Drag and drop the *Next* button into the container.
	// Not performed: no control or value named in this step.

	// Step 16. Go to the second form step in the Stepper fragment.
	// Not performed: no control or value named in this step.

	// Step 17. Drag and drop a *Grid* fragment above the two buttons and configure this setting:
	// Not performed: no control or value named in this step.

	// Step 18. For each *Grid* module, repeat step 17 to drag and drop a *container* fragment into these modules.
	// Not performed: no control or value named in this step.

	// Step 19. For the left container, configure these settings:
	// Not performed: no control or value named in this step.

	// Step 20. For the right container, configure these settings:
	// Not performed: no control or value named in this step.

	// Step 21. Drag and drop the *Previous* button into the left container.
	// Not performed: no control or value named in this step.

	// Step 22. Drag and drop the *Submit* button into the right container.
	// Not performed: no control or value named in this step.

	// Step 23. Double-click the "Step 1" text on the Stepper fragment and enter `Contact Info`.
	// Not performed: no control or value named in this step.

	// Step 24. Double-click the "Step 2" text and enter `Additional Info`.
	// Not performed: no control or value named in this step.

	// Step 25. Click *Publish* and test out the form.
	await press(page, 'Publish');

});
