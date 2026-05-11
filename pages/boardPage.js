
//this file runs the test cases for the data in our json file to keep Data Driven Principles and inifinte scalability ->called by the test suite in board.spec.js

const { expect } = require('@playwright/test');

class BoardPage {

  constructor(page) {
    this.page = page;
  }

  // Navigate to a board (side panel) by clicking its name {Web Application, Mobile Application, Marketing Campaign} (NOTE: Marketing Campaign is not part of test cases)
  async navigateTo(appName) {
    await this.page.click(`text=${appName}`);

  }

  //Verify task exists in correct column
  async verifyTaskInColumn(task, column) {

    // Locate the column by its text
    const columnLocator = this.page.locator(`text=${column}`).locator('..');

    // Expect the column to contain the task
    await expect(columnLocator).toContainText(task);
  }

  //Verify required tags on task card

  async verifyTags(task, tags) {

    // Locate task card
    const taskCard = this.page.locator(`text=${task}`).locator('..');

    for (const tag of tags) {
      await expect(taskCard).toContainText(tag);
    }
  }
}

module.exports = { BoardPage };
