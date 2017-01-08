var chai = require('chai');
var assert = chai.assert;
var Game = require('../lib/breakout-game');

describe ('Game', function() {
  context('default', function() {
    var game = new Game({});

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

  });

  context('on gameState functions', function() {
    var game = new Game({});

    it('should have a function for (gameBegin)', function() {
      assert.isFunction(game.gameBegin);
    });

    it('should have a function for gameOver', function() {
      assert.isFunction(game.gameOver);
    });

    it('should have a function for gamePause', function() {
      assert.isFunction(game.gamePause);
    });

    it('should have a function for animate', function() {
      assert.isFunction(game.animate);
    });

    it('should have a function for timing', function(){
      assert.isFunction(game.timing);
    });
  });
});
