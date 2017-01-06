var Paddle = require('./paddle');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

// These will be added later
// require('./ball-test.js');
var Paddle = require('../lib/paddle')
// require('./blockwall-test.js');
// require('./scoreboard-test.js');
// require('./breakout-game.js');

var paddle = new Paddle({
  x: this.x,
  y: this.y,
  height: this.height,
  width: this.width,
  context: this.context,
  canvas: this.canvas
});

var paddle = new Paddle(202.5, 308, 75, 12, canvas, context)

function drawPaddle() {
  context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
  context.fillStyle = "black";
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawPaddle();
}

setInterval(draw, 12);


//BALL
function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  paddle.draw();
  paddle.scoot();
  requestAnimationFrame(animate);
};

animate();

// This is old code - delete?
// var x = canvas.width/2;
//  MAKE X RANDOM FOR FUTURE!
// var y = canvas.height-20;
// var dx = 2;
// var dy = -2;
// var radius = 8;

// PADDLE
// var paddleHeight = 12;
// var paddleWidth = 75;
// var paddleX = (canvas.width-paddleWidth)/2; === ((480-75)/2 = 202.5)
// var paddleY = canvas.height-paddleH === (320-12 = 308)

// KEY UPS/DOWNS
// var moveLeft = false
// var moveRight = false


//KEY DEFAULT FALSE
// document.addEventListener("keydown", keyDown, false);
// document.addEventListener("keyup", keyUp, false);
//
// function drawBall() {
//       context.beginPath();
//       context.arc(x, y, radius, 0, Math.PI*2);
//       context.fillStyle = "black";
//       context.fill();
//       context.closePath();
// }
//
//
// function drawPaddle() {
//   context.fillRect(paddleX, (canvas.height - paddleHeight), paddleWidth, paddleHeight);
//   context.fillStyle = "black";
// }
//
//
// function keyDown(e) {
//   if(e.keyCode == 39) {
//     moveRight = true;
//   }
//   else if(e.keyCode == 37) {
//     moveLeft = true;
//   }
// }
//
// function keyUp(e) {
//   if(e.keyCode == 39) {
//     moveRight = false;
//   }
//   else if(e.keyCode == 37) {
//     moveLeft = false;
//   }
// }
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
