var chai = require('chai');
var assert = chai.assert;
var Blockwall = require('../lib/blockwall');

describe ('Blockwall', function(){
  context('default', function(){
      var blockwall = new Blockwall({
      context: {},
      canvas: {},
      x: 280,
      y: 10,
      width: 100,
      height: 20,
      padding: 10,
      blocks: [],
    });

    // The blockwall should be a function
    it('Blockwall should be a function', function() {
      assert.isFunction(Blockwall);
    });

    // The blockwall should have a property for context
    it('should have a context property', function() {
      assert.property(blockwall, 'context');
    });

    // The blockwall should have a width and height
    it('Blockwall should have a width of 180 by default', function() {
      assert.equal(blockwall.width, 100);
    });
    //
    it('Blockwall should have a height of 20 by default', function() {
      assert.equal(blockwall.height, 20);
    });

    // The blockwall should have an x coordinate and y coordinate
    it('blockwall should have a default value for x', function() {
      assert.equal(blockwall.x, 280);
    });

    it('Blockwall should have a value for y', function() {
      assert.equal(blockwall.y, 10);
    });

    it('Blockwall should have a value for padding', function(){
      assert.equal(blockwall.padding, 10);
    })

    it('Blockwall should have a blocks array', function(){
      assert.isArray(blockwall.blocks, [] );
    })

  });
});
