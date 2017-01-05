var chai = require('chai');
var assert = chai.assert;
var Paddle = require('../lib/paddle');
var paddle = new Paddle();

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

    it('should have a canvas property', function(){
      assert.property(paddle, 'canvas')
    });

    it('should have a context property', function(){
      assert.property(paddle, 'context');
    });

// the 1 setting here is for test purposes ONLY
    it.skip('should have a height property set to 1', function(){
      assert.property(paddle, '1');
    });

// the 1 setting here is for test purposes ONLY
    it.skip('should have a width property set to 1', function(){
      assert.property(paddle, '1');
    });

// the 1 setting here is for test purposes ONLY and must be updated
    it.skip('should have an x property set to equal half of the width of the canvas minus the value of the width property', function(){
      assert.property(paddle.x, '1');
    });

// the 1 setting here is for test purposes ONLY and must be updated
    it.skip('should have a y property set to equal the height of the canvas property minus the value of the height property', function(){
      assert.property(paddle.y, '1');
    });

    it.skip('')




  });
});
