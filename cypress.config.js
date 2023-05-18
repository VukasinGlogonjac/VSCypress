const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://cypress.vivifyscrum-stage.com/',
    env: {
      email: 'vuleglogonjac+13@gmail.com',
      password: 'test1234',
      apiUrlTask: 'https://cypress-api.vivifyscrum-stage.com/api/v2/tasks',
      apiUrlBoard: 'https://cypress-api.vivifyscrum-stage.com/api/v2/boards'
    }
  },
});
