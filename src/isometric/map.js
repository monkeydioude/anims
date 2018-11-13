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
        for (j = 0; j < this.matrix[x].length; j++) {
            imgPath = this.matrix[x][j];
            if (imgPath == null) {
                this.map[x][j] = null;
                continue;
            }
            if (!this.assets[imgPath]) {
                this.loadAsset(imgPath);
            }
            this.map[x][j] = this.assets[imgPath];
        }
    }
}

Map.prototype.isLoaded = function() {
    return this.assetLoadingIt == 0;
}

module.exports = Map;