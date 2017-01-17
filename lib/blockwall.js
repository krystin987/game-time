function Blockwall(options) {
   this.canvas = options.canvas;
   this.context = options.context;
   this.x =  options.x;
   this.y =  options.y;
   this.width =  options.width || 90;
   this.height =  options.height || 180;
   this.padding = options.padding || 2;
   this.blockRowCount = options.blockRowCount || 8;
   this.blockColumnCount = options.blockColumnCount || 2;
   this.blockOffsetTop = options.blockOffsetTop || 4;
   this.blockOffsetLeft = options.blockOffsetLeft || 4;
   this.blocks = [];
 };


// Create array
Blockwall.prototype.createBlock = function () {
  for(c=0; c<this.blockColumnCount; c++) {
    this.blocks[c] = [];
    for(r=0; r<this.blockRowCount; r++) {
      this.blocks[c][r] = { x: 0, y: 0, status: 1};
    }
  }
};

//  Fill array
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
                var img = document.createElement("IMG");
                img.setAttribute("src", "media/eom-vertical.png");
                this.context.drawImage(img,this.x,this.y);
                //this.context.fillStyle = "white";
                //this.context.fill();
                this.context.closePath();
            } else if (this.blocks[c][r].status === 0){
              this.x = -100000000;
              this.y = (c*(this.height+this.padding))+this.blockOffsetTop;
              this.blocks[c][r].x = this.x;
              this.blocks[c][r].y = this.y;

            }
        }
    }
};



module.exports = Blockwall;
