// require('./ball-test.js');
require('./paddle');
// require('./blockwall-test.js');
// require('./scoreboard-test.js');
// require('./gametime-test.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');



//
// var x = canvas.width/2;
// // MAKE X RANDOM FOR FUTURE!
// var y = canvas.height-20;
// var dx = 2;
// var dy = -2;
// var radius = 8;
// var paddleHeight = 12;
// var paddleWidth = 75;
// var paddleX = (canvas.width-paddleWidth)/2;
// var moveLeft = false
// var moveRight = false
//
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
