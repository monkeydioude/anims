var config = require('../config');

var Coordinates = function(cX, cY) {
    this.start = {};
    if (cX === undefined || cY === undefined) {
        cX = 0;
        cY = 0;
    }
    this.cX = cX;
    this.cY = cY;
}

Coordinates.prototype.computeStart = function() {
    this.start = {
        y: (config.canvasH / 2) - (this.cY * (config.tileTopH / 2)),
        x: (config.canvasW / 2) - (this.cX * (config.tileTopW / 2))
    }
    return this;
}

Coordinates.prototype.getStart = function () {
    return this.start;
}

Coordinates.prototype.fromTileCoordinates = function(x, y) {
    var decalX = config.tileTopW / 2,
        decalY = config.tileTopH / 2;   

    return {
        x: this.start.x + (x * config.tileTopW) - (x * decalX) - (decalX * y),
        y: this.start.y + (y * decalY) + (x * decalY)
    }
}

module.exports = Coordinates;