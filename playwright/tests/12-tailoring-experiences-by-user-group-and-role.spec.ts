/**
 * Tailoring Experiences by User Group and Role
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/07-analytics-and-personalization/03-personalizing-experiences-for-claritys-users.md.
 * Edit the lesson and regenerate; edits here are overwritten.
 *
 * A pass means nothing blocked a reader. It does not mean the
 * exercise built the right thing - nothing records what it should
 * build.
 */
import {test} from '@playwright/test';

import {fill, openMenu, press} from '../helpers/liferay';
import {signIn} from '../helpers/sign-in';

test('Tailoring Experiences by User Group and Role', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. On the Clarity Enterprise Public Website, go to the home page and click *Edit* (![](../../images/icon-edit.png
	await press(page, 'Edit');

	// Step 3. Click the *Experience* drop down at the top of the page and choose *New Experience*.
	await press(page, 'Experience');
	await press(page, 'New Experience');

	// Step 4. For Name, enter `Distributor`.
	await fill(page, 'Name', 'Distributor');

	// Step 5. For Audience, choose *Distributors*.
	await press(page, 'Distributors');

	// Step 6. Click *Save*.
	await press(page, 'Save');

	// Step 7. Click the up arrow on the Distributor row to position the segment above the Default item.
	// Not performed: no control or value named in this step.

	// Step 8. Modify the title text in the Banner to say `Welcome Back! Elevate Your Inventory with Premium Eyewear`.
	// Not performed: no control or value named in this step.

	// Step 9. Hide the `Distributor Promo` container, since distributors don't need to apply.
	// Not performed: no control or value named in this step.

	// Step 10. Click *Publish*.
	await press(page, 'Publish');

	// Step 11. View the *Home* page and open the *Simulation* (![](../../images/icon-simulation.png)) menu.
	// Not performed: no control or value named in this step.

	// Step 12. With Preview By set to *Segments*, use the Segment dropdown menu to toggle between *Anyone* and *Distributor*.
	// Not performed: no control or value named in this step.

});
