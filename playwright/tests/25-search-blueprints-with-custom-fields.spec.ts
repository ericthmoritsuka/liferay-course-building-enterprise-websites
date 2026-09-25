/**
 * Search Blueprints with Custom Fields
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
import {signIn} from '../helpers/sign-in';

test('Search Blueprints with Custom Fields', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Control Panel* tab, and clic
	await openMenu(page, 'Global Menu', 'Control Panel', 'Custom Fields');

	// Step 2. Select *User* and click *New*.
	await press(page, 'User');
	await press(page, 'New');

	// Step 3. Select *Input Field* and enter these details.
	await press(page, 'Input Field');

	// Step 4. Click *Save*.
	await press(page, 'Save');

	// Step 5. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Control Panel* tab, and clic
	await openMenu(page, 'Global Menu', 'Control Panel', 'Users and Organizations');

	// Step 6. Select *Ian Miller*, scroll down to the bottom, and enter `555777` for the Registrationid.
	await press(page, 'Ian Miller');

	// Step 7. Click *Save*.
	await press(page, 'Save');

	// Step 8. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Applications* tab, and click
	await openMenu(page, 'Global Menu', 'Applications', 'Blueprints');

	// Step 9. Create a new blueprint titled `Registration ID`.
	// Not performed: no control or value named in this step.

	// Step 10. In the right configuration menu, click *Add* for Filter by Exact Terms Match.
	await press(page, 'Add');

	// Step 11. For its query elements Field, enter `expando__keyword__custom_fields__RegistrationId_long`.
	await fill(page, 'query elements', 'expando__keyword__custom_fields__RegistrationId_long');

	// Step 12. For Values, enter `${keywords}`.
	await fill(page, 'Values', '${keywords}');

	// Step 13. Make note of the blueprint's ID for a future step, then click *Save*.
	await press(page, 'Save');

	// Step 14. Open a new browser window and access Liferay's API Explorer at `http://localhost:8080/o/api`.
	// Not performed: no control or value named in this step.

	// Step 15. Click the *REST Applications* drop-down menu and select *search/v1.0*.
	await press(page, 'REST Applications');
	await press(page, 'search/v1.0');

	// Step 16. Expand the *postSearchPage* endpoint.
	// Not performed: no control or value named in this step.

	// Step 17. For nestedFields, enter `embedded`.
	await fill(page, 'nestedFields', 'embedded');

	// Step 18. For search, enter `555777`.
	await fill(page, 'search', '555777');

	// Step 19. Open and copy the contents of the `/exercises/module-9/api-post-search.json` file in your course workspace.
	// Not performed: no control or value named in this step.

	// Step 20. Paste its contents in place of the Request Body field's placeholder text.
	// Not performed: no control or value named in this step.

	// Step 21. Replace `{blueprint ID}` with your blueprint's ID.
	// Not performed: no control or value named in this step.

	// Step 22. Click *Execute*.
	await press(page, 'Execute');

	// Step 23. Verify this returns Ian Miller's user information.
	// Not performed: no control or value named in this step.

});
