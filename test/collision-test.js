var chai = require('chai');
var assert = chai.assert;
var Ball = require('../lib/collision');



describe ('Collision', function(){
  context('default', function(){
      var collision = new Collision({
      context: {},
      canvas: {},
    });


    // The collision should be a function
    it('should be a function', function() {
      assert.isFunction(Collision);
    });

    





  });
});
