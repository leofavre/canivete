/*jshint esnext: true */

function add(a, b) { return a + b; }

/*jshint esnext: true */

function subtract(a, b) { return a - b; }

/*jshint esnext: true */

/*jshint esnext: true */

describe("A Calculator", function() {
  
  it("should be able to add two numbers", function() {
    expect(add(1, 2)).toEqual(3);
  });

  it("should be able to subtract two numbers", function() {
    expect(subtract(3, 2)).toEqual(1);
  });

  it("should be able to subtract two numbers again", function() {
    expect(subtract(4, 3)).toEqual(1);
  });

});
