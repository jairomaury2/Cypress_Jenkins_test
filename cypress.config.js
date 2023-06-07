const { defineConfig } = require("cypress");



module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    "reportDir": "cypress/reports",
    "overwrite": true,
    "html": true,
    "json": true,
    reportPageTitle: 'test-page',
    chromeWebSecurity: false,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    //overwrite: false,
    "experimentalMemoryManagement": true,
    "numTestsKeptInMemory": 1
  },
  
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  
});


