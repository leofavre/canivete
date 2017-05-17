import waitInPromise from "../dist/waitInPromise";

describe("waitInPromise", function() {
	it(`Should delay the chaining of the Promise by 100ms and pass along the previously resolved value to the next .then().`, function(done) {
		let timerCallback = jasmine.createSpy("timerCallback");

		Promise.resolve("previousValue")
			.then(waitInPromise(100))
			.then(value => expect(value).toBe("previousValue"))
			.then(timerCallback)
			.then(() => expect(timerCallback).toHaveBeenCalled())
			.then(done);

		expect(timerCallback).not.toHaveBeenCalled();
	});

	it(`Should resolve the Promise without delay if the parameter passed is not a number.`, function(done) {
		let timerCallback = jasmine.createSpy("timerCallback");

		Promise.resolve("previousValue")
			.then(waitInPromise(undefined))
			.then(timerCallback);

		setTimeout(function() {
			expect(timerCallback).toHaveBeenCalled();
			done();
		}, 10);
	});

	it("Should pass along the original Promise argument", function(done) {
		let timerCallback = jasmine.createSpy("timerCallback");

		Promise.resolve("previousValue")
			.then(waitInPromise(undefined))
			.then(value => expect(value).toBe("previousValue"))
			.then(timerCallback);

		setTimeout(function() {
			expect(timerCallback).toHaveBeenCalled();
			done();
		}, 10);
	});
});
