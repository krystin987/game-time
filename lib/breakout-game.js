var Paddle = require('./paddle');
var Ball = require('./ball');
var Blockwall = require('./blockwall');
// var Scoreboard = require('./score');

function Game(options) {
  // if (!options) console.log('hi');
  this.context = options.context;
  this.canvas = options.canvas;
  // if (!options.canvas) {console.log('canvas not found');};
  // if (!options.context) {console.log('context not found');};
  this.paddle = new Paddle(options);
  this.gameState;
  this.ball = new Ball(options);
  this.blockwall = new Blockwall(options);
  this.moveRight = false;
  this.moveLeft = false;
  this.score = 0;
};



Game.prototype.clearBoard = function() {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.gameBegin = function() {
  // console.log('start game');
  this.blockwall.createBlock();
  //do things in pregame state
  // maybe when press space bar -- animatation and start game
};

Game.prototype.gameOver = function() {
// When ball goes out of bottom
};

Game.prototype.gamePause = function() {
  console.log('pause!?!?!?!?!?');







  // function stop() {
  //   if () {
  //      window.cancelAnimationFrame(requestId);
  //      requestId = undefined;
  //   }
// when press certain key == pause game
};

Game.prototype.gameWin = function() {
  // alert("YOU WIN, CONGRATS!");
  document.location.reload();
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
  this.collisionBlockwall();
};


// Game.prototype.gameState = function (){
//  if (this.b.x < -100000 && this.b.y < -100000) {
//    gameState = 5;
//  } else if
// };

Game.prototype.timing = function(newGameState) {
  this.gameState = newGameState;
  console.log(this.gameState);
  if(this.gameState === 0 || this.gameState === 3) {
    // console.log('begin game');
    this.gameBegin();
    this.gameState = 1;

  }
  if(this.gameState === 1) {
    // console.log('playing game');
    this.animate();
  }
  if (this.gameState === 2) {
    this.gamePause();
  }
  if (this.gameState === 4) {
    this.gameOver();
  }
  if (this.gameState === 5){
    this.gameWin();


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
  if(this.collisionLeftRight()) {
    this.changeBallDX();
    // console.log('side');
  }

  if(this.collisionTop()) {
    this.changeBallDY();
    // console.log('top');
  }
  else if (this.ball.y + this.ball.dy > this.canvas.height-this.ball.radius)
  {

  if(this.collisionBallPaddle()) {
    this.changeBallDY();
    // BALL HIT TOP OF PADDLE
    // this.ball.y = (this.ball.y-16)
    // console.log('paddle');
    } else {
      // alert("GAME OVER");
      // console.log('you lose');
      // document.location.reload();
    }
  }
}



Game.prototype.collisionBlockwall = function () {
  for(c=0; c<this.blockwall.blockColumnCount; c++) {
    for(r=0; r<this.blockwall.blockRowCount; r++) {
      var b = this.blockwall.blocks[c][r];
      if(b.status == 1) {
        if (this.ball.x > b.x && this.ball.x < b.x+this.blockwall.width && this.ball.y > b.y && this.ball.y < b.y+this.blockwall.height ) {
          this.changeBallDY();
          // console.log('collision');
          b.status = 0;
          b.x = -100000;
          b.y = -100000;
          // console.log(b.status);
          this.score++;
          // console.log(this.score);
      if(this.score == this.blockwall.blockRowCount*this.blockwall.blockColumnCount) {
            this.gameState = 5;
          }
        }
      }
  }
}
};



module.exports = Game;
