var Paddle = require('./paddle');
var Ball = require('./ball');
var Blockwall = require('./blockwall');
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
  this.gameState = 1;
  this.moveRight = false;
  this.moveLeft = false;
};

Game.prototype.clearBoard = function() {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.gameBegin = function() {
  console.log('start game');
  //do things in pregame state
  // maybe when press space bar -- animatation and start game
};

Game.prototype.gameOver = function() {
// When ball goes out of bottom
};

Game.prototype.gamePause = function() {
// when press certain key == pause game
};

Game.prototype.animate = function() {
  this.clearBoard();
  this.paddle.drawPaddle();
  this.paddle.move();
  this.blockwall.createBlock();
  this.blockwall.drawBlocks();
  this.ball.drawBall();
  this.ball.moveBall();
  this.wallPaddleCollision();
// need collision with blocks 
};


Game.prototype.timing = function() {
  if(this.gameState === 0 || this.gameState === 3) {
    console.log('begin game');
    this.gameBegin();
  }
  if(this.gameState === 1) {
    console.log('playing game');
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
  console.log('in collide');
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
