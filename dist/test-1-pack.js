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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var Engine = function(sceneCanvas, bufferCanvas) {
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
Engine.prototype.draw = function(x, y, w, h, color) {
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
Engine.prototype.drawImageData = function(imgData, x, y, w, h, dx, dy) {
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
Engine.prototype.drawImage = function(image, x, y, w, h) {
    this.buffer.drawImage(image, x, y, w, h);
}

/**
 * Width of the engine's canvas
 * @return int
 */
Engine.prototype.width = function() {
    return this.scene.width();
}

/**
 * Height of the engine's canvas
 * @return int
 */
Engine.prototype.height = function() {
    return this.scene.height();
}

/**
 * Return the ImageData version of the whole engine's canvas
 * @return ImageData
 */
Engine.prototype.captureScene = function() {
    return this.scene.c.getImageData(0, 0, this.scene.width(), this.scene.height());
}

Engine.prototype.clear = function() {
    this.scene.clear();
    this.buffer.clear();
}

Engine.prototype.render = function() {
    // this.scene.clear();
    this.scene.drawImageData(
        this.buffer.c.getImageData(
            0, 0, this.buffer.width(), this.buffer.height()
        )
    );
    this.buffer.clear();
}

Engine.prototype.snapshot = function() {
    return this.buffer.snapshot();
}

module.exports = Engine;

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
    console.info("started");
    setTimeout(function(){this.dataLoop(0);}.bind(this), 0);
    setTimeout(function(){this.displayLoop(0);}.bind(this), 0);
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
/***/ (function(module, exports, __webpack_require__) {

var Graphic = __webpack_require__(0),
    Canvas = __webpack_require__(1),
    Loop = __webpack_require__(2),
    Logger = __webpack_require__(5),
    Browser = __webpack_require__(6),
    Stack = __webpack_require__(7),
    Color = __webpack_require__(9),
    Map = __webpack_require__(11),
    Engine = __webpack_require__(12);

document.addEventListener("DOMContentLoaded", function() {
    var initialFPS = 30,
        graphic = new Graphic(
            new Canvas(document.querySelector("#board")),
            new Canvas(document.querySelector('#buffer'))
        ),
        debug = new Canvas(document.querySelector("#debug")),
        loop = new Loop(initialFPS, graphic),
        logger = new Logger("info", false),
        err = null,
        shittyFps = {
            m: 0,
            cT: 0
        },
        matrix = [
            [0, 1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 1],
            [0, 1, 1, 1, 1, 0]
        ],
        engine = new Engine(
            graphic,
            loop
        );

        var map = new Map([
            ['0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1' ],
            ['0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0' ],
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
        ]);
    
        map.loadMap();
    
        engine.setMap(map);
        engine.start();

        var pixelAnim = function(T, engine) {
            if (dummyLock) {
                return  ;
            }
            if (imgDataDummy) {
                engine.drawImageData(imgDataDummy)
            }
            dummyLock = true;
            var m = [6, 6],
                sX = (Math.random() * engine.width()) << 0,
                sY = (Math.random() * engine.height()) << 0,
                r = (Math.random() * 255) << 0,
                g = (Math.random() * 255) << 0,
                b = (Math.random() * 255) << 0,
                a = Math.random();

            if (sX > (engine.width() - m[0])) {
                sX = engine.width() - m[0];
            }
            
            if (sY > (engine.height() - m[1])) {
                sY = engine.height() - m[1];
            }

            (new Stack(sX, sY, new Color(r, g, b, a), matrix)).render(engine);

            imgDataDummy = engine.snapshot();
            debug.drawImageData(imgDataDummy);
            return 1;
            // return -1;
        }
        
        err = loop.displayUpdater.add("PLAY", pixelAnim, "pixelAnim");
        if (err != null) {
            console.error(err);
        }

        var pauseDisplay = function(T, engine) {
            if (imgDataDummy) {
                engine.drawImageData(imgDataDummy)
            }
            engine.draw(0, 0, engine.width(), engine.height(), new Color(75, 200, 125, 0.2));
            return 1;
        }

        err = loop.displayUpdater.add("PAUSE", pauseDisplay, "pauseDisplay");
        if (err != null) {
            console.error(err);
        }

        loop.setMode("PLAY");

        setTimeout(function(){
            loop.setMode("PAUSE")
            setInterval(function(){
                loop.setMode("PAUSE")
            }, 6000)
        }, 3000);

        setTimeout(function(){
            loop.setMode("PLAY")
            setInterval(function(){
                loop.setMode("PLAY")
            }, 6000)
        }, 6000);
        (new Browser())
            .onDocumentHidden(loop.pause.bind(loop))
            .onDocumentVisible(loop.start.bind(loop))
            .onBlur(function(){document.querySelector('[data-display="crap"]').innerHTML = '(╯°□°）╯︵ ┻━┻';})
            .onFocus(function(){document.querySelector('[data-display="crap"]').innerHTML = '┬─┬ノ( º _ ºノ)';});

        err = loop.dataUpdater.add("PLAY", logger.log.bind(logger));
        if (err != null) {
            console.error(err);
        }

        err = loop.dataUpdater.add("PLAY", function(T) {
            shittyFps.cT += T;
            shittyFps.m++;
            document.querySelector("#T").innerHTML = T.toFixed(4);

            if (shittyFps.cT >= 100) {
                document.querySelector("#fps").innerHTML = ((shittyFps.m / shittyFps.cT) * 1000).toFixed(4);
                shittyFps = {
                    m: 0,
                    cT: 0
                };
            }
        });
        if (err != null) {
            console.error(err);
        }

        var dummyT = 0,
            dummyLock = true,
            imgDataDummy = null;

        loop.dataUpdater.add("PLAY", function(T) {
            dummyT += T;
            if (dummyT >= 0) {
                dummyLock = false;
                dummyT = 0
            }
        });

    /* ======= */
    var fpsSelector = document.querySelector("[data-action='set-fps']");

    document.querySelector("[data-action='loop-start']").addEventListener("click", loop.start.bind(loop));
    document.querySelector("[data-action='loop-pause']").addEventListener("click", loop.pause.bind(loop));
    document.querySelector("[data-action='hide-logs']").addEventListener("click", logger.toggleLogs.bind(logger));
    document.querySelector("[data-action='clear-canvas']").addEventListener("click", function() {
        graphic.clear();
        imgDataDummy = null;
    });
    document.querySelector("[data-action='stop-animation']").addEventListener("click", function(){
        err = loop.graphicUpdater.remove("PLAY", "pixelAnim");
        if (err != null) {
            console.info(err);
        }
    });
    document.querySelector("[data-action='reload-animation']").addEventListener("click", function(){
        err = loop.graphicUpdater.remove("PLAY", "pixelAnim");
        if (err != null) {
            console.info(err);
        }
        err = loop.graphicUpdater.add("PLAY", pixelAnim, "pixelAnim");
        if (err != null) {
            console.error(err);
        }
    });

    document.querySelector("[data-action='toggle-debug']").addEventListener("click", function() {
        if (debug.canvas.style.visibility == "visible" || debug.canvas.style.visibility == "") {
            debug.canvas.style.visibility = "hidden";
            return;
        }
        debug.canvas.style.visibility = "visible";
    });

    fpsSelector.addEventListener("keypress", function(e) {
        if (e.charCode == 13) {
            loop.setFrequencies(parseInt(e.target.value));
        }
    });
    fpsSelector.value = initialFPS;
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var Logger = function(type, shouldDisplayLogs) {
    if (!type) {
        type = "info"
    }

    this.type = type;

    if (!shouldDisplayLogs && shouldDisplayLogs !== false) {
        shouldDisplayLogs = true;
    }

    this.shouldDisplayLogs = shouldDisplayLogs;
}

Logger.prototype.log = function(msg) {
    if (!this.shouldDisplayLogs) {
        return ;
    }
    console[this.type](msg);
}

Logger.prototype.toggleLogs = function() {
    console[this.type]("Setting logs from", this.shouldDisplayLogs, "to", !this.shouldDisplayLogs);
    this.shouldDisplayLogs = !this.shouldDisplayLogs;
}

module.exports = Logger;

/***/ }),
/* 6 */
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

module.exports = Browser;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Pixel = __webpack_require__(8);

var Stack = function(x, y, color, m) {
    this.x = x;
    this.y = y;
    this.c = color;
    this.m = [];

    if (m) {
        this.computeMatrix(m);
    }
}

Stack.prototype.update = function() {

}

/**
 * Render entity and apply an update function, if any, to each pixel before rendering
 * @param {*} engine 
 * @param {function(Pixel)} updateLogic
 */
Stack.prototype.render = function(engine, updateLogic) {
    for (var p in this.m) {
        if (updateLogic) {
            updateLogic(this.m[p]);
        }
        this.m[p].render(engine)
    }
}

Stack.prototype.computeMatrix = function(m) {
    try {
        var x = 0,
            y = 0;

        for (var r in m) {
            x = 0;
            for (var p in m[r]) {
                if (m[r][p] === 1) {
                    this.m.push(new Pixel(this.x + x, this.y + y, this.c));
                }
                x++;
            }
            y++;
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = Stack;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var Pixel = function(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
}

Pixel.prototype.render = function(engine) {
    engine.draw(this.x, this.y, 1, 1, this.color);
}

module.exports = Pixel;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var Color = function(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    if (!a) {
        a = 1;
    }
    this.a = a;
}

Color.prototype.RGBA = function() {
    return "rgba("+this.r+", "+this.g+", "+this.b+", "+this.a+")";
}

module.exports = Color;

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

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

/***/ }),
/* 12 */
/***/ (function(module, exports) {

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

/***/ })
/******/ ]);