var chai = require('chai');
var assert = chai.assert;
var Ball = require('../lib/ball');


describe ('Ball', function(){
  context('default', function(){
      var ball = new Ball({
      x: 280,
      y: 570,
      radius: 8,
      dx: 2,
      dy: -2,
      context: {},
      canvas: {}
    });

    // The ball should be a function
    it('Ball should be a function', function() {
      assert.isFunction(Ball);
    });


    // The ball should have a radius
    it('Ball should have a radius of 8 by default', function() {
      assert.equal(ball.radius, 8);
    });
    //

    // The ball should have an x coordinate
    it('Ball should have a value for x of 280', function() {
      assert.equal(ball.x, 280);
    });

    // The ball should have a y coordinate
    it('Ball should have a value for y of 570', function() {
      assert.equal(ball.y, 570);
    });

    // The ball shouls have a move function
    it('Ball should have a move function', function(){
      assert.isFunction(ball.moveBall);
    })

    // The ball should bounce in the move function
    it('Ball should bounce in the move function', function(){
      ball.moveBall();
      assert.equal(ball.x, 282)
      assert.equal(ball.y, 568)
    })




  });
});
