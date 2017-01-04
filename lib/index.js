var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var radius = 8;


function drawBall() {
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI*2);
      context.fillStyle = "black";
      context.fill();
      context.closePath();
  }

function bounceBall() {
       context.clearRect(0, 0, canvas.width, canvas.height);
       drawBall();
       if(x + dx > canvas.width-radius || x + dx < radius) {
           dx = -dx;
       }
       if(y + dy > canvas.height-radius || y + dy < radius) {
           dy = -dy;
       }
       x += dx;
       y += dy;
   }

  setInterval(bounceBall, 12);


//
// var paddleX = 200;
// var paddleY = 480;
// var paddleWidth = 100;
// var paddleHeight = 15;
//
// function drawPaddle() {
//   context.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);
// }
//
//
// drawPaddle();
//
// document.addEventListener('keydown', function(e) {
//    context.clearRect(0, 0, paddleWidth, paddleHeight);
//    console.log(e.keyCode)
//    if(e.keyCode==37) {
//      paddleX-=20;
//    }  else if (e.keyCode==39) {
//      paddleX+=20;
//    }
// });



// keycodes= {
// 		'left': 37,
//     'right': 39,
// 	};
