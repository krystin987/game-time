function Paddle(x, y, width, height, context) {
  // this.canvas = canvas;
  this.x = x || 190;
  this.y = y || 560;
  this.width = width || 180;
  this.height = height || 20;
  this.context = context;

};

Paddle.prototype.scoot = function() {
  this.x++;
};

Paddle.prototype.draw = function() {
  this.context.fillStyle = "#000000";
  this.context.fillRect(this.x, this.y, this.width, this.height);
};


module.exports = Paddle;

// The following didn't work, instead I hardcoded integers -kv
// this.paddleX = (canvas.width - this.w)/2;
// this.paddleY = canvas.height - this.h;
