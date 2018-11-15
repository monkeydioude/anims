var Updater = require('../updater'),
    Objects = require('./objects');

var Isometric = function(renderer, displayUpdater, dataUpdater, camera, config) {
    this.renderer = renderer;
    this.displayUpdater = displayUpdater;
    this.dataUpdater = dataUpdater;
    this.map = [];
    this.camera = camera;
    this.config = config;
    this.objectUpdater = new Updater("iso");
    this.objects = new Objects();
}

Isometric.prototype.start = function() {
    this.displayUpdater.add("PLAY", this.renderMap.bind(this), "isometricEngineMapDisplay");
    this.dataUpdater.add("PLAY", this.updateObjectPositions.bind(this), "isometricUpdateObjectPosition");
    this.displayUpdater.add("PLAY", this.renderObjects.bind(this), "isometricRenderObjects");
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

Isometric.prototype.renderObjects = function() {
    var obj = null;
    for (var x in this.objects.objects) {
        for (var y in this.objects.objects[x]) {
            for (var z in this.objects.objects[x][y]) {
                x = parseInt(x);
                y = parseInt(y);
                z = parseInt(z);
                obj = this.objects.get(x, y, z);
                if (!obj) {
                    continue;
                }
                this.drawImage(obj, x, y);
            }
        }
    }
    return 1;
}

Isometric.prototype.updateObjectPositions = function(T) {
    this.objects = new Objects();
    this.objectUpdater.update("PLAY", T, this.objects);
    return 1;
}

Isometric.prototype.drawImage = function(img, x, y) {
    if (img === undefined || img === null) {
        return 1;
    }
    var coords = this.camera.getCoordinates().fromTileCoordinates(x, y);
    this.renderer.drawImage(img, coords.x, coords.y, this.config.tileW, this.config.tileH);
}
 
module.exports = Isometric;