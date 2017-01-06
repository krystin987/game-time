/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Game = __webpack_require__(1);

	var canvas = document.getElementById('game');
	var context = canvas.getContext('2d');

	var game = new Game(canvas, context);

	function animate() {
	  context.clearRect(0, 0, canvas.width, canvas.height);
	  game.draw();
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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Paddle = __webpack_require__(2);
	var Ball = __webpack_require__(3);

	function Game(canvas, context) {
	  this.canvas = canvas;
	  this.context = context;
	  this.paddle = new Paddle(context, canvas);
	  this.ball = new Ball(context, canvas, this.paddle);
	};

	var paddle = new Paddle({
	  x: this.x,
	  y: this.y,
	  height: this.height,
	  width: this.width,
	  context: this.context,
	  canvas: this.canvas
	});

	var ball = new Ball({
	  x: this.x,
	  y: this.y,
	  radius: this.radius,
	  dx: this.dx,
	  dy: this.dy,
	  context: this.context,
	  canvas: this.canvas
	});

	Game.prototype.draw = function (paddle) {
	  this.context.fillStyle = "black";
	  this.context.fillRect(this.x, this.y, this.width, this.height);
	};

	module.exports = Game;

/***/ },
/* 2 */
/***/ function(module, exports) {

	function Paddle(options) {
	  this.x = options.x || 370; //halfway point on canvas
	  this.y = options.y || 560;
	  this.height = options.height || 20;
	  this.width = options.width || 180;
	  this.context = options.context;
	  this.canvas = options.canvas;
	};

	document.addEventListener("keydown", keyDown, false);
	document.addEventListener("keyup", keyUp, false);
	var moveLeft = false;
	var moveRight = false;

	function keyDown(e) {
	  if (e.keyCode == 39) {
	    moveRight = true;
	  } else if (e.keyCode == 37) {
	    moveLeft = true;
	  }
	}

	function keyUp(e) {
	  if (e.keyCode == 39) {
	    moveRight = false;
	  } else if (e.keyCode == 37) {
	    moveLeft = false;
	  }
	}

	Paddle.prototype.movePaddle = function () {
	  if (moveRight && this.x < this.canvas.width - this.width) {
	    this.x += 6;
	  } else if (moveLeft && this.x > 0) {
	    this.x -= 6;
	  }
	  // x += dx;
	  // y += dy;
	};

	module.exports = Paddle;

/***/ },
/* 3 */
/***/ function(module, exports) {

	function Ball(canvas, context) {
	  this.canvas = canvas;
	  this.context = context;
	  this.x = canvas.width / 2;
	  this.y = canvas.height - 20;
	  this.radius = 8;
	  this.dx = 2;
	  this.dy = -2;
	}

	Ball.prototype.drawBall = function () {
	  context.beginPath();
	  context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
	  context.fillStyle = "black";
	  context.fill();
	  context.closePath();
	};

	module.exports = Ball;

/***/ }
/******/ ]);