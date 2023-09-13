// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },

//   env: ({
//     chromeWebSecurity: false,
//   })
// });

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  hideXhr: true,
  

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
   
    },
    env: {
      hideXhr: true
    }
  },
});
