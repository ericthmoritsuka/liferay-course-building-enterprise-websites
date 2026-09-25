/**
 * Configuring Allowed Fragments
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/05-site-building/06-designing-claritys-master-pages.md.
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

test('Configuring Allowed Fragments', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. While editing the Primary Master Page template, click *Configure Allowed Fragments* in the Page Body container
	await press(page, 'Configure Allowed Fragments');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/06-designing-claritys-master-pages/images/14.png'});

	// Step 2. Deselect the checkboxes for the following fragments to prevent users from adding them to pages using this temp
	// Not performed: no control or value named in this step.

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/06-designing-claritys-master-pages/images/15.png'});

	// Step 3. Click *Save*.
	await press(page, 'Save');

	// Step 4. Click *Publish Master*.
	await press(page, 'Publish Master');

	// Step 5. Click Ok in the popup stating "Changes made to this master are going to be propagated to all page templates, d
	// Not performed: no control or value named in this step.

});
