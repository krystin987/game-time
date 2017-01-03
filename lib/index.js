var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var blocks = [];

function Block(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Block.prototype.draw = function () {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Block.prototype.move = function () {
  this.y++;
  return this;
};

Block.prototype.stop = function () {
  if (this.y >= 571){
    this.y--;
  } else {
  return this;
}
};

blocks.push(new Block(50, 50, 30, 30));
blocks.push(new Block(10, 50, 30, 30));

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  blocks.forEach(function (block) {
    block.draw().move().stop();
});
  requestAnimationFrame(gameLoop);
});

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
// }
