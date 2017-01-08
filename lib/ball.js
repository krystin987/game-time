function Ball(options) {
  if (!options) console.log('hi');
   this.canvas = options.canvas;
   this.context = options.context;
   this.x = options.x || options.canvas.width/2; //halfway point on canvas
   this.y = options.y || options.canvas.height-20;
   this.dy = options.dy || -2;
   this.dx = options.dx || 2;
   this.radius = options.radius || 8;
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

module.exports = Ball;
