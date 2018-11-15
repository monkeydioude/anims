var Camera = function(coord) {
    this.coord = coord;
    this.coord.computeStart();
}

Camera.prototype.setX = function(x) {
    this.coord.cX = x;
    this.coord.computeStart();
}

Camera.prototype.setY = function(y) {
    this.coord.cY = y;
    this.coord.computeStart();
}

Camera.prototype.addX = function(x) {
    this.setX(this.coord.cX + x)
}

Camera.prototype.addY = function(y) {
    this.setY(this.coord.cY + y)
}

Camera.prototype.getCoordinates = function () {
    return this.coord;
}

module.exports = Camera;