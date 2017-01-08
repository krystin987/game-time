var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var Paddle = require('./paddle');
var Ball = require('./ball');
var Collision = require('./collision');
var Blockwall = require('./blockwall');


var paddle = new Paddle({canvas: canvas, context: context});
var ball = new Ball({canvas: canvas, context: context});
var collision = new Collision({canvas: canvas, context: context, ball: ball, paddle: paddle, blockwall: blockwall});
var blockwall = new Blockwall({canvas: canvas, context: context});

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  paddle.drawPaddle();
  paddle.movePaddleRight();
  paddle.movePaddleLeft();
  ball.drawBall();
  ball.moveBall();
  blockwall.drawBlock();
  collision.wallPaddleCollision();
  requestAnimationFrame(animate);
};

animate();
