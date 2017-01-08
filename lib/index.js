var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var Paddle = require('./paddle');
var Ball = require('./ball');
var Blockwall = require('./blockwall');
var Collision = require('./collision');


var paddle = new Paddle({canvas: canvas, context: context});
var ball = new Ball({canvas: canvas, context: context});
var blockwall = new Blockwall({canvas: canvas, context: context});
var collision = new Collision({canvas: canvas, context: context, ball: ball, paddle: paddle, blockwall: blockwall});

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  paddle.drawPaddle();
  paddle.movePaddleRight();
  paddle.movePaddleLeft();
  ball.drawBall();
  ball.moveBall();
  blockwall.createBlock();
  blockwall.drawBlocks();
  // collision.collisionBlock();
  // collision.collisionBlocks();

  // collision.blockwallCollision();
  collision.wallPaddleCollision();
  requestAnimationFrame(animate);
};

animate();
