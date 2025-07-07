const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.google.com',
    setupNodeEvents(on, config) {
      // configurações se necessário
    },
  },
});
