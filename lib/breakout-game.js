var Paddle = require('./paddle');
var Ball = require('./ball');
var Blockwall = require('./blockwall');

function Game(options) {
  this.context = options.context;
  this.canvas = options.canvas;
  this.paddle = new Paddle(options);
  this.ball = new Ball(options);
  this.blockwall = options.blockwall || new Blockwall(options);
  this.gameState = 0;
  this.moveRight = false;
  this.moveLeft = false;
  this.score = this.score || 0;
}


// Game States
Game.prototype.timing = function() {
  if(this.gameState === 0) {
    this.gameBegin();
    this.gameState = 1;
  }
  if(this.gameState === 1) {
    this.animate();
  }

  if (this.gameState === 4) {
    this.gameOver();
  }
  if (this.gameState === 5){
    this.gameWin();
  }
};


Game.prototype.load = function() {
  this.timing();
};

Game.prototype.clearBoard = function() {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.animate = function() {
  this.clearBoard();
  this.paddle.drawPaddle();
  this.paddle.move();
  this.blockwall.drawBlocks();
  this.ball.drawBall();
  this.ball.moveBall();
  this.wallPaddleCollision();
  this.collisionBlockwall();
};

Game.prototype.gameBegin = function() {
  this.blockwall.createBlock();
};

Game.prototype.gameOver = function() {
  this.appendLose();

  $(document).on('keyup', function(){
    document.location.reload();
  });
};

Game.prototype.gameWin = function() {
  this.appendWin();

  $(document).on('keyup', function(){
    document.location.reload();
});
};

// COLLISION
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


// Collision between ball and all sides and paddle
Game.prototype.wallPaddleCollision = function() {
  if(this.collisionLeftRight()) {
    this.changeBallDX();
  }
  if(this.collisionTop()) {
    this.changeBallDY();
  }
  else if (this.ball.y+(this.ball.radius*2) + this.ball.dy > this.canvas.height-this.ball.radius) {

  if(this.collisionBallPaddle()) {
    this.changeBallDY();
    } else {
      this.gameState = 4;
    }
  }
};

// COllision with blockwall and ball
Game.prototype.collisionBlockwall = function () {
  for(c=0; c<this.blockwall.blockColumnCount; c++) {
    for(r=0; r<this.blockwall.blockRowCount; r++) {
      var b = this.blockwall.blocks[c][r];
      if(b.status == 1) {
        if (this.ball.x > b.x && this.ball.x < b.x+this.blockwall.width && this.ball.y > b.y && this.ball.y < b.y+this.blockwall.height ) {
          this.changeBallDY();
          b.status = 0;
          b.x = -10000000;
          b.y = -10000000;
          this.score++;
          this.appendScore();
      if(this.score == this.blockwall.blockRowCount*this.blockwall.blockColumnCount) {
            this.gameState = 5;
         }
        }
      }
    }
  }
};


// Append HTML Functions for win/lose and score  
Game.prototype.appendScore = function(){
  var score = this.score;
  $('.score').text(score);
};

Game.prototype.appendWin = function(){
  $('.win-lose').text("You WIN!");
  $('.win-lose-instructions').text("Press any key to play again.");
  $('.win-instructions').text("Press space bar twice to increase speed");
  $('.game-instructions').hide();
};

Game.prototype.appendLose = function(){
  $('.win-lose').text("You Lose!");
  $('.win-lose-instructions').text("Press any key to play again");
  $('.game-instructions').hide();
};

module.exports = Game;
