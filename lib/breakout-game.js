var Paddle = require('./paddle');
var Ball = require('./ball');

function Game(canvas, context){
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


Game.prototype.draw = function(paddle) {
  this.context.fillStyle = "black";
  this.context.fillRect(this.x, this.y, this.width, this.height);
};




module.exports = Game;
