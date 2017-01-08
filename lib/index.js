var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var Paddle = require('./paddle');
var Ball = require('./ball');
var Collision = require('./collision');


var paddle = new Paddle({canvas: canvas, context: context});
var ball = new Ball({canvas: canvas, context: context});
var collision = new Collision({canvas: canvas, context: context, ball: ball, paddle: paddle});




// var gamePaddle = new Paddle({x: canvas.width/2 - 50, y: canvas.height-15, width: 100, height: 10, color: "turquoise" , context: context, canvas: canvas});
// var gameBall = new Ball({y: canvas.height-25, radius: 10, color: "green", context: context, gamePaddle: gamePaddle});
// var bricks = new Bricks({padding: 1, rows: 5, columns: 5, context: context, canvas: canvas});
// var gameCollisions = new Collisions({canvas :canvas, gameBall: gameBall, gamePaddle: gamePaddle, bricks: bricks});
//



function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  paddle.drawPaddle();
  paddle.movePaddleRight();
  paddle.movePaddleLeft();
  ball.drawBall();
  ball.moveBall();
  collision.allCollision();
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
//       console.log('you lose');
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
