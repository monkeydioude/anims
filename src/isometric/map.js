var Map = function(matrix) {
    this.matrix = matrix;
    this.assets = [];
    this.map = [];
    this.assetLoadingIt = 0;
    this.baseSrc = '../assets/map/tiles/';
}

Map.prototype.loadAsset = function(path) {
    this.assets[path] = new Image();
    
    this.assetLoadingIt++;
    this.assets[path].onload = function() {
        this.assetLoadingIt--;
    }.bind(this);

    this.assets[path].src = this.baseSrc + path + '.png';
    this.assets[path].crossOrigin = "Anonymous";

}

Map.prototype.loadMap = function() {
    var imgPath = '';

    for (x = 0; x < this.matrix.length; x++) {
        this.map[x] = [];
        for (y = 0; y < this.matrix[x].length; y++) {
            imgPath = this.matrix[x][y];
            if (imgPath == null) {
                this.map[x][y] = null;
                continue;
            }
            if (!this.assets[imgPath]) {
                this.loadAsset(imgPath);
            }
            this.map[x][y] = this.assets[imgPath];
        }
    }
}

Map.prototype.isLoaded = function() {
    return this.assetLoadingIt == 0;
}

module.exports = Map;