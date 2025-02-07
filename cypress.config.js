const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Define the configuration options for Cypress
  // Example configuration options:

  // Set the test file pattern to include
  // In this case, it includes all .feature files
  e2e: {
    specPattern: "**/*.feature",
    baseUrl: "http://localhost:3000",
  },

  // Optionally, you can define other Cypress configuration options here
});
