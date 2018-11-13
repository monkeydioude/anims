var Engine = function(drawer, loopEngine) {
    this.drawer = drawer;
    this.loopEngine = loopEngine;
    this.map = [];
}

Engine.prototype.start = function() {
    this.loopEngine.displayUpdater.add("PLAY", this.displayMap.bind(this), "isometricEngineMapDisplay");
}

Engine.prototype.setMap = function(map) {
    this.map = map;
}

Engine.prototype.displayMap = function() {
    var tW = 64,
        tH = 64,
        startX = this.drawer.width() / 2,
        cX = 0,
        cY = 0;

    if (!this.map.isLoaded()) {
        this.drawer.scene.c.fillText("Loading...", 360, 295);
        return 0;
    }
    
    for (j = 0; j < this.map.map.length; j++) {
        for (x = 0; x < this.map.map[j].length; x++) {
            if (!this.map.map[j][x]) {
                continue;
            }
            cX = startX + (x * tW) - (x * 32);
            cY = (j * 16) + (x * 16);
            this.drawer.drawImage(this.map.map[j][x], cX, cY, tW, tH);
        }
        startX -= 32;
    }
    return 1;
}

module.exports = Engine;