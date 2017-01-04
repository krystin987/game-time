var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


var paddleX = 200;
var paddleY = 480;
var paddleWidth = 100;
var paddleHeight = 15;

function drawPaddle() {
  context.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);
}


drawPaddle();

window.addEventListener('keydown', function(e) {
    context.clearRect(0, 0, paddleWidth, paddleHeight);
    console.log(e.keyCode)
    if(e.keyCode==37) {
      paddleX -= 10;
      console.log('hey');
    }  else if (e.keyCode==39) {
      paddleX += 10;
      console.log('hi');
    }
});

// keycodes= {
// 		'left': 37,
//     'right': 39,
// 		'down': 40
// 	};





//
// document.addEventListener("DOMContentLoaded", function(event) {
//   initialize();
// });
//
// function initialize() {
//   drawBlock(0,0);
//   drawBlock(280,0);
//   drawBlock(0,580);
//   drawBlock(280,580);
// };
//
// function drawBlock(x, y) {
//     //Set the fill color for drawing commands
//     ctx.fillStyle="#FF0000";
//
//     //Create a filled rectangle
//     ctx.fillRect(x,y,20,20);
// };
