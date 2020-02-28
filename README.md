# Salesforce Submitter Tool

This tool automates submission of time report every friday to the salesforce timesheet employee tracking. This way you do not have to worry about submitting this.

It uses a cron job with the help from `node-cron` and `forever`.

## Requirements

Create a .env at root directory containing the following constants:

```javascript
USERNAME=${YOUR_EMAIL}
PASSWORD=${YOUR_PASSWORD}
```

## Installation

To run this and forever forget about submitting your time report, just run:

`forever start cron.js`

If you need to check that everything was successful just run

`forever logs cron.js`
