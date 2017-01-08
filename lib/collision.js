function Collision(options) {
  this.context = options.context;
  this.canvas = options.canvas;
  this.paddle = options.paddle;
  this.ball = options.ball;
};


Collision.prototype.changeBallDY = function () {
  return this.ball.dy =- this.ball.dy;
};

Collision.prototype.changeBallDX = function () {
  return this.ball.dx =- this.ball.dx;
};

Collision.prototype.collisionLeftRight = function(){
  return this.ball.x > this.canvas.width - this.ball.radius || this.ball.x < this.ball.radius;
};

Collision.prototype.collisionBottom = function() {
  return this.ball.y > this.canvas.height - (this.ball.radius + this.paddle.height);
};

Collision.prototype.collisionTop = function(){
  return this.ball.y < this.ball.radius;
};

Collision.prototype.collisionBallPaddle = function() {
  return this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddle.width;
};


Collision.prototype.allCollision = function() {
  if(this.collisionLeftRight()) {
    this.changeBallDX();
    console.log('side');
  }

  if(this.collisionTop()) {
    this.changeBallDY();
    console.log('top');
  }
  else if (this.ball.y + this.ball.dy > this.canvas.height-this.ball.radius)
  {

  if(this.collisionBallPaddle()) {
    this.changeBallDY();
    console.log('paddle');
    } else {
      alert("GAME OVER");
      console.log('you lose');
      document.location.reload();
    }
  }
}


module.exports = Collision;
