var Engine = function(canvas) {
    this.canvas = canvas;
    this.c = this.canvas.getContext('2d');
}

Engine.prototype.draw = function(x, y, w, h, color) {
   this.c.fillStyle = color.RGBA();
//    console.log(x, y, w, h)
    this.c.fillRect(x, y, w, h);
}

Engine.prototype.clearCanvas = function() {
    this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
}
