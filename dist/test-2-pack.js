/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var Renderer = function(sceneCanvas, bufferCanvas) {
    this.scene = sceneCanvas;
    this.buffer = bufferCanvas;
    this.snap = null;
}

/**
 * Draw a rectangle
 * @param {*} x 
 * @param {*} y 
 * @param {*} w 
 * @param {*} h 
 * @param {*} color 
 */
Renderer.prototype.draw = function(x, y, w, h, color) {
   this.buffer.draw(x, y, w, h, color);
}

/**
 * Draw ImageData element onto engine's canvas
 * @param {*} imgData 
 * @param {*} x 
 * @param {*} y 
 * @param {*} w 
 * @param {*} h 
 * @param {*} dx 
 * @param {*} dy 
 */
Renderer.prototype.drawImageData = function(imgData, x, y, w, h, dx, dy) {
    this.buffer.drawImageData(imgData, x, y, w, h, dx, dy);
}
/**
 * Draw Image element onto engine's canvas
 * @param {*} Image 
 * @param {*} x 
 * @param {*} y 
 * @param {*} w 
 * @param {*} h 
 */
Renderer.prototype.drawImage = function(image, x, y, w, h) {
    this.buffer.drawImage(image, x, y, w, h);
}

Renderer.prototype.drawLine = function(fX, fY, tX, tY) {
    this.buffer.drawLine(fX, fY, tX, tY);
}

/**
 * Width of the engine's canvas
 * @return int
 */
Renderer.prototype.width = function() {
    return this.scene.width();
}

/**
 * Height of the engine's canvas
 * @return int
 */
Renderer.prototype.height = function() {
    return this.scene.height();
}

/**
 * Return the ImageData version of the whole engine's canvas
 * @return ImageData
 */
Renderer.prototype.captureScene = function() {
    return this.scene.c.getImageData(0, 0, this.scene.width(), this.scene.height());
}

Renderer.prototype.clear = function() {
    this.scene.clear();
    this.buffer.clear();
}

Renderer.prototype.render = function() {
    // this.scene.clear();
    this.scene.drawImageData(
        this.buffer.c.getImageData(
            0, 0, this.buffer.width(), this.buffer.height()
        )
    );
    this.buffer.clear();
}

Renderer.prototype.snapshot = function() {
    return this.buffer.snapshot();
}

module.exports = Renderer;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var Canvas = function(canvas) {
    this.canvas = canvas;
    this.c = this.canvas.getContext('2d');
}

/**
 * 
 */
Canvas.prototype.clear = function() {
    this.c.clearRect(0, 0, this.width(), this.height());
}

/**
 * @return int
 */
Canvas.prototype.width = function() {
    return this.canvas.width;
}

/**
 * @return int
 */
Canvas.prototype.height = function() {
    return this.canvas.height;
}

Canvas.prototype.drawLine = function(fX, fY, tX, tY) {
    this.c.moveTo(fX, fY);
    this.c.lineTo(tX, tY);
    this.c.stroke();
}

/**
 * @param int x
 * @param int y
 * @param int w
 * @param int h
 * @param Color color
 */
Canvas.prototype.draw = function(x, y, w, h, color) {
    this.c.fillStyle = color.RGBA();
    this.c.fillRect(x, y, w, h);
 }

 Canvas.prototype.drawImage = function(img, x, y, w, h) {
    if (!x) x = 0;
    if (!y) y = 0;
    if (!w) w = this.width();
    if (!h) h = this.height();

    this.c.drawImage(img, x, y, w, h);
 }
/**
 * Draw ImageData element onto canvas
 * @param {*} imgData 
 * @param {*} x 
 * @param {*} y 
 * @param {*} w 
 * @param {*} h 
 * @param {*} dx 
 * @param {*} dy 
 */
 Canvas.prototype.drawImageData = function(imgData, x, y, w, h, dx, dy) {
    if (!x) x = 0;
    if (!y) y = 0;
    if (!dx) dx = 0;
    if (!dy) dy = 0;
    if (!w) w = this.width();
    if (!h) h = this.height();

    this.c.putImageData(imgData, x, y, dx, dy, w, h);
 }

 Canvas.prototype.snapshot = function() {
     return this.c.getImageData(0, 0, this.width(), this.height());
 }

 module.exports = Canvas;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Updater = __webpack_require__(3);

var Loop = function(fps, engine, startingMode)
{
    if (!fps) {
        console.error("fps parameter needed");
        return ;
    }

    // Timestamp of previous loop iteration (not requestAnimationFrame call)
    this.pT = 0;
    this.cbSeed = null;

    this.setFrequencies(fps);
    this.engine = engine;
    this.dataUpdater = new Updater("data");
    this.displayUpdater = new Updater("graphic");
    this.mode = startingMode;

    this.startingConditions = [];
};

/**
 * @param {*} mode 
 */
Loop.prototype.setMode = function(mode) {
    console.info("Setting mode from", this.mode, "to", mode);
    this.mode = mode;
}

Loop.prototype.pause = function() {
    console.info("paused");
    clearTimeout(this.cbSeed);
    clearTimeout(this.dSeed);
}

Loop.prototype.start = function() {
    if (!this.canStart()) {
        this.engine.scene.c.fillText("Loading...", 360, 295);            
        setTimeout(this.start.bind(this), this.miF);
        return;
    }

    console.info("started");
    setTimeout(function(){this.dataLoop(0);}.bind(this), 30);
    setTimeout(function(){this.displayLoop(0);}.bind(this), 45);
}

Loop.prototype.addStartingConditions = function(conditions) {
    this.startingConditions = conditions;
}

Loop.prototype.canStart = function() {
    for (i = 0; i < this.startingConditions.length; i++) {
        if (this.startingConditions[i]() === false) {
            return false;
        }
    }
    return true;
}

/**
 *  set fps, iF & miF
 * (iF = 1 / FPS, time between too frames)
 * (miF = iF * 1000, time between frames in milliseconds)
 * @param {*} fps 
 */
Loop.prototype.setFrequencies = function(fps) {
    this.fps = fps;
    this.iF = 1 / fps;
    this.miF = 1000 * this.iF;
    console.info("setFrequencies("+fps+") = {", "\n\tfps:", fps, "\n\tiF:", this.iF, "\n\tmiF:", this.miF, "\n}");
}

/**
 * 
 * @param {*} T 
 */
Loop.prototype.dataLoop = function(T) {
    var nT = window.performance.now();

    this.dataUpdater.update(this.mode, T);
    this.cbSeed = setTimeout(function(){this.dataLoop(this.miF);}.bind(this), T - (window.performance.now() - nT));
}

/**
 * 
 * @param {*} T 
 */
Loop.prototype.displayLoop = function(T) {
    var nT = window.performance.now(),
        updStatus = 0;

    updStatus = this.displayUpdater.update(this.mode, T, this.engine);
    
    if (updStatus > 0) {
        this.engine.render();
    }
    this.dSeed = setTimeout(function(){this.displayLoop(this.miF);}.bind(this), T - (window.performance.now() - nT));
}

module.exports = Loop;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var Updater = function(name) {
    if (!name) {
        name = Date.now();
    }
    this.name = name;
    this.nodes = {};
    this.defaultNameCounter = 0;
}

/**
 * 
 * @param {int} T 
 */
Updater.prototype.update = function(mode, T, engine) {
    if (!this.nodes.hasOwnProperty(mode)) {
        return ;
    }
    var n = this.nodes[mode],
        updIt = 0,
        updSt = 0;

    for (var i in n) {
        updSt = n[i](T, engine);
        if (updSt === undefined) {
            updSt = 1;
        }
        if (updSt == -1) {
            delete n[i];
            continue;
        }
        updIt += updSt;
    }
    
    return updIt;
}

/**
 * 
 * @param {function} cb
 * @param {string} name 
 * 
 * @return {null|string}
 */
Updater.prototype.add = function(mode, cb, name) {
    if (!mode) {
        return "Mode must be provided";
    }
    
    if (!name) {
        name = this.defaultNameCounter;
        this.defaultNameCounter++;
    }

    if (!this.nodes.hasOwnProperty(mode)) {
        this.nodes[mode] = {};
    }

    if (this.nodes[mode].hasOwnProperty(name)) {
        return "Could not add element to the updater list, name already exists";
    }

    this.nodes[mode][name] = cb;

    return null;
}

Updater.prototype.remove = function(mode, name) {
    if (!this.nodes.hasOwnProperty(mode)) {
        return "Could not remove element, mode " + mode + " does not exist";
    }

    if (!this.nodes[mode].hasOwnProperty(name)) {
        return "Could not remove element, name " + name + " does not exist";
    }

    delete this.nodes[mode][name];

    return null;
}

module.exports = Updater;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var Browser = function()
{
    this.focus = [];
    this.blur = [];
    this.documentVisibility = {
        hidden: [],
        visible: []
    };

    this.handleBehavior();
}

Browser.prototype.handleBehavior = function()
{
    var self = this;

    window.onfocus = function(e) {self.focus.forEach(function(item) {item(e);});};
    window.onblur = function(e) {self.blur.forEach(function(item) {item(e);});};
    document.addEventListener('visibilitychange', function(e) {
        if (document.visibilityState == "hidden") {
            self.documentVisibility.hidden.forEach(function(item) {item(e);});
            return ;
        }

        self.documentVisibility.visible.forEach(function(item) {item(e);});
    });
}

Browser.prototype.onFocus = function(cb)
{
    this.focus.push(cb);
    return this;
}

Browser.prototype.onBlur = function(cb)
{
    this.blur.push(cb);
    return this;
}

Browser.prototype.onDocumentHidden = function(cb)
{
    this.documentVisibility.hidden.push(cb);
    return this;    
}

Browser.prototype.onDocumentVisible = function(cb)
{
    this.documentVisibility.visible.push(cb);
    return this;    
}

Browser.prototype.onReady = function(cb) {
    document.addEventListener("DOMContentLoaded", cb);
}

module.exports = Browser;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var Map = function(matrix, assets) {
    this.matrix = matrix;
    this.map = [];
    this.assets = assets;
}

Map.prototype.loadMap = function() {
    for (x = 0; x < this.matrix.length; x++) {
        this.map[x] = [];
        for (y = 0; y < this.matrix[x].length; y++) {
            this.map[x][y] = this.assets.get(this.matrix[x][y]);
        }
    }
}

module.exports = Map;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var CouldNotLoad = __webpack_require__(7);

var Assets = function() {
    this.assets = [];
    this.stillLoadingIt = 0;
}

/**
 * @param string name
 * @param string path
 * 
 * loadImage starts the asynchronous loading of a single image
 */
Assets.prototype.loadImage = function(name, path) {
    this.assets[name] = new Image();
    
    this.assetLoadingIt++;
    this.assets[name].onload = function() {
        this.assetLoadingIt--;
    }.bind(this);

    this.assets[name].src = path;
    this.assets[name].crossOrigin = "Anonymous";
}

/**
 * @param Object imgObject
 * @return CouldNotLoad|null
 * 
 * loadImages loads an Object of images using the form:
 * {"asset_name": "path_to_asset"}
 */
Assets.prototype.loadImages = function(imgObject) {
    if (imgObject.constructor !== {}.constructor){
        return new CouldNotLoad("Assets.loadImages: imgObject is not an Object");
    }

    for (var k in imgObject) {
        if (!imgObject.hasOwnProperty(k)) {
            continue;
        }
        this.loadImage(k, imgObject[k]);
    }
    
    return null;
}

/**
 * @return bool
 * 
 * hasFinishLoading returns the state of the assets loading
 */
Assets.prototype.hasFinishedLoading = function() {
    return this.stillLoadingIt === 0;
}

/**
 * @return Asset
 */
Assets.prototype.get = function(name) {
    if (this.assets[name] == undefined) {
        return null;
    }

    return this.assets[name];
}

module.exports = Assets;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var CouldNotLoad = function(msg) {
    this.msg = msg;
}

CouldNotLoad.prototype.error = function() {
    return "Could not Load: " + this.msg;
}

module.exports = CouldNotLoad;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

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

/***/ }),
/* 9 */
/***/ (function(module, exports) {

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

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var Renderer = __webpack_require__(0),
    Canvas = __webpack_require__(1),
    Loop = __webpack_require__(2),
    Map = __webpack_require__(5),
    Browser = __webpack_require__(4),
    Assets = __webpack_require__(6),
    Camera = __webpack_require__(16),
    config = __webpack_require__(9),
    Coord = __webpack_require__(17),
    Engine = __webpack_require__(8);

(new Browser()).onReady(function() {
    var camera = new Camera(new Coord(2, 6)),
        renderer = new Renderer(
            new Canvas(document.querySelector("#board")),
            new Canvas(document.querySelector('#buffer'))
        ),
        loop = new Loop(30, renderer),
        engine = new Engine(
            renderer,
            loop,
            camera,
            config
        ),
        assets = new Assets();
    
    var err = assets.loadImages(
        {
            "0_0": "../assets/map/tiles/0_0.png",
            "0_1": "../assets/map/tiles/0_1.png",
            "building1": "../assets/building/building1.png"
        }
    );

    if (err != null) {
        console.log(err.error());
    }

    var map = new Map([
            ['0_0', '0_0', '0_1', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1' ],
            ['0_1', '0_1', '0_0', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0' ],
            ['0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1' ],
            ['0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0' ],
            ['0_0', '0_1', '0_0', null, null, null, '0_0', '0_1', '0_0', '0_1' ],
            ['0_1', '0_0', '0_1', null, null, null, '0_1', '0_0', '0_1', '0_0' ],
            ['0_0', '0_1', '0_0', null, null, null, '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1' ],
            ['0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0' ],
            ['0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1' ],
            ['0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0' ],
            ['0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1' ],
            ['0_1', '0_0', '0_1', null, null, null, '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0' ],
            ['0_0', '0_1', '0_0', null, null, null, '0_0', '0_1', '0_0', '0_1' ],
            ['0_1', '0_0', '0_1', null, null, null, '0_1', '0_0', '0_1', '0_0' ],
            ['0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1' ],
            ['0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0' ],
            ['0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1' ],
            ['0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0' ]
        ],
        assets
    );

    engine.setMap(map);
    engine.start();

    map.loadMap();

    loop.setMode("PLAY");
    loop.addStartingConditions([
        assets.hasFinishedLoading.bind(assets)
    ]);
    loop.start();

    loop.displayUpdater.add("PLAY", function() {
        engine.drawImage(assets.get("building1"), 1, 3);
        engine.drawImage(assets.get("building1"), 3, 6);
        engine.drawImage(assets.get("building1"), 6, 2);
        engine.drawImage(assets.get("building1"), 14, 9);
        engine.drawImage(assets.get("building1"), 9, 14);
        engine.drawImage(assets.get("building1"), 10, 10);
    }, "buildings")

    loop.displayUpdater.add("PLAY", function() {
        var arrowSize = 8;
        renderer.drawLine(400, (config.canvasH / 2) - (arrowSize / 2), 400, (config.canvasH / 2) + (arrowSize / 2))
        renderer.drawLine((config.canvasW / 2) - (arrowSize / 2), 300, (config.canvasW / 2) + (arrowSize / 2), 300)
    }, "camera");

    var cameraTileMove = 1;
    var buildings = {};
    var pressFunc = {
        "z": function(){
            camera.addY(-cameraTileMove)
        },
        "s": function(){
            camera.addY(cameraTileMove)
        },
        "q": function(){
            camera.addX(-cameraTileMove)
        },
        "d": function(){
            camera.addX(cameraTileMove)
        },
        " ": function() {
            var label = "building-" + camera.coord.cX + camera.coord.cY;
            console.log(label);
            if (buildings.hasOwnProperty(label)){
                return
            }
            buildings[label] = {
                x: camera.coord.cX,
                y: camera.coord.cY
            }

            loop.displayUpdater.add("PLAY", function() {
                engine.drawImage(assets.get("building1"), buildings[label].x, buildings[label].y)
            }, label)
        }
    }
    document.addEventListener("keydown", function(e) {
        if (pressFunc.hasOwnProperty(e.key)) {
            pressFunc[e.key]();
        }
    });
});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

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
    this.add(x, 0)
}

Camera.prototype.addY = function(y) {
    this.add(0, y)
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

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(9);

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
        y: config.canvasMY - config.isoDecalY - ((this.cX + this.cY) * config.isoDecalY)
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

/***/ })
/******/ ]);