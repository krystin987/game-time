function Paddle(options) {
  this.x = options.x || 370; //halfway point on canvas
  this.y = options.y || 560;
  this.height = options.height || 20;
  this.width = options.width || 180;
  this.context = options.context;
  this.canvas = options.canvas;

};

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);
var moveLeft = false
var moveRight = false


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


Paddle.prototype.movePaddle = function(){
  if(moveRight && this.x < this.canvas.width-this.width) {
    this.x += 6;
  } else if (moveLeft && this.x > 0) {
    this.x -= 6;
  }
  // x += dx;
  // y += dy;
}



module.exports = Paddle;
