/**
 * Configuring the Site
 *
 * Generated from courses/latest/en/building-enterprise-websites-with-liferay/05-site-building/03-configuring-claritys-site.md.
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

test('Configuring the Site', async ({page}) => {
	await signIn(page, 'ian');

	// Step 1. Verify you're viewing the *Clarity Public Enterprise Website*.
	// Not performed: no control or value named in this step.

	// Step 2. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Configuration*, and select *Site Setti
	await openMenu(page, 'Site Menu', 'Configuration', 'Site Settings');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/03-configuring-claritys-site/images/08.png'});

	// Step 3. Go to *Site Configuration* and open the *Details* tab.
	await press(page, 'Site Configuration');
	await press(page, 'Details');

	// Step 4. Add this description: `Elevate Your Brand with Premium Eyewear: Discover premium craftsmanship, innovative len
	// Not performed: no control or value named in this step.

	// Step 5. Set membership type to *Open*.
	await press(page, 'Open');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/03-configuring-claritys-site/images/09.png'});

	// Step 6. Click *Save*.
	await press(page, 'Save');

	// Step 7. Go to the *Site URL* tab.
	await press(page, 'Site URL');

	// Step 8. Set the friendly URL to `/clarity`.
	// Not performed: no control or value named in this step.

	// Step 9. Set the site's virtual host for the default language to `www.clarityvisionsolutions.com`.
	// Not performed: no control or value named in this step.

	// Step 10. Click *Add* to add an extra virtual host for Spanish with the URL `www.solucionesdeclaridad.com`.
	await press(page, 'Add');

	await capture(page, {name: 'building-enterprise-websites-with-liferay/05-site-building/03-configuring-claritys-site/images/10.png'});

	// Step 11. Click *Save*.
	await press(page, 'Save');

	// Step 12. Return to the *Site Settings* page and go to *Localization*.
	await press(page, 'Localization');

	// Step 13. Select the radio button to define a custom default language and additional available languages.
	// Not performed: no control or value named in this step.

	// Step 14. Use the *left arrow* (![](../../images/icon-caret-left.png)) button to remove all languages except English and
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 15. Click *Save*.
	await press(page, 'Save');

	// Step 16. Return to the *Site Settings* page and go to *Accessibility*.
	await press(page, 'Accessibility');

	// Step 17. Check the box to enable the accessibility menu.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.

	// Step 18. Click *Update*.
	await press(page, 'Update');

});
