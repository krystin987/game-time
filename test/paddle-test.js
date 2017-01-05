var chai = require('chai');
var assert = chai.assert;
var Paddle = require('../lib/paddle');

describe ('Paddle', function(){
  context('default', function(){

    it('Paddle should be a function', function(){
      var paddle = new Paddle();
      assert.isFunction(Paddle);
    });



  });
});
