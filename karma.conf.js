module.exports = function(config) {
	config.set({
		basePath: "",
		frameworks: ["jasmine"],
		files: ["./test/temp/allSpecs.js"],
		exclude: [],
		preprocessors: {},
		reporters: ["progress"],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		browsers: ["Firefox", "Chrome"],
		singleRun: true,
		concurrency: Infinity,
		customLaunchers: {
			Chrome_travis_ci: {
				base: 'Chrome',
				flags: ['--no-sandbox']
			}
		}
	});
};
