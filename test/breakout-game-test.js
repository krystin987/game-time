var chai = require('chai');
var assert = chai.assert;
var Game = require('../lib/breakout-game');

describe('Game', function(){
  context('default', function(){
    var game = new Game({
      x: this.x,
      y: this.y,
      context: {},
      canvas: {}
    });
    it('should be a function', function() {
          assert.isFunction(Game);
        });
    it('should have a context property', function() {
        assert.property(game, 'context');
        });
    it('should have a canvas property', function() {
        assert.property(game, 'canvas');
    });

    it('should have a paddle property', function() {
      assert.property(game, 'paddle');
    });

    it('should have a ball property', function() {
      assert.property(game, 'ball');
    });

    it('should have a default gameState of 0', function () {
      assert.equal(game.gameState, 0);
    });

    context('on gameState functions', function(){
      var game = new Game({
        x: this.x,
        y: this.y,
        context: {},
        canvas: {}
      });

      it('should have a function for (gameBegin)', function() {
        assert.isFunction(game.gameBegin);
      });

      it('should have a function for gameOver', function() {
        assert.isFunction(game.gameOver);
      });

      // it('should have a function for gamePause', function() {
      //   assert.isFunction(game.gamePause);
      // });

      it('should have a function for animate', function() {
        assert.isFunction(game.animate);
      });

      it('should have a function for timing', function(){
        assert.isFunction(game.timing);
      });

    });

    context('on collision functions', function(){
      var game = new Game({
        x: this.x,
        y: this.y,
        context: {},
        canvas: {}
      });

      it('should have a function to test collision with the sides of the canvas and the ball', function(){
        assert.isFunction(game.collisionLeftRight);
      });

      it('should have a function to test collision with the bottom of the canvas and the ball', function(){
        assert.isFunction(game.collisionBottom);
      });

      it('should have a function to test collision with the ball and the top of the canvas', function(){
        assert.isFunction(game.collisionTop);
      });

      it('should have a function to test for collision with the ball and the paddle', function(){
        assert.isFunction(game.collisionBallPaddle);
      });

      it('should have a function to change ball direction upon collision with the sides of the canvas or paddle', function(){
        assert.isFunction(game.wallPaddleCollision);
      });

      // it('when the ball collides with any canvas side or the game paddle, the ball should change direction', function(){
      //
      // });


    });

  });
});
