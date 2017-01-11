var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
// if (!canvas) {console.log('canvas not found');};
// if (!context) {console.log('context not found');};
// the above are tests for when we get the 'undefined does not have
// property [insert]'


var Game = require('./breakout-game');

var game = new Game({canvas: canvas, context: context});

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);

function keyDown(e) {
  if(e.keyCode == 39) {
    game.paddle.moveRight = true;
  }
  else if(e.keyCode == 37) {
    game.paddle.moveLeft = true;
  }
  else if (e.keyCode == 32) {
    run();
  }
  // else if (e.keyCode == 13) {
  //   game.gameState === 2;
  //   game.levelUp();
  // }

};

function keyUp(e) {
  if(e.keyCode == 39) {
    game.paddle.moveRight = false;
  }
  else if(e.keyCode == 37) {
    game.paddle.moveLeft = false;
  }
};


function run() {
  game.timing();

  requestAnimationFrame(run);
};

game.load();
