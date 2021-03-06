var chai = require('chai');
var assert = chai.assert;
var Paddle = require('../lib/paddle');


describe ('Paddle', function(){
  context('default', function(){
      var paddle = new Paddle({
      x: 280,
      y: 10,
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

    // The paddle should have a width and height
    it('Paddle should have a width of 180 by default', function() {
      assert.equal(paddle.width, 180);
    });
    //
    it('Paddle should have a height of 20 by default', function() {
      assert.equal(paddle.height, 20);
    });

    // The paddle should have an x coordinate and y coordinate
    it('paddle should have a default value for x', function() {
      assert.equal(paddle.x, 280);
    });

    it('Paddle should have a value for y', function() {
      assert.equal(paddle.y, 10);
    });


    // Paddle Should Move NEED TO PLAY WITH!!!!
    // it('should increment x by 6 when the right arrow is pressed', function() {
    //   paddle.movePaddleRight();
    //   assert.equal(paddle.x, 281);
    // });
    //
    // it.skip('should decrement x by 6 when the right arrow is pressed', function() {
    //   paddle.movePaddleLeft();
    //   assert.equal(paddle.x, 274);
    // });

  });
});
