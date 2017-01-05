var chai = require('chai');
var assert = chai.assert;
var Paddle = require('../lib/paddle');

it('Paddle should be a function', function(){
  assert.isFunction(Paddle);
});
