var Camera = function(coord) {
    this.coord = coord;
    this.coord.computeStart();
}

Camera.prototype.setX = function(x) {
    this.set(x, this.coord.cY);
}

Camera.prototype.setY = function(y) {
    this.set(this.coord.cX, y);
}
Camera.prototype.set = function(x, y) {
    this.coord.cX = x;
    this.coord.cY = y;
    this.coord.computeStart();
}

Camera.prototype.addX = function(x) {
    this.add(this.coord.cX + x, 0)
}

Camera.prototype.addY = function(y) {
    this.add(0, this.coord.cY + y)
}

Camera.prototype.add = function(x, y) {
    this.coord.cX += x;
    this.coord.cY += y;
    this.coord.computeStart();
}
Camera.prototype.getCoordinates = function () {
    return this.coord;
}

module.exports = Camera;