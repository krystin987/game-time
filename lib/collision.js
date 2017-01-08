// var Paddle = require('./paddle');
// var Ball = require('./ball');
//
// function Collision(options) {
//   this.context = options.context;
//   this.canvas = options.canvas;
//   this.paddle = Paddle;
//   this.ball = Ball;
// };
//
//
//
// Collision.prototype.ballCollision = function () {
//   if(this.ball.x + this.ball.dx > this.canvas.width-this.ball.radius || this.ball.x + this.ball.dx < this.ball.radius) {
//     this.ball.dx =-this.ball.dx;
//   }
//   if(this.ball.y + this.ball.dy < this.ball.radius) {
//     this.ball.dy =-this.ball.dy;
//   }
//   if (this.ball.y + this.ball.dy > this.canvas.height-this.ball.radius) {
//     alert("GAME OVER");
//     document.location.reload();
//   }
// };
//
//
//
//
// module.exports = Collision;
