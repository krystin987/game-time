function Paddle(options) {
  this.x = options.x || (options.canvas.width-180)/2; //halfway point on canvas
  this.y = options.y || 570;
  this.height = options.height || 20;
  this.width = options.width || 180;
  this.context = options.context;
  this.canvas = options.canvas;
};

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);
var moveLeft = false
var moveRight = false


Paddle.prototype.drawPaddle = function() {
  this.context.fillStyle = "black";
  this.context.fillRect(this.x, this.y, this.width, this.height);
};


function keyDown(e) {
  if(e.keyCode == 39) {
    moveRight = true;
  }
  else if(e.keyCode == 37) {
    moveLeft = true;
  }
}

function keyUp(e) {
  if(e.keyCode == 39) {
    moveRight = false;
  }
  else if(e.keyCode == 37) {
    moveLeft = false;
  }
}



Paddle.prototype.movePaddleRight = function(){
  if(moveRight && this.x < this.canvas.width-this.width) {
    this.x += 6;
  }
};

Paddle.prototype.movePaddleLeft = function () {
  if (moveLeft && this.x > 0) {
    this.x -= 6;
  }
};




module.exports = Paddle;
