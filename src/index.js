const login = require("./login.page.js");
const populateTimesheet = require("./populate.js");
const timeSheet = require("./timesheet.page.js");
require("dotenv").config();
const { USERNAME, PASSWORD } = process.env;

describe("Submit time entries for the week", () => {
  it("Logins with valid user credentials", () => {
    browser.url("/");
    login.submit(USERNAME, PASSWORD);
  });

  it("Submits timesheet data", () => {
    browser.url("/TimeSheetEntry");
    populateTimesheet();
    timeSheet.submit();
    browser.debug();
  });
});
