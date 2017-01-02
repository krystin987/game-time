c = document.getElementById('game');
ctx = c.getContext("2d");

document.addEventListener("DOMContentLoaded", function(event) {
  initialize();
});

function initialize() {
  drawBlock(0,0);
  drawBlock(280,0);
  drawBlock(0,580);
  drawBlock(280,580);
};

function drawBlock(x, y) {
    //Set the fill color for drawing commands
    ctx.fillStyle="#FF0000";

    //Create a filled rectangle
    ctx.fillRect(x,y,20,20);
}
