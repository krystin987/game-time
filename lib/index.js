// var canvas = document.getElementById('game');
// var context = canvas.getContext('2d');
//
// var x = 50;
// var y = 50;
// var width = 10;
// var height = 10;
//
// requestAnimationFrame(function gameLoop() {
//   context.fillRect(x++, y, width, height);
//   requestAnimationFrame(gameLoop);
// });
var drawGrid = function(w, h, id) {
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext('2d');
    ctx.canvas.width  = w;
    ctx.canvas.height = h;


    for (x=0;x<=w;x+=30) {
        for (y=0;y<=h;y+=30) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
            ctx.stroke();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
        }
    }

    };


    drawGrid(300, 600, "grid");
