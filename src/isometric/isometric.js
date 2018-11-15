var Isometric = function(renderer, loop, camera, config) {
    this.renderer = renderer;
    this.loop = loop;
    this.map = [];
    this.camera = camera;
    this.config = config;
}

Isometric.prototype.start = function(x, y) {
    this.loop.displayUpdater.add("PLAY", this.renderMap.bind(this), "isometricEngineMapDisplay");
}

Isometric.prototype.setMap = function(map) {
    this.map = map;
}

Isometric.prototype.renderMap = function() {
    for (y = 0; y < this.map.map.length; y++) {
        for (x = 0; x < this.map.map[y].length; x++) {
            if (!this.map.map[y][x]) {
                continue;
            }
            this.drawImage(this.map.map[y][x], x, y);
        }
    }
    return 1;
}

Isometric.prototype.drawImage = function(img, x, y) {
    var coords = this.camera.getCoordinates().fromTileCoordinates(x, y);
    this.renderer.drawImage(img, coords.x, coords.y, this.config.tileW, this.config.tileH);
}

module.exports = Isometric;