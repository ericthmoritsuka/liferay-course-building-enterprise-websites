/**
 * Creating a Commerce Channel
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

test('Creating a Commerce Channel', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Commerce* tab, and click *Ch
	await openMenu(page, 'Global Menu', 'Commerce', 'Channels');

	// Step 2. Click *New*.
	await press(page, 'New');

	// Step 3. Enter the following:
	// Not performed: the step does not name a field and a value plainly enough.

	// Step 4. Click *Add* to finish creating your channel.
	await press(page, 'Add');

	// Step 5. Go to the *Type* tab and click *Select Site*.
	await press(page, 'Type');
	await press(page, 'Select Site');

	// Step 6. Choose *Clarity Public Enterprise Website*.
	await press(page, 'Clarity Public Enterprise Website');

	// Step 7. Click *Save*.
	await press(page, 'Save');

	// Step 8. Go to the *General* tab, select *B2B* in the Commerce Site Type drop down menu.
	await press(page, 'General');
	await press(page, 'B2B');

	// Step 9. Click *Save*.
	await press(page, 'Save');

});
