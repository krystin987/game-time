function Blockwall(options) {
   this.canvas = options.canvas;
   this.context = options.context;
   this.x =  options.x || 10;
   this.y =  options.y || 30;
   this.width =  options.width || 100;
   this.height =  options.height || 20;
   this.padding = options.padding || 10;
   this.blockRowCount = options.blockRowCount;
   this.blockColumnCount = options.blockColumnCount;
   this.blockOffsetTop = options.blockOffsetTop || 30;
   this.blockOffsetLeft = options.blockOffsetLeft || 30;
   this.blocks = [];
   // might need a counter??? Maybe???
 };

 Blockwall.prototype.drawBlock = function () {
  this.context.fillStyle = "black";
  this.context.fillRect(this.x, this.y, this.width, this.height);
 };






module.exports = Blockwall;
