const can = require("./.canivete.config.js");

module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [can.karma.input],
		exclude: [],
		preprocessors: {},
		reporters: ['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		browsers: ['Firefox'],
		singleRun: true,
		concurrency: Infinity
	})
}
