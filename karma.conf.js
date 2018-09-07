const path = require('path');

process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = (config) => {
  config.set({
    browsers: [
      'ChromeHeadlessNoSandbox',
      'FirefoxHeadless'
    ],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      },
      FirefoxHeadless: {
        base: 'Firefox',
        flags: ['-headless']
      }
    },
    browserNoActivityTimeout: 60000,
    singleRun: true,
    frameworks: ['mocha', 'chai-sinon'],
    proxies: {
      '/': '/base/packages/'
    },
    files: [
      {
        pattern: './karma/*.js',
        watched: false,
        served: true
      },
      {
        pattern: 'packages/*/src/**/*.test.js',
        watched: false
      },
      {
        pattern: 'packages/*/src/**/*.css',
        watched: true,
        served: true
      }
    ],
    preprocessors: {
      'packages/*/src/**/*.test.js': ['webpack']
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: 'istanbul-instrumenter-loader',
              options: {
                esModules: true
              }
            },
            include: path.resolve('./packages/'),
            exclude: /((node_modules|dev|dist)(\\|\/|$)|test.js$)/
          }
        ]
      }
    },
    mochaReporter: {
      showDiff: true
    },
    reporters: ['mocha', 'coverage-istanbul'],
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
      skipFilesWithNoCoverage: true
    }
  });
};
