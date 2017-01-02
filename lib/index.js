$(document).ready(function initialize() {
  c = $("game");
  ctx = c.getContext("2d");

  drawBlock(0,0);
  drawBlock(9,0);
  drawBlock(0,19);
  drawBlock(9,19);

});

function drawBlock(x, y) {

    //Convert game coordinaes to pixel coordinates
    pixelX = x*20;
    pixelY = (19-y)*20;

    //Set the fill color for drawing commands
    ctx.fillStyle="#FF0000";

    //Create a filled rectangle
    ctx.fillRect(pixelX,pixelY,20,20);
}
