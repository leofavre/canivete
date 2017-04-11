/*jshint esnext: true */

import * as calculator from "../src/calculator";

describe("A Calculator", function() {
  
  it("should be able to add two numbers", function() {
    expect(calculator.add(1, 2)).toEqual(3);
  });

  it("should be able to subtract two numbers", function() {
    expect(calculator.subtract(3, 2)).toEqual(1);
  });

  it("should be able to subtract two numbers again", function() {
    expect(calculator.subtract(4, 3)).toEqual(1);
  });

});
