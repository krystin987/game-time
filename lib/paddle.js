// var Collision = require('./collision');

function Paddle(options) {
  this.context = options.context;
  this.canvas = options.canvas;
  this.height = options.height || 20;
  this.width = options.width || 180;
  this.x = options.x || (options.canvas.width-180)/2; //halfway point on canvas
  this.y = options.y || 560;
  this.dx = 15;
};

Paddle.prototype.drawPaddle = function() {
  this.context.fillStyle = "black";
  this.context.fillRect(this.x, this.y, this.width, this.height);
};

Paddle.prototype.getCorners = function() {
  return [[this.x, this.y], [this.x + this.width, this.y + this.height]];

}

Paddle.prototype.move = function (direction) {
    this.x += direction*this.dx;
};
// document.addEventListener("keydown", keyDown, false);
// document.addEventListener("keyup", keyUp, false);
// var moveLeft = false
// var moveRight = false



// function keyDown(e) {
//   if(e.keyCode == 39) {
//     moveRight = true;
//   }
//   else if(e.keyCode == 37) {
//     moveLeft = true;
//   }
// }

// function keyUp(e) {
//   if(e.keyCode == 39) {
//     moveRight = false;
//   }
//   else if(e.keyCode == 37) {
//     moveLeft = false;
//   }
// }


// Paddle.prototype.movePaddleRight = function(){
//   if(right && this.x < this.canvas.width-this.width) {
//     this.x += 6;
//   }
// };
//
// Paddle.prototype.movePaddleLeft = function () {
//   if (left && this.x > 0) {
//     this.x -= this.dx;
//   }
//   if (left && this.x > 0) {
//     this.x -= this.dx;
//   }
// };


// Paddle.prototype.move = function(right, left) {
//   if (right && this.x < this.canvas.width - this.w) {
//     this.x += this.dirX;
//   }
//   if (left && this.x > 0) {
//     this.x -= this.dirX;
//   }
// };




module.exports = Paddle;
