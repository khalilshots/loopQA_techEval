const { test, expect } = require('@playwright/test');
const { login } = require('../helpers/loginHelper');

/**
 * This test exists only to validate that
 * the login helper works correctly.
 */
test('Login works', async ({ page }) => {

  // Call your helper
  await login(page);

  // Verify we are no longer on login screen
  // Example: check that "Web Application" is visible
  await expect(page.locator('text=Web Application')).toBeVisible();

});
