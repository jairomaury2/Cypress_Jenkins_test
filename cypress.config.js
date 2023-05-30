const { defineConfig } = require("cypress");



module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    chromeWebSecurity: false,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false,
    "experimentalMemoryManagement": true,
    "numTestsKeptInMemory": 1
  },
  
  
  
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // baseUrl: "https://app.rocketfy.mx/";
      // implement node event listeners here
    },
  },
  // URL_DEV: surge_url || 'https://pr-480-rocketfy-v4.surge.sh/'
});


