/**
 * Test the test-environment
 */
"use strict";

/* global describe it */

var assert = require("assert");


describe("This is test of test", function() {
    it("should be true", function() {
        let one = 1;
        let two = 1;

        assert.equal(one, two);
    });

    it("should be false", function() {
        let one = 1;
        let two = 2;

        assert.notEqual(one, two);
    });
});
