/**
 * Fine Tuning Manager Permissions
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/04-security-and-identity-management/06-defining-and-assigning-roles-to-claritys-users.md.
 * Edit the lesson and regenerate; edits here are overwritten.
 *
 * A pass means nothing blocked a reader. It does not mean the
 * exercise built the right thing - nothing records what it should
 * build.
 */
import {test} from '@playwright/test';

import {fill, openMenu, press} from '../helpers/liferay';
import {signIn} from '../helpers/sign-in';

test('Fine Tuning Manager Permissions', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Go to the *User Groups* application in the Global Menu.
	// Not performed: no control or value named in this step.

	// Step 2. Create a `Marketing Managers` user group.
	// Not performed: no control or value named in this step.

	// Step 3. Add Clara Murphy to the group.
	// Not performed: no control or value named in this step.

	// Step 4. Go to the *Roles* application in the Global Menu.
	// Not performed: no control or value named in this step.

	// Step 5. Create a `Marketing Manager` role.
	// Not performed: no control or value named in this step.

	// Step 6. While editing the *Marketing Manager* role, go to the *Define Permissions* tab.
	// Not performed: no control or value named in this step.

	// Step 7. In the left menu, go to *Control Panel* &rarr; *Users* &rarr; *User Groups*.
	// Not performed: no control or value named in this step.

	// Step 8. Select this permission:
	// Not performed: no control or value named in this step.

	// Step 9. Click *Save*.
	await press(page, 'Save');

	// Step 10. In the left menu, go to *Control Panel* &rarr; *Users* &rarr; *Users and Organizations*.
	// Not performed: no control or value named in this step.

	// Step 11. Select this permission:
	// Not performed: no control or value named in this step.

	// Step 12. Click *Save*.
	await press(page, 'Save');

	// Step 13. Go to the *Assignees* tab and assign this role to the *Marketing Managers* user group.
	// Not performed: no control or value named in this step.

	// Step 14. Go to the *User Groups* application in the Global Menu.
	// Not performed: no control or value named in this step.

	// Step 15. Click *Actions* (![](../../images/icon-actions.png)) for the Marketing user group and select *Permissions*.
	await press(page, 'Actions');
	await press(page, 'Permissions');

	// Step 16. For the Marketing Manager role, select these permissions and click *Save*:
	await press(page, 'Save');

	// Step 17. Go to the *Users and Organizations* application in the Global Menu.
	// Not performed: no control or value named in this step.

	// Step 18. Impersonate Clara Murphy to verify the Marketing Manager role permissions.
	// Not performed: no control or value named in this step.

});
