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

  it("into the timesheet data", () => {
    browser.url("/TimeSheetEntry");
    const isPopulated = populateTimesheet();
    expect(
      isPopulated,
      "Time sheet was already submitted, cannot submit it again"
    ).to.be.true;
    timeSheet.submit();
    timeSheet.confirm();
    timeSheet.ok();
  });

  it("Verifies success", () => {
    expect(timeSheet.success.isExisting()).to.be.true;
  });
});
