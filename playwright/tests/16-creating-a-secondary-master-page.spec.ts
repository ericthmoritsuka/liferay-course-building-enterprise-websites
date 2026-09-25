/**
 * Creating a Secondary Master Page
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/05-site-building/06-designing-claritys-master-pages.md.
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

test('Creating a Secondary Master Page', async ({page}) => {
	await signIn(page, 'walter');

	//
	// This exercise continues from the one before it, which left a
	// screen open that a fresh browser does not have.
	//
	await openPageSettings(page, 'Masters tab of the');

	// Step 1. While in the Masters tab of the Page Templates application, click *Actions* (![](../../images/icon-actions.png
	await press(page, 'Actions', 'Primary Master Page');
	await press(page, 'Make a Copy');
	await press(page, 'Master Page');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/06-designing-claritys-master-pages/images/16.png'});

	// Step 2. Click *Actions* (![](../../images/icon-actions.png)) for the copy and select *Rename*.
	await press(page, 'Actions', 'copy');
	await press(page, 'Rename');

	// Step 3. Enter `Secondary Master Page` and click *Save*.
	await press(page, 'Save');

	// Step 4. Begin editing the template and delete these three containers: Header Announcement Bar, Footer Branding, and Fo
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 5. Click *Publish Master*.
	await press(page, 'Publish Master');

});
