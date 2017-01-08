
// var Paddle = require('./paddle');
// var Ball = require('./ball');
// var Collision = require('./collision');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
// if (!canvas) {console.log('canvas not found');};
// if (!context) {console.log('context not found');};
// the above are tests for when we get the 'undefined does not have
// property [insert]'


var Game = require('./breakout-game');

var game = new Game({canvas: canvas, context: context});

document.addEventListener('keydown', function(e) {
  if(e.keyCode == 39) { // ->
    game.paddle.move(+1);
    console.log(e.keyCode);
  }
  else if(e.keyCode == 37) {
    game.paddle.move(-1);
  } else {
    console.log('key not supported');
  }

});


// document.addEventListener("keyup", function(e) {
//   if(e.keyCode == 39) { // ->
//     game.paddle.move(+1);
//     console.log(e.keyCode);
//   }
//   else if(e.keyCode == 37) {
//     game.paddle.move(-1);
//   } else {
//     console.log('key not supported');
//   }
// });



function animate() {
  game.timing();
  requestAnimationFrame(animate);
};

animate();

// var paddle = new Paddle({canvas: canvas, context: context});
// var ball = new Ball({canvas: canvas, context: context});
// var collision = new Collision({canvas: canvas, context: context});

// context.clearRect(0, 0, canvas.width, canvas.height);
// paddle.drawPaddle();
// paddle.movePaddleRight();
// paddle.movePaddleLeft();
// ball.drawBall();
// ball.moveBall();
// collision.ballCollision();

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
<<<<<<< HEAD
=======



// var canvas = document.getElementById('game');
// var context = canvas.getContext('2d');

// var Paddle = require('./paddle');
// var Ball = require('./ball');
// var Blockwall = require('./blockwall');
// var Collision = require('./collision');


// var paddle = new Paddle({canvas: canvas, context: context});
// var ball = new Ball({canvas: canvas, context: context});
// var blockwall = new Blockwall({canvas: canvas, context: context});
// var collision = new Collision({canvas: canvas, context: context, ball: ball, paddle: paddle, blockwall: blockwall});

// function animate() {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   paddle.drawPaddle();
//   paddle.movePaddleRight();
//   paddle.movePaddleLeft();
//   ball.drawBall();
//   ball.moveBall();
//   blockwall.createBlock();
//   blockwall.drawBlocks();
//   // collision.collisionBlock();
//   // collision.collisionBlocks();

//   // collision.blockwallCollision();
//   collision.wallPaddleCollision();
