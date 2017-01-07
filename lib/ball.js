function Ball(options) {
  this.x = options.x || options.canvas.width/2; //halfway point on canvas
  this.y = options.y || options.canvas.height-20;
  this.radius = options.radius || 8;
  this.dx = options.dx || 2;
  this.dy = options.dy || -2;
  this.context = options.context;
  this.canvas = options.canvas;
  this.paddle = options.paddle;

};


Ball.prototype.drawBall = function() {
      this.context.beginPath();
      this.context.arc(this.x, this.y, this.radius, 0, Math.PI*2);
      this.context.fillStyle = "black";
      this.context.fill();
      this.context.closePath();
};


Ball.prototype.moveBall = function () {
  this.x += this.dx;
  this.y += this.dy;
};




//
// Ball.prototype.bounceBall = function () {
//   if(this.x + this.dx > this.canvas.width-this.radius || this.x + this.dx < this.radius) {
//     this.dx =-this.dx;
//   }
//
//   if(this.y + this.dy < this.radius) {
//     this.dy =-this.dy;
//   } else if (this.y + this.dy > this.canvas.height-this.radius)
//   {
//     if(this.x > paddle.x && this.x < paddle.y + paddle.width) {
//       this.dy =-this.dy;
//     } else {
//       alert("GAME OVER");
//       document.location.reload();
//     }
//   }
//
// };



module.exports = Ball;
