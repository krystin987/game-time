var chai = require('chai');
var assert = chai.assert;
var Paddle = require('../lib/paddle');
// var canvas = canvas;
// var context = context;

describe ('Paddle', function(){
  context('default', function(){
      var paddle = new Paddle({
      x: 370,
      y: 10,
      width: 180,
      height: 20,
      context: {},
      canvas: {}
    });

    // The paddle should be a function
    it('Paddle should be a function', function() {
      assert.isFunction(Paddle);
    });

    // The paddle should have a property for context
    it('should have a context property', function() {
      assert.property(paddle, 'context');
    });

    // The paddle should have a width
    it('Paddle should have a width of 180 by default', function() {
      assert.equal(paddle.width, 180);
    });
    //
    it('Paddle should have a height of 20 by default', function() {
      assert.equal(paddle.height, 20);
    });

    // The paddle should have an x coordinate
    it('paddle should have a default value for x', function() {
      assert.equal(paddle.x, 370);
    });

// The paddle should have a y coordinate
    it('Paddle should have a value for y', function() {
      assert.equal(paddle.y, 10);
    });

    it.skip('should increment x by 1 when the right arrow is pressed', function() {
      assert.equal(paddle.x, 6);
    });

  });
});
