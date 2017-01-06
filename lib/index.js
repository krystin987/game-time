var Paddle = require('./paddle');
var Ball = require('./ball');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var paddle = new Paddle({
  x: this.x,
  y: this.y,
  height: this.height,
  width: this.width,
  context: context,
  canvas: canvas
});

var ball = new Ball({
  x: this.x,
  y: this.y,
  radius: this.radius,
  dx: this.dx,
  dy: this.dy,
  context: context,
  canvas: canvas
});

Paddle.prototype.draw = function() {
  this.context.fillStyle = "black";
  this.context.fillRect(this.x, this.y, this.width, this.height);
};

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  paddle.draw();
  paddle.movePaddle();
  requestAnimationFrame(animate);
};

animate();

module.exports = Paddle;

// This is old code - delete?
// var x = canvas.width/2;
//  MAKE X RANDOM FOR FUTURE!
// var y = canvas.height-20;
// var dx = 2;
// var dy = -2;
// var radius = 8;



// function drawBall() {
//       context.beginPath();
//       context.arc(x, y, radius, 0, Math.PI*2);
//       context.fillStyle = "black";
//       context.fill();
//       context.closePath();
// }
//
//

// function draw() {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   drawBall();
//   drawPaddle();
//
//   if(x + dx > canvas.width-radius || x + dx < radius) {
//     dx =-dx;
//   }
//
//   if(y + dy < radius) {
//     dy =-dy;
//   } else if (y + dy > canvas.height-radius)
//   {
//
//   if(x > paddleX && x < paddleX + paddleWidth) {
//     dy =-dy;
//     } else {
//       alert("GAME OVER");
//       console.log('you loose');
//       document.location.reload();
//     }
//   }
//
//   if(moveRight && paddleX < canvas.width-paddleWidth) {
//     paddleX += 6;
//     } else if (moveLeft && paddleX > 0) {
//       paddleX -= 6;
//     }
//       x += dx;
//       y += dy;
// }
//
// setInterval(draw, 12);
