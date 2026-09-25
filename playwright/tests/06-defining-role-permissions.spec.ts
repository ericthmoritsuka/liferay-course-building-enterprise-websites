/**
 * Defining Role Permissions
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/04-security-and-identity-management/06-defining-and-assigning-roles-to-claritys-users.md.
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

test('Defining Role Permissions', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Control Panel* tab, and clic
	await openMenu(page, 'Global Menu', 'Control Panel', 'Users and Organizations');

	// Step 2. Click *Actions* (![](../../images/icon-actions.png)) for Christian Carter and select *Impersonate User*.
	await press(page, 'Actions', 'Christian Carter');
	await press(page, 'Impersonate User');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/04-security-and-identity-management/06-defining-and-assigning-roles-to-claritys-users/images/04.png'});

	await capture(page, {name: 'building-enterprise-websites-with-liferay/04-security-and-identity-management/06-defining-and-assigning-roles-to-claritys-users/images/05.png'});

	// Step 3. In your original browser tab, open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the
	await openMenu(page, 'Global Menu', 'Control Panel', 'Roles');

	// Step 4. Click *Marketing Coordinator* to begin editing this role.
	await press(page, 'Marketing Coordinator');

	// Step 5. Go to the *Define Permissions* tab.
	await press(page, 'Define Permissions');

	// Step 6. In the left menu, go to *Applications Menu* &rarr; *Content* &rarr; *Asset Libraries*.
	await press(page, 'Applications Menu');
	await press(page, 'Content');
	await press(page, 'Asset Libraries');

	// Step 7. Select these permissions:
	// Not entered: Application Permissions, Resource Permissions > Asset Library Entry - chosen from a control rather than typed.

	// Step 8. Click *Save*.
	await press(page, 'Save');

	// Step 9. Refresh the tab where you're impersonating Christian Carter.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 10. As Christian, click *Asset Libraries*.
	await press(page, 'Asset Libraries');

	// Step 11. Return to the Clarity Admin tab.
	// Not performed: no control or value named in this step.

	// Step 12. In the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Applications* tab and click *A
	await openMenu(page, 'Global Menu', null, 'Applications');

	// Step 13. Select *Marketing Assets* and click *Memberships*.
	await press(page, 'Marketing Assets');
	await press(page, 'Memberships');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/04-security-and-identity-management/06-defining-and-assigning-roles-to-claritys-users/images/07.png'});

	// Step 14. Go to the *User Groups* tab and click *New*.
	await press(page, 'User Groups');
	await press(page, 'New');

	// Step 15. Select *Marketing* and click *Done*.
	await press(page, 'Marketing');
	await press(page, 'Done');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/04-security-and-identity-management/06-defining-and-assigning-roles-to-claritys-users/images/08.png'});

	// Step 16. Refresh the tab where you're impersonating Christian Carter and click Marketing Assets.
	// Not performed: no control or value named in this step.

	// Step 17. Return to the Clarity Admin tab.
	// Not performed: no control or value named in this step.

	// Step 18. Click *Actions* (![](../../images/icon-actions.png)) for the Marketing user group and select *Assign Roles*.
	await press(page, 'Actions', 'Marketing user group');
	await press(page, 'Assign Roles');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/04-security-and-identity-management/06-defining-and-assigning-roles-to-claritys-users/images/09.png'});

	// Step 19. Select the *Asset Library Administrator* role and click *Done*.
	await press(page, 'Asset Library Administrator');
	await press(page, 'Done');

	// Step 20. Refresh the tab where you're impersonating Christian Carter.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 21. Return to the Clarity Admin tab, go to the Roles application, and click Marketing Coordinator to begin editing
	// Not performed: no control or value named in this step.

	// Step 22. Go to the *Define Permissions* tab.
	await press(page, 'Define Permissions');

	// Step 23. In the left menu, go to *Site and Asset Library Administration* &rarr; *Content & Data* &rarr; *Documents and 
	await press(page, 'Site and Asset Library Administration');
	await press(page, 'Content & Data');
	await press(page, 'Documents and Media');

	// Step 24. Select these permissions:
	// Not entered: General Permissions, Resource Permissions > Documents, Resource Permissions > Documents Folder - chosen from a control rather than typed.

	// Step 25. Click *Save*.
	await press(page, 'Save');

	// Step 26. In the left menu, go to *Site and Asset Library Administration* &rarr; *Content & Data* &rarr; *Web Content*.
	await press(page, 'Site and Asset Library Administration');
	await press(page, 'Content & Data');
	await press(page, 'Web Content');

	// Step 27. Select these permissions:
	// Not entered: General Permissions, Resource Permissions > Web Content, Resource Permissions > Web Content Article, Resource Permissions > Web Content Structure, Resource Permissions > Web Content Template - chosen from a control rather than typed.

	// Step 28. Click *Save*.
	await press(page, 'Save');

	// Step 29. In the left menu, go to *Site and Asset Library Administration* &rarr; *Categorization* &rarr; *Categories*.
	await press(page, 'Site and Asset Library Administration');
	await press(page, 'Categorization');
	await press(page, 'Categories');

	// Step 30. Select these permissions and click *Save*:
	await press(page, 'Save');
	// Not entered: Resource Permissions > Asset Categories - chosen from a control rather than typed.

	// Step 31. Refresh the tab where you're impersonating Christian Carter.
	// Not performed: no control or value named in this step.

	// Step 32. Return to the Clarity Admin tab.
	// Not performed: no control or value named in this step.

	// Step 33. In the left menu, go to *Site and Asset Library Administration* &rarr; *Site Builder* &rarr; *Pages*.
	await press(page, 'Site and Asset Library Administration');
	await press(page, 'Site Builder');
	await press(page, 'Pages');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/04-security-and-identity-management/06-defining-and-assigning-roles-to-claritys-users/images/11.png'});

	// Step 34. Select this permission and click *Save*:
	await press(page, 'Save');
	// Not entered: Resource Permissions > Page - chosen from a control rather than typed.

	// Step 35. Refresh the tab where you're impersonating Christian Carter, open the *Global Menu* (![](../../images/icon-app
	await openMenu(page, 'Global Menu', null, 'Clarity Vision Solutions');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/04-security-and-identity-management/06-defining-and-assigning-roles-to-claritys-users/images/12.png'});

});
