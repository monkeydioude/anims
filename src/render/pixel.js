var Pixel = function(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
}

Pixel.prototype.render = function(engine) {
    engine.draw(this.x, this.y, 1, 1, this.color);
}
