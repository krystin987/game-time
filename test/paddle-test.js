var chai = require('chai');
var assert = chai.assert;
var Paddle = require('../lib/paddle');

// expect some of this to change when we decide/commit to
// board/piece sizing, use any values for now - or
// maybe estimate them, the board dimensions
// may be more subjective than tetris?

describe ('Paddle', function(){
  context('default', function(){

    it('Paddle should be a function', function(){
      var paddle = new Paddle();
      assert.isFunction(Paddle);
    });


// The paddle should have an x coordiante
    it('paddle should have a value for x', function(){
      var paddle = new Paddle(1);
      assert.equal(paddle.x, 1);
    });

// The paddle should have a y coordinate
    it('Paddle should have a vale for y', function(){
      var paddle = new Paddle(1, 2);
      assert.equal(paddle.y, 2);
    });

// The paddle should have a width
    it('Paddle should have a width', function(){
      var paddle = new Paddle(1,3,4,5,);
      assert.equal(paddle.width, 4);
    });

// the paddle should have a height
    it('Paddle should have a height', function(){
      var paddle = new Paddle(1,3,4,5);
      assert.equal(paddle.height, 5);
    });


  });
});
