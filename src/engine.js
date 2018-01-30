var Engine = function(canvas) {
    this.canvas = canvas;
    this.c = this.canvas.getContext('2d');
}

Engine.prototype.draw = function(x, y, w, h, color) {
   this.c.fillStyle = color.RGBA();
   this.c.fillRect(x, y, w, h);
}

Engine.prototype.clearCanvas = function() {
    this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Engine.prototype.drawImageData = function(imgData, w, h, x, y, dx, dy) {
    if (!x) x = 0;
    if (!y) y = 0;
    if (!dx) dx = 0;
    if (!dy) dy = 0;

    this.c.drawImage(this.c.createImageData(60, 60), 60, 60);
}

Engine.prototype.boardW = function() {
    return this.canvas.offsetWidth;
}

Engine.prototype.boardH = function() {
    return this.canvas.offsetHeight;
}