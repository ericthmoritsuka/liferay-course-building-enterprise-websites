/**
 * Importing Fragments
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/05-site-building/08-creating-custom-fragments-for-clarity.md.
 * Edit the lesson and regenerate; edits here are overwritten.
 *
 * A pass means nothing blocked a reader. It does not mean the
 * exercise built the right thing - nothing records what it should
 * build.
 */
import {test} from '@playwright/test';

import {fill, openMenu, press} from '../helpers/liferay';
import {signIn} from '../helpers/sign-in';

test('Importing Fragments', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. While in the Fragments application, click *Clarity Page Compositions* under Fragment Sets.
	await press(page, 'Clarity Page Compositions');

	// Step 2. Click *Actions* (![](../../images/icon-actions.png)) for the fragment set and select *Import*.
	await press(page, 'Actions');
	await press(page, 'Import');

	// Step 3. Click *Select File*, navigate to the course workspace's `exercises/module-5/` folder, and select the `page-com
	await press(page, 'Select File');

	// Step 4. Click *Import*.
	await press(page, 'Import');

	// Step 5. Click *Done* when finished.
	await press(page, 'Done');

	// Step 6. Repeat the above steps to import these compositions to the correct fragment set folders:
	// Not performed: no control or value named in this step.

});
