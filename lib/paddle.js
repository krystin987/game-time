function Paddle(options) {
  this.context = options.context;
  this.canvas = options.canvas;
  this.height = options.height || 20;
  this.width = options.width || 180;
  this.x = options.x || (options.canvas.width-180)/2;
  this.y = options.y || (options.canvas.height - 20);
  this.moveRight = false;
  this.moveLeft = false;
}

Paddle.prototype.drawPaddle = function() {
  this.context.fillStyle = "white";
  this.context.fillRect(this.x, this.y, this.width, this.height);
};

Paddle.prototype.move = function () {
    if(this.moveRight && this.x < this.canvas.width-this.width) {
      this.x += 6;
    } if (this.moveLeft && this.x > 0) {
      this.x -= 6;
  }
};

module.exports = Paddle;
