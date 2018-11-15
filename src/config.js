var config = {
    canvasW: 800,
    canvasH: 600,
    tileW: 64,
    tileH: 64,
    tileTopW: 64,
    tileTopH: 32,
}

config['isoDecalX'] = config.tileTopW / 2;
config['isoDecalY'] = config.tileTopH / 2;
config['canvasMX'] = (config.canvasW / 2);
config['canvasMY'] = config.canvasH / 2;


module.exports = config;