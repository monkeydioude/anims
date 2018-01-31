var Engine = function(canvas) {
    this.canvas = canvas;
    this.c = this.canvas.getContext('2d');
}

/**
 * Draw a rectangle
 * @param {*} x 
 * @param {*} y 
 * @param {*} w 
 * @param {*} h 
 * @param {*} color 
 */
Engine.prototype.draw = function(x, y, w, h, color) {
   this.c.fillStyle = color.RGBA();
   this.c.fillRect(x, y, w, h);
}

Engine.prototype.clearCanvas = function() {
    this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

/**
 * Draw ImageData element onto engine's canvas
 * @param {*} imgData 
 * @param {*} x 
 * @param {*} y 
 * @param {*} w 
 * @param {*} h 
 * @param {*} dx 
 * @param {*} dy 
 */
Engine.prototype.drawImageData = function(imgData, x, y, w, h, dx, dy) {
    if (!x) x = 0;
    if (!y) y = 0;
    if (!dx) dx = 0;
    if (!dy) dy = 0;

    this.c.putImageData(imgData, x, y, dx, dy, w, h);
}

/**
 * Width of the engine's canvas
 * @return int
 */
Engine.prototype.boardW = function() {
    return this.canvas.offsetWidth;
}

/**
 * Height of the engine's canvas
 * @return int
 */
Engine.prototype.boardH = function() {
    return this.canvas.offsetHeight;
}

/**
 * Return the ImageData version of the whole engine's canvas
 * @return ImageData
 */
Engine.prototype.captureImageData = function() {
    return this.c.getImageData(0, 0, this.boardW(), this.boardH());
}