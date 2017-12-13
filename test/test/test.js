/**
 * Test the test-environment
 */
"use strict";

/* global describe it */

var assert = require("assert");
var request = require("supertest");
const app = require("../../app.js");

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


describe('GET routes', function() {
    this.timeout(15000);
    it('/ respond with 200', function(done) {
        request(app)
            .get('/')
            .expect(200, done);
    });
    it('/about respond with 200', function(done) {
        request(app)
            .get('/about')
            .expect(200, done);
    });
    it('/report respond with 200', function(done) {
        request(app)
            .get('/report')
            .expect(200, done);
    });
    it('/nim respond with 200', function(done) {
        request(app)
            .get('/nim')
            .expect(200, done);
    });
    it('/playnim respond with 200', function(done) {
        request(app)
            .get('/playnim')
            .expect(200, done);
    });
    it('/chatt respond with 200', function(done) {
        request(app)
            .get('/chatt')
            .expect(200, done);
    });
    it('/foo respond with 404', function(done) {
        request(app)
            .get('/foo')
            .expect(404, done);
    });
});
