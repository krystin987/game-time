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
  this.score = this.score || 9;
}

Game.prototype.load = function() {
  this.timing();
};

Game.prototype.clearBoard = function() {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.gameBegin = function() {
  console.log('start game');
  this.blockwall.createBlock();
};

Game.prototype.gameOver = function() {
  this.appendLose();

  $(document).on('keyup', function(){
    document.location.reload();
  })
};


// Game.prototype.loser = function() {
//
//   $(document).on('keydown', function(e){
//     console.log(e.keycode);
//     if (e.keycode == 13) {
//       document.location.reload();
//     }
//   });
//
// }



// Game.prototype.levelUp = function () {
//   // this.gameState = 2
//   // console.log(this.gameState);
//   // // this.load = false;
//   // console.log('levellll up');
//   // this.game.load();
//   // // this.ball = new Ball({options});
//   // // this.ball.dy += 1;
//   // // this.ball.dx += 1;
//   // this.blockwall.createBlock(blockwall);
// };


Game.prototype.gameWin = function() {
  this.appendWin();

  $(document).on('keyup', function(){
    document.location.reload();
});
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


Game.prototype.timing = function() {
  if(this.gameState === 0 || this.gameState === 3) {
    console.log('begin game');
    this.gameBegin();
    this.gameState = 1;
  }
  if(this.gameState === 1) {
    console.log('playing game');
    this.animate();
  }
  // if (this.gameState === 2) {
  //   // this.bitches();
  // }
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
  else if (this.ball.y+(this.ball.radius*2) + this.ball.dy > this.canvas.height-this.ball.radius) {

  if(this.collisionBallPaddle()) {
    this.changeBallDY();
    // console.log('paddle');
    } else {
      this.gameState = 4;

    }
  }
};


Game.prototype.collisionBlockwall = function () {
  for(c=0; c<this.blockwall.blockColumnCount; c++) {
    for(r=0; r<this.blockwall.blockRowCount; r++) {
      var b = this.blockwall.blocks[c][r];
      if(b.status == 1) {
        if (this.ball.x > b.x && this.ball.x < b.x+this.blockwall.width && this.ball.y > b.y && this.ball.y < b.y+this.blockwall.height ) {
          this.changeBallDY();
          // console.log('collision');
          b.status = 0;
          b.x = -10000000;
          b.y = -10000000;
          console.log(b.status);
          this.score++;
          this.appendScore();
          console.log(this.score);
      if(this.score == this.blockwall.blockRowCount*this.blockwall.blockColumnCount) {
          console.log('game state change');
            this.gameState = 5;
          }
        }
      }
  }
}
};

Game.prototype.appendScore = function(){
  var score = this.score;

  $('.score').text(score);
};

Game.prototype.appendWin = function(){
  $('.win-lose').text("You WIN!");
  $('.win-lose-instructions').text("Press space bar twice to play again at higher difficulty");
};

Game.prototype.appendLose = function(){
  $('.win-lose').text("You Lose!")
  $('.win-lose-instructions').text("Press any key to play again")
};


module.exports = Game;
