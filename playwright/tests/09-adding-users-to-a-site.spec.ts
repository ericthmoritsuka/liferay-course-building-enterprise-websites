/**
 * Adding Users to a Site
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/05-site-building/03-configuring-claritys-site.md.
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

test('Adding Users to a Site', async ({page}) => {
	await signIn(page, 'ian');

	// Step 1. Sign in using these credentials:
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Global Menu* (![](../../images/icon-applications-menu.png)) and select *Clarity Public Enterprise We
	await press(page, 'Global Menu');
	await press(page, 'Clarity Public Enterprise Website');

	// Step 3. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *People*, and select *Memberships*.
	await openMenu(page, 'Site Menu', 'People', 'Memberships');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/03-configuring-claritys-site/images/06.png'});

	// Step 4. Click *New*.
	await press(page, 'New');

	// Step 5. Select *Christian Carter* and *Harper Roberts*.
	await press(page, 'Christian Carter');
	await press(page, 'Harper Roberts');

	// Step 6. Click *Done*.
	await press(page, 'Done');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/03-configuring-claritys-site/images/07.png'});

	// Step 7. Click *Actions* (![](../../images/icon-actions.png)) for Christian Carter and select *Assign Roles*.
	await press(page, 'Actions');
	await press(page, 'Assign Roles');

	// Step 8. Select the *Site Content Contributor* role and click *Done*.
	await press(page, 'Site Content Contributor');
	await press(page, 'Done');

	// Step 9. Repeat steps 7-8 to assign the Site Content Contributor role to Harper Roberts as well.
	// Not performed: no control or value named in this step.

});
