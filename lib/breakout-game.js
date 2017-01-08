var Paddle = require('./paddle');
var Ball = require('./ball');
var Brick = require('./blockwall');
// var Scoreboard = require('./score');

function Game(options) {
  if (!options) console.log('hi');
  this.context = options.context;
  this.canvas = options.canvas;
  if (!options.canvas) {console.log('canvas not found');};
  if (!options.context) {console.log('context not found');};
  this.paddle = new Paddle(options);
  this.ball = new Ball(options);
  this.gameState = 0;
  this.moveRight = false;
  this.moveLeft = false;
};

Game.prototype.clearBoard = function() {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.gameBegin = function() {
  this.clearBoard();
  this.paddle.drawPaddle();
  this.paddle.move(this.moveRight, this.moveLeft);
  // methods needed still:
  //populating brick array,
  //ball actions,
  //brick drawing
};

Game.prototype.gameOver = function() {
   this.clearBoard();
   this.paddle.drawPaddle();
   this.ball.draw();
  //  needs gameReset();
  // needs brick drawing
};

Game.prototype.gamePause = function() {
  this.clearBoard();
  this.paddle.drawPaddle();
  this.paddle.move(this.moveRight, this.moveLeft)
  // ball actions
  // score updates
  // draw bricks
};

Game.prototype.animate = function() {
  this.clearBoard();
  this.paddle.draw();
  this.paddle.move(this.moveRight, this.moveLeft);
  // ball actions
  //score actions
  // brick drawing
  // ball/paddle collision

};

// Game.prototype.paddleOnBoard = function() {
//   var [x, y] = this.paddle.getCorners()[0];
//   if (x <= 0) {
//     return false;
//   }
//   [x, y] = this.paddle.getCorners()[1];
//   if (this.width <= x) {
//     return false;
//   }
//   return true;
// };
//
// Game.prototype.movePaddle = function(direction) {
//   if (this.paddleOnBoard()) {
//     this.paddle.move(direction);
//   }
// };

Game.prototype.timing = function() {
  if(this.gameState === 0 || this.gameState === 3) {
    this.gameBegin();
  }
  if(this.gameState === 1) {
    this.animate();
  }
  if (this.gameState === 2) {
    this.gamePause();
  }
  if (this.gameState === 4) {
    this.gameOver();
  }
  // conditional for levels
  // conditional for 'winning' - we may or may not use this

};

// var paddle = new Paddle({
//   x: this.x,
//   y: this.y,
//   height: this.height,
//   width: this.width,
//   context: this.context,
//   canvas: this.canvas
// });
//
// var ball = new Ball({
//   x: this.x,
//   y: this.y,
//   radius: this.radius,
//   dx: this.dx,
//   dy: this.dy,
//   context: this.context,
//   canvas: this.canvas
// });
//
//
//
// Game.prototype.draw = function(paddle) {
//   this.context.fillStyle = "black";
//   this.context.fillRect(this.x, this.y, this.width, this.height);
// };
//
//
//
//

module.exports = Game;
