const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  defaultCommandTimeout: 15_000,
  chromeWebSecurity: false,
  
  env: {
<<<<<<< HEAD
    apiKey: '9be7f1fb4d6df4bd48603505d75108c9',
    apiToken: 'ATTAc2d2170cdeef873276e114363f69b2ab2ad32e8bb1f0bf66b6935f39f5fbb219224BC6A4',
    email: 'kaspar@ifb.ee',
    password: 'Parool2023',
=======
    apiKey: 'Paste your api key here',
    apiToken: 'Paste you token here',
    email: 'teamonecerebhub@gmail.com',
    password: '170123teamone',
>>>>>>> parent of 7ddc996 (Added tests for list and card functions)
  }


});