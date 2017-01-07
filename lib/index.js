var Paddle = require('./paddle');
var Ball = require('./ball');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var paddle = new Paddle({canvas: canvas, context: context});
var ball = new Ball({canvas: canvas, context: context});



function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  paddle.drawPaddle();
  paddle.movePaddleRight();
  paddle.movePaddleLeft();
  ball.drawBall();
  ball.moveBall();
  ball.bounceBall();
  requestAnimationFrame(animate);
};

animate();

module.exports = Paddle;
module.exports = Ball;



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
