// Should be working, however I am not able to install SDK on company laptop to test
// and currently don't have my personal laptop
exports.config = {
    runner: 'local',
    specs: ['./appium/specs/**/*.js'],
    maxInstances: 1,

    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',

    capabilities: [{
        platformName: 'Android',
        browserName: 'Chrome',
        'appium:deviceName': 'Android GoogleAPI Emulator',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2'
    }],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    appium: {
        command: 'appium'
    },
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
