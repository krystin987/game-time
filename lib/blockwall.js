function Blockwall(options) {
   this.canvas = options.canvas;
   this.context = options.context;
   this.x =  options.x;
   this.y =  options.y;
   this.width =  options.width || 220;
   this.height =  options.height || 30;
   this.padding = options.padding || 5;
   this.blockRowCount = options.blockRowCount || 3;
   this.blockColumnCount = options.blockColumnCount || 4;
   this.blockOffsetTop = options.blockOffsetTop || 30;
   this.blockOffsetLeft = options.blockOffsetLeft || 30;
   this.blocks = [];
 };

Blockwall.prototype.drawBlock = function () {
  this.context.fillStyle = "black";
  this.context.fillRect(this.x, this.y, this.width, this.height);
};

Blockwall.prototype.createBlock = function () {
  for(c=0; c<this.blockColumnCount; c++) {
    this.blocks[c] = [];
    for(r=0; r<this.blockRowCount; r++) {
      this.blocks[c][r] = { x: 0, y: 0, status: 1};
    }
  }
};


Blockwall.prototype.drawBlocks = function() {
    for(c=0; c<this.blockColumnCount; c++) {
        for(r=0; r<this.blockRowCount; r++) {
            if(this.blocks[c][r].status == 1) {
                this.x = (r*(this.width+this.padding))+this.blockOffsetLeft;
                this.y = (c*(this.height+this.padding))+this.blockOffsetTop;
                this.blocks[c][r].x = this.x;
                this.blocks[c][r].y = this.y;
                this.context.beginPath();
                this.context.rect(this.x, this.y, this.width, this.height);
                this.context.fillStyle = "black";
                this.context.fill();
                this.context.closePath();
            } else if (this.blocks[c][r].status == 0){
              this.x = -100000000;
              this.y = (c*(this.height+this.padding))+this.blockOffsetTop;
              this.blocks[c][r].x = this.x;
              this.blocks[c][r].y = this.y;

            }
        }
    }
};



module.exports = Blockwall;
