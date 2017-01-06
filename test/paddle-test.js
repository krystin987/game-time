var chai = require('chai');
var assert = chai.assert;
var Paddle = require('../lib/paddle');
// var canvas = canvas;
// var context = context;

describe ('Paddle', function(){
  context('default', function(){
      var paddle = new Paddle(5, 10, 10, 10);

    // The paddle should be a function
    it('Paddle should be a function', function() {
      // var paddle = new Paddle();
      assert.isFunction(Paddle);
    });

    // The paddle should have a property for context
    it.skip('should have a context property', function() {
      // var paddle = new Paddle();
      assert.property(paddle, 'context');
    });

    // The paddle should have a property for canvas
    it.skip('should have a canvas property', function() {
      // var paddle = new Paddle();
      assert.property(paddle, 'canvas');
    });

    // The paddle should have a width
    it.skip('Paddle should have a width of 205 by default', function() {
      // var paddle = new Paddle();
      assert.equal(paddle.width, 180);
    });
    //
    it.skip('Paddle should have a height of 20 by default', function() {
      // var paddle = new Paddle();
      assert.equal(paddle.height, 20);
    });

    // The paddle should have an x coordinate
    it.skip('paddle should have a value for x', function() {
      // var paddle = new Paddle(x);
      assert.equal(paddle.x, 5);
    });

// The paddle should have a y coordinate
    it.skip('Paddle should have a value for y', function() {
      // var paddle = new Paddle(1, 2);
      assert.equal(paddle.y, 10);
    });

    it.skip('should increment x by 1 when the right arrow is pressed', function() {
      // var paddle = new Paddle(2, 2, 2, 2);
      assert.equal(paddle.x, 3);
    });

  });
});
