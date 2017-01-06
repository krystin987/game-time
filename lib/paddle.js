function Paddle(options) {
  // this.canvas = canvas;
  this.x = options.x || 370; //halfway point on canvas
  this.y = options.y || 10;
  this.height = options.height || 20;
  this.width = options.width || 180;
  this.context = options.context;

};

Paddle.prototype.draw = function() {
  this.context.fillStyle="black";
  this.context.fillRect(this.x, this.y, this.width, this.height);
};

Paddle.prototype.scoot = function() {
  this.x++;
  console.log(this.x);
};



module.exports = Paddle;

// The following didn't work, instead I hardcoded integers -kv
// this.paddleX = (canvas.width - this.w)/2;
// this.paddleY = canvas.height - this.h;
