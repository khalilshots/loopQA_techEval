


//This file is our test suite. It dynamically generates multiple tests from JSON data.

const { test } = require('@playwright/test'); 

const { login } = require('../helpers/loginHelper');
const { BoardPage } = require('../pages/boardPage');
const testCases = require('../data/testCases.json');

// Loop through each JSON object 
testCases.forEach((scenario) => {

  // Dynamically create a test for each scenario
  test(`Validate: ${scenario.task}`, async ({ page }) => {

    //call login helper to ensure DRY principles
    await login(page);

    //create new board page from boardPage.js
    const board = new BoardPage(page);

    //calls each app -> {Web Application, Mobile Application, Marketing Campaign}
    await board.navigateTo(scenario.app);

    //verifies tasks are in column 
    await board.verifyTaskInColumn(
      scenario.task,
      scenario.column
    );

    //verify task has correct tags
    await board.verifyTags(
      scenario.task,
      scenario.tags
    );

  });
});
