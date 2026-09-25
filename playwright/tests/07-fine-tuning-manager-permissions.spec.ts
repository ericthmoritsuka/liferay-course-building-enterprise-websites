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
import {CAPTURE, capture} from '../helpers/screenshot';
import {signIn} from '../helpers/sign-in';

//
// The style guide's display width, captured at twice it.
//
test.use(CAPTURE);

test('Fine Tuning Manager Permissions', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Go to the *User Groups* application in the Global Menu.
	await press(page, 'User Groups');

	// Step 2. Create a `Marketing Managers` user group.
	// Not performed: no control or value named in this step.

	// Step 3. Add Clara Murphy to the group.
	// Not performed: no control or value named in this step.

	// Step 4. Go to the *Roles* application in the Global Menu.
	await press(page, 'Roles');

	// Step 5. Create a `Marketing Manager` role.
	// Not performed: no control or value named in this step.

	// Step 6. While editing the *Marketing Manager* role, go to the *Define Permissions* tab.
	await press(page, 'Define Permissions');

	// Step 7. In the left menu, go to *Control Panel* &rarr; *Users* &rarr; *User Groups*.
	await press(page, 'Control Panel');
	await press(page, 'Users');
	await press(page, 'User Groups');

	// Step 8. Select this permission:
	// Not entered: Application Permissions - chosen from a control rather than typed.

	// Step 9. Click *Save*.
	await press(page, 'Save');

	// Step 10. In the left menu, go to *Control Panel* &rarr; *Users* &rarr; *Users and Organizations*.
	await press(page, 'Control Panel');
	await press(page, 'Users');
	await press(page, 'Users and Organizations');

	// Step 11. Select this permission:
	// Not entered: Resource Permissions > User - inside a panel or a language this cannot address yet.

	// Step 12. Click *Save*.
	await press(page, 'Save');

	// Step 13. Go to the *Assignees* tab and assign this role to the *Marketing Managers* user group.
	await press(page, 'Assignees');
	await press(page, 'Marketing Managers');

	// Step 14. Go to the *User Groups* application in the Global Menu.
	await press(page, 'User Groups');

	// Step 15. Click *Actions* (![](../../images/icon-actions.png)) for the Marketing user group and select *Permissions*.
	await press(page, 'Actions');
	await press(page, 'Permissions');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/04-security-and-identity-management/06-defining-and-assigning-roles-to-claritys-users/images/13.png'});

	// Step 16. For the Marketing Manager role, select these permissions and click *Save*:
	await press(page, 'Save');
	// Not entered: Marketing Manager - chosen from a control rather than typed.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/04-security-and-identity-management/06-defining-and-assigning-roles-to-claritys-users/images/14.png'});

	// Step 17. Go to the *Users and Organizations* application in the Global Menu.
	await press(page, 'Users and Organizations');

	// Step 18. Impersonate Clara Murphy to verify the Marketing Manager role permissions.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

});
