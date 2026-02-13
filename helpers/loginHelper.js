/**
 * loginHelper.js
 *
 * This file exports a reusable login function.
 * We isolate login logic so we don't repeat it in every test.
 */

async function login(page) {
  // page is Playwright's browser tab instance.
  // Docs: https://playwright.dev/docs/api/class-page

  // Navigate to the application URL
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  // Docs: https://playwright.dev/docs/api/class-page#page-goto

  // Fill username field
  await page.fill('input[name="username"]', 'admin');
  // fill() types text into input fields
  // Docs: https://playwright.dev/docs/api/class-page#page-fill

  // Fill password field
  await page.fill('input[name="password"]', 'password123');

  // Click login button
  await page.click('button[type="submit"]');
  // Docs: https://playwright.dev/docs/api/class-page#page-click

  // Wait for navigation to complete
  await page.waitForLoadState('networkidle');
  // Docs: https://playwright.dev/docs/api/class-page#page-wait-for-load-state
}

module.exports = { login };
