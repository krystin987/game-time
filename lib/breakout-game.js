var Paddle = require('./paddle');
var Ball = require('./ball');

function Game(context, canvas) {
  this.context = context;
  this.canvas = canvas;
  this.paddle = new Paddle(context, canvas);
  this.ball = new Ball(context, canvas);
  this.gameState = 0;


};

Game.prototype.gameBegin = function() {

};

Game.prototype.gameOver = function() {

};

Game.prototype.gamePause = function() {

};

Game.prototype.animate = function() {

};

Game.prototype.timing = function() {

};




// Game.prototype.gameState = function() {
//   if(this.gameState === 0 || this.gameMode === 3) {
//     this.gameStart();
//   }
//   if(this.gameMode === 1) {
//     this.gameAnimate();
//   }
// };



// Game.prototype.gameStart = function() {
//   this.context.clearRect(0, 0, this.canvas.width,
//   this.canvas.height);
//   this.runPopulateBrickArray();
//   this.paddle.draw();
//   this.paddle.move(this.rightPressed, this.leftPressed);
//   this.allBallActions();
//   this.score.textUpdate(this.context, this.canvas, this.gameMode);
//   this.drawBricks();
//   if (this.score.level === 1) {
//     this.paddle.w = 200;
//   }
// };




// if (this.gameMode === 2){
//   this.gamePause();
// }
// if (this.gameMode === 4) {
//   this.gameEnd();
// }
// if (this.score.bricksAlive === 0 && this.score.level === 1) {
//   this.levelUp();
// }
// if (this.score.bricksAlive === 0 && this.score.level === 2) {
//   this.gameWin();
// }

//
// function Game(canvas, context){
//   this.canvas = canvas;
//   this.context = context;
//   this.paddle = new Paddle(context, canvas);
//   this.ball = new Ball(context, canvas, this.paddle);
// };
//
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
