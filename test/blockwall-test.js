var chai = require('chai');
var assert = chai.assert;
var Paddle = require('../lib/blockwall');


// // BLOCKWALL COLLISION
// // The x position of the ball is greater than the x position of the brick.
  this.ball.x > this.blockwall.x
// // The x position of the ball is less than the x position of the brick plus its width.
  this.ball.x < this.blockwall.x+this.blockwall.width
// // The y position of the ball is greater than the y position of the brick.
  this.ball.y > this.blockwall.y
// // The y position of the ball is less than the y position of the brick plus its height.
  this.ball.y < this.blockwall.y+this.blockwall.height
//
