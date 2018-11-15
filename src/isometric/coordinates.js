var config = require('../config');

var Coordinates = function(cX, cY) {
    this.start = {
        x: config.canvasMX,
        y: config.canvasMY
    };
    if (cX === undefined || cY === undefined) {
        cX = 0;
        cY = 0;
    }
    this.cX = cX;
    this.cY = cY;
}

Coordinates.prototype.computeStart = function() {
    this.start = {
        x: config.canvasMX - config.isoDecalX + ((this.cY - this.cX) * config.isoDecalX),
        y: config.canvasMY - ((this.cX + this.cY) * config.isoDecalY)
    }
    return this;
}

Coordinates.prototype.getStart = function () {
    return this.start;
}

Coordinates.prototype.fromTileCoordinates = function(x, y) {
    return {
        x: this.start.x + (x * config.tileTopW) - ((x + y) * config.isoDecalX),
        y: this.start.y + ((x + y) * config.isoDecalY)
    }
}

module.exports = Coordinates;