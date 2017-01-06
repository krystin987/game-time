function Paddle(options) {
  // this.canvas = canvas;
  this.x = options.x || 370; //halfway point on canvas
  this.y = options.y || 560;
  this.height = options.height || 20;
  this.width = options.width || 180;
  this.context = options.context;

};




module.exports = Paddle;

// The following didn't work, instead I hardcoded integers -kv
// this.paddleX = (canvas.width - this.w)/2;
// this.paddleY = canvas.height - this.h;
