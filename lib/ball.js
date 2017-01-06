// function Ball(canvas, context) {
//   this.x = canvas.width/2;
//   this.y = canvas.height-20;
// }

function Ball(options) {
  this.x = options.x || options.canvas.width/2; //halfway point on canvas
  this.y = options.y || options.canvas.height-20;
  this.radius = options.radius || 8;
  this.dx = options.dx || 2;
  this.dy = options.dy || -2;
  this.context = options.context;
  this.canvas = options.canvas;

};


Ball.prototype.drawBall = function() {
      this.context.beginPath();
      this.context.arc(this.x, this.y, this.radius, 0, Math.PI*2);
      this.context.fillStyle = "black";
      this.context.fill();
      this.context.closePath();
}






module.exports = Ball;
