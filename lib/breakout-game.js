var Paddle = require('./paddle');
var Ball = require('./ball');
var Blockwall = require('./blockwall');
var Collision = require('./collision');
// var Scoreboard = require('./score');

function Game(options) {
  if (!options) console.log('hi');
  this.context = options.context;
  this.canvas = options.canvas;
  if (!options.canvas) {console.log('canvas not found');};
  if (!options.context) {console.log('context not found');};
  this.paddle = new Paddle(options);
  this.ball = new Ball(options);
  this.blockwall = new Blockwall(options);
  this.collision = new Collision(options);
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
  this.paddle.move();
  // methods needed still:
  this.blockwall.createBlock();
  this.blockwall.drawBlocks();
  this.ball.drawBall();
  this.ball.moveBall();
  // this.collision.wallPaddleCollision();

};

Game.prototype.gameOver = function() {
   this.clearBoard();
   this.paddle.drawPaddle();
   this.ball.drawBall();
   this.ball.moveBall();
  //  this.collision.wallPaddleCollision();
  //  needs gameReset();
  this.blockwall.createBlock();
  this.blockwall.drawBlocks();
};

Game.prototype.gamePause = function() {
  this.clearBoard();
  this.paddle.drawPaddle();
  this.paddle.move()
  this.ball.drawBall();
  this.ball.moveBall();
  // this.collision.wallPaddleCollision();
  // score updates
  this.blockwall.createBlock();
  this.blockwall.drawBlocks();
};

Game.prototype.animate = function() {
  this.clearBoard();
  this.paddle.draw();
  this.paddle.move();
  this.ball.drawBall();
  this.ball.moveBall();
  //score actions
  this.blockwall.createBlock();
  this.blockwall.drawBlocks();
  this.game.wallPaddleCollision();
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



// function Collision(options) {
//   this.context = options.context;
//   this.canvas = options.canvas;
//   this.paddle = options.paddle;
//   this.ball = options.ball;
//   this.blockwall = options.blockwall;
// };


Game.prototype.changeBallDY = function () {
  return this.ball.dy =- this.ball.dy;
};

Game.prototype.changeBallDX = function () {
  return this.ball.dx =- this.ball.dx;
};

Game.prototype.collisionLeftRight = function(){
  return this.ball.x > this.canvas.width - this.ball.radius || this.ball.x < this.ball.radius;
};

Game.prototype.collisionBottom = function() {
  return this.ball.y > this.canvas.height - (this.ball.radius + this.paddle.height);
};

Game.prototype.collisionTop = function(){
  return this.ball.y < this.ball.radius;
};

Game.prototype.collisionBallPaddle = function() {
  return this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddle.width;
};


Game.prototype.wallPaddleCollision = function() {
  if(this.collisionLeftRight()) {
    this.changeBallDX();
    console.log('side');
  }

  if(this.collisionTop()) {
    this.changeBallDY();
    console.log('top');
  }
  else if (this.ball.y + this.ball.dy > this.canvas.height-this.ball.radius)
  {

  if(this.collisionBallPaddle()) {
    this.changeBallDY();
    console.log('paddle');
    } else {
      alert("GAME OVER");
      console.log('you lose');
      document.location.reload();
    }
  }
}




module.exports = Game;
