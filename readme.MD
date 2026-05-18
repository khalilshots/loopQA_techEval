# Playwright Data-Driven Test Suite

This repository contains an automated Playwright test suite for validating tasks and tags in the demo application:

https://animated-gingersnap-8cf7f2.netlify.app/

The project focuses on scalable, maintainable automation using:

- Data-driven test scenarios (JSON)
- Reusable login helper
- Page Object Model (POM)
- Minimal duplication

---

## Project Structure

```
data/
  testCases.json        Test scenarios (data-driven)
helpers/
  loginHelper.js        Reusable login logic
pages/
  boardPage.js          Board interactions (POM)
tests/
  login.spec.js         Login smoke test
  board.spec.js         Main data-driven test suite
playwright.config.js
```

---

## Requirements

- Node.js (LTS recommended)
- npm

---

## Installation

```bash
npm install
npx playwright install
```

---

## Running Tests (Command Line)

Run all tests (headless by default):

```bash
npm test
```

Run with visible browser:

```bash
npm run test:headed
```

Run in UI mode (for debugging):

```bash
npm run test:ui
```

Run only the login test:

```bash
npm run test:login
```

Run only the board suite:

```bash
npm run test:board
```

---

## Running Tests in VS Code

1. Install the Playwright Test extension for VS Code  
2. Open the project root folder  
3. Use the Testing panel to run tests  

To run with a visible browser from VS Code, temporarily set in `playwright.config.js`:

```js
use: { headless: false }
```

---

## Data-Driven Design

All test scenarios are defined in:

```
data/testCases.json
```

Adding a new scenario automatically creates a new test without modifying test logic.

---

## Continuous Integration (GitHub Actions)

This repository includes a GitHub Actions workflow that:

- Installs dependencies  
- Installs Playwright browsers  
- Runs the test suite in Chromium  
- Uploads the Playwright HTML report  

The workflow runs automatically on every push and pull request.

Workflow file location:

```
.github/workflows/playwright.yml
```

Chromium is used in CI for speed and stability.  
The project supports multi-browser testing locally (Chromium, Firefox, WebKit).

---
