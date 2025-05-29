const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 2400,
  defaultCommandTimeout: 10000,
  responseTimeout: 30000,
  chromeWebSecurity: false,
  watchForFileChanges: false,
  e2e: {
    downloadsFolder: 'cypress/downloads',
    specPattern: 'e2e/**/**.spec.{js,ts}',
    fixturesFolder: 'fixtures',
    supportFile: 'support/e2e.js',
    baseUrl: 'https://reqres.in/api/',
    setupNodeEvents(on, config) {
      return config;
    },
    userAgent:
        'Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) CriOS/85.0.4183.109 Mobile/15E148 Safari/604.1',
  },
  video: true,
  // trashAssetsBeforeRuns: false,
  videoCompression: 35,
  env: {
    apiKey: 'reqres-free-v1',
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
});
