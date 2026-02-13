

// Following a DRY principle his file exports a reusable login function.



async function login(page) {

  // Navigate to the application URL
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');


  // Fill username field using id 
  await page.fill('input[id="username"]', 'admin');


  // Fill username field using id 
  await page.fill('input[id="password"]', 'password123');

  // Click login button
  await page.click('button[type="submit"]');

  // Assert navigation to completion
  await page.waitForLoadState('networkidle');

}
// export login for reuse in our test cases
module.exports = { login };
