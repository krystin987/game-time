var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
// if (!canvas) {console.log('canvas not found');};
// if (!context) {console.log('context not found');};
// the above are tests for when we get the 'undefined does not have
// property [insert]'


$(document).ready(function() {

});

function stop() {
    if (requestId) {
       window.cancelAnimationFrame(requestId);
       requestId = undefined;
    }

var Game = require('./breakout-game');

var game = new Game({canvas: canvas, context: context});

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);
// document.addEventListener("keydown", keyDown, false);



function keyDown(e) {
  if(e.keyCode == 39) {
    game.paddle.moveRight = true;
    // console.log(e.keyCode);
  }
  else if(e.keyCode == 37) {
    game.paddle.moveLeft = true;
  }
  else if(e.keyCode == 13) {
    // console.log(e.keyCode);
  }
  else if(e.keyCode == 32) {
    game.timing(2);
    run(false);
  }
}

function keyUp(e) {
  if(e.keyCode == 39) {
    game.paddle.moveRight = false;
  }
  else if(e.keyCode == 37) {
    game.paddle.moveLeft = false;
  }
  else if(e.keyCode == 13) {
    // console.log(e.keyCode);
    run(true);

  }
}

function run(state) {
  if (state) {
    requestAnimationFrame(run);
  } else {
    alert('paused');
  }
  game.timing(0);
};

// run();

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
