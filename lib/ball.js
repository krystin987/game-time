function Ball(canvas, context) {
  this.canvas = canvas;
  this.context = context;
  this.x = canvas.width/2;
  this.y = canvas.height-20;
  this.radius = 8;
  this.dx = 2;
  this.dy = -2;
}


Ball.prototype.drawBall = function() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI*2);
      context.fillStyle = "black";
      context.fill();
      context.closePath();
}



module.exports = Ball;
