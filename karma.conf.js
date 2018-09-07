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
    frameworks: ['jasmine'],
    files: [
      {
        pattern: 'test/*.js',
        watched: false
      }
    ],
    preprocessors: {
      'test/*.js': ['webpack']
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
            include: path.resolve(__dirname, 'test'),
            exclude: /((node_modules|docs|dist)(\\|\/|$)|test\.js$)/
          }
        ]
      }
    },
    reporters: ['coverage-istanbul'],
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
      skipFilesWithNoCoverage: true
    }
  });
};
