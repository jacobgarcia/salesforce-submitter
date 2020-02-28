const cron = require("node-cron");
const { exec } = require("child_process");

cron.schedule("0 13 * * FRI", () => {
  exec("npm run test");
  console.log("Successfully submitted time to Salesforce");
});
