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

	var canvas = document.getElementById('game');
	var context = canvas.getContext('2d');
	var Game = __webpack_require__(1);
	var game = new Game({ canvas: canvas, context: context });

	document.addEventListener("keydown", keyDown, false);
	document.addEventListener("keyup", keyUp, false);

	function keyDown(e) {
	  if (e.keyCode == 39) {
	    game.paddle.moveRight = true;
	  } else if (e.keyCode == 37) {
	    game.paddle.moveLeft = true;
	  } else if (e.keyCode == 32) {
	    run();
	  }
	}

	function keyUp(e) {
	  if (e.keyCode == 39) {
	    game.paddle.moveRight = false;
	  } else if (e.keyCode == 37) {
	    game.paddle.moveLeft = false;
	  }
	}

	function run() {
	  game.timing();

	  requestAnimationFrame(run);
	}

	game.load();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Paddle = __webpack_require__(2);
	var Ball = __webpack_require__(3);
	var Blockwall = __webpack_require__(4);

	function Game(options) {
	  this.context = options.context;
	  this.canvas = options.canvas;
	  this.paddle = new Paddle(options);
	  this.ball = new Ball(options);
	  this.blockwall = options.blockwall || new Blockwall(options);
	  this.gameState = 0;
	  this.moveRight = false;
	  this.moveLeft = false;
	  this.score = this.score || 0;
	}

	// Game States
	Game.prototype.timing = function () {
	  if (this.gameState === 0) {
	    this.gameBegin();
	    this.gameState = 1;
	  }
	  if (this.gameState === 1) {
	    this.animate();
	  }

	  if (this.gameState === 4) {
	    this.gameOver();
	  }
	  if (this.gameState === 5) {
	    this.gameWin();
	  }
	};

	Game.prototype.load = function () {
	  this.timing();
	};

	Game.prototype.clearBoard = function () {
	  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	};

	Game.prototype.animate = function () {
	  this.clearBoard();
	  this.paddle.drawPaddle();
	  this.paddle.move();
	  this.blockwall.drawBlocks();
	  this.ball.drawBall();
	  this.ball.moveBall();
	  this.wallPaddleCollision();
	  this.collisionBlockwall();
	};

	Game.prototype.gameBegin = function () {
	  this.blockwall.createBlock();
	};

	Game.prototype.gameOver = function () {
	  this.appendLose();

	  $(document).on('keyup', function () {
	    document.location.reload();
	  });
	};

	Game.prototype.gameWin = function () {
	  this.appendWin();

	  $(document).on('keyup', function () {
	    document.location.reload();
	  });
	};

	// COLLISION
	Game.prototype.changeBallDY = function () {
	  return this.ball.dy = -this.ball.dy;
	};

	Game.prototype.changeBallDX = function () {
	  return this.ball.dx = -this.ball.dx;
	};

	Game.prototype.collisionLeftRight = function () {
	  return this.ball.x > this.canvas.width - this.ball.radius || this.ball.x < this.ball.radius;
	};

	Game.prototype.collisionBottom = function () {
	  return this.ball.y > this.canvas.height - (this.ball.radius + this.paddle.height);
	};

	Game.prototype.collisionTop = function () {
	  return this.ball.y < this.ball.radius;
	};

	Game.prototype.collisionBallPaddle = function () {
	  return this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddle.width;
	};

	// Collision between ball and all sides and paddle
	Game.prototype.wallPaddleCollision = function () {
	  if (this.collisionLeftRight()) {
	    this.changeBallDX();
	  }
	  if (this.collisionTop()) {
	    this.changeBallDY();
	  } else if (this.ball.y + this.ball.radius * 2 + this.ball.dy > this.canvas.height - this.ball.radius) {

	    if (this.collisionBallPaddle()) {
	      this.changeBallDY();
	    } else {
	      this.gameState = 4;
	    }
	  }
	};

	// COllision with blockwall and ball
	Game.prototype.collisionBlockwall = function () {
	  for (c = 0; c < this.blockwall.blockColumnCount; c++) {
	    for (r = 0; r < this.blockwall.blockRowCount; r++) {
	      var b = this.blockwall.blocks[c][r];
	      if (b.status == 1) {
	        if (this.ball.x > b.x && this.ball.x < b.x + this.blockwall.width && this.ball.y > b.y && this.ball.y < b.y + this.blockwall.height) {
	          this.changeBallDY();
	          b.status = 0;
	          b.x = -10000000;
	          b.y = -10000000;
	          this.score++;
	          this.appendScore();
	          if (this.score == this.blockwall.blockRowCount * this.blockwall.blockColumnCount) {
	            this.gameState = 5;
	          }
	        }
	      }
	    }
	  }
	};

	// Append HTML Functions for win/lose and score  
	Game.prototype.appendScore = function () {
	  var score = this.score;
	  $('.score').text(score);
	};

	Game.prototype.appendWin = function () {
	  $('.win-lose').text("You WIN!");
	  $('.win-lose-instructions').text("Press any key to play again.");
	  $('.win-instructions').text("Press space bar twice to increase speed");
	  $('.game-instructions').hide();
	};

	Game.prototype.appendLose = function () {
	  $('.win-lose').text("You Lose!");
	  $('.win-lose-instructions').text("Press any key to play again");
	  $('.game-instructions').hide();
	};

	module.exports = Game;

/***/ },
/* 2 */
/***/ function(module, exports) {

	function Paddle(options) {
	  this.context = options.context;
	  this.canvas = options.canvas;
	  this.height = options.height || 20;
	  this.width = options.width || 180;
	  this.x = options.x || (options.canvas.width - 180) / 2;
	  this.y = options.y || options.canvas.height - 20;
	  this.moveRight = false;
	  this.moveLeft = false;
	}

	Paddle.prototype.drawPaddle = function () {
	  this.context.fillStyle = "white";
	  this.context.fillRect(this.x, this.y, this.width, this.height);
	};

	Paddle.prototype.move = function () {
	  if (this.moveRight && this.x < this.canvas.width - this.width) {
	    this.x += 6;
	  }if (this.moveLeft && this.x > 0) {
	    this.x -= 6;
	  }
	};

	module.exports = Paddle;

/***/ },
/* 3 */
/***/ function(module, exports) {

	function Ball(options) {
	  if (!options) console.log('hi');
	  this.canvas = options.canvas;
	  this.context = options.context;
	  this.x = options.x || options.canvas.width / 2;
	  this.y = options.y || options.canvas.height - 30;
	  this.dy = options.dy || -4;
	  this.dx = options.dx || 4;
	  this.radius = options.radius || 8;
	}

	Ball.prototype.drawBall = function () {
	  this.context.beginPath();
	  this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
	  this.context.fillStyle = "#32CD32";
	  this.context.fill();
	  this.context.closePath();
	};

	Ball.prototype.moveBall = function () {
	  this.x += this.dx;
	  this.y += this.dy;
	};

	module.exports = Ball;

/***/ },
/* 4 */
/***/ function(module, exports) {

	function Blockwall(options) {
	    this.canvas = options.canvas;
	    this.context = options.context;
	    this.x = options.x;
	    this.y = options.y;
	    this.width = options.width || 220;
	    this.height = options.height || 30;
	    this.padding = options.padding || 5;
	    this.blockRowCount = options.blockRowCount || 3;
	    this.blockColumnCount = options.blockColumnCount || 4;
	    this.blockOffsetTop = options.blockOffsetTop || 30;
	    this.blockOffsetLeft = options.blockOffsetLeft || 30;
	    this.blocks = [];
	};

	// Create array
	Blockwall.prototype.createBlock = function () {
	    for (c = 0; c < this.blockColumnCount; c++) {
	        this.blocks[c] = [];
	        for (r = 0; r < this.blockRowCount; r++) {
	            this.blocks[c][r] = { x: 0, y: 0, status: 1 };
	        }
	    }
	};

	//  Fill array
	Blockwall.prototype.drawBlocks = function () {
	    for (c = 0; c < this.blockColumnCount; c++) {
	        for (r = 0; r < this.blockRowCount; r++) {
	            if (this.blocks[c][r].status == 1) {
	                this.x = r * (this.width + this.padding) + this.blockOffsetLeft;
	                this.y = c * (this.height + this.padding) + this.blockOffsetTop;
	                this.blocks[c][r].x = this.x;
	                this.blocks[c][r].y = this.y;
	                this.context.beginPath();
	                this.context.rect(this.x, this.y, this.width, this.height);
	                this.context.fillStyle = "white";
	                this.context.fill();
	                this.context.closePath();
	            } else if (this.blocks[c][r].status === 0) {
	                this.x = -100000000;
	                this.y = c * (this.height + this.padding) + this.blockOffsetTop;
	                this.blocks[c][r].x = this.x;
	                this.blocks[c][r].y = this.y;
	            }
	        }
	    }
	};

	module.exports = Blockwall;

/***/ }
/******/ ]);