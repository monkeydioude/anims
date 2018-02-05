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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Canvas = __webpack_require__(0);

var Engine = function(scene, buffer) {
    this.scene = new Canvas(scene);
    this.buffer = new Canvas(buffer);
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
    this.buffer.drawImageData(imgData, x, y, dx, dy, w, h);
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
    this.graphicUpdater = new Updater("graphic");
    this.mode = startingMode;
};

/**
 * @param {*} mode 
 */
Loop.prototype.setMode = function(mode) {
    console.info("Seeting mode from", this.mode, "to", mode);
    this.mode = mode;
}

Loop.prototype.pause = function() {
    console.info("paused");
    clearTimeout(this.cbSeed);
    clearTimeout(this.dSeed);
}

Loop.prototype.start = function() {
    console.info("started");
    setTimeout(function(){this.process(0);}.bind(this), 0);
    setTimeout(function(){this.display(0);}.bind(this), 0);
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
Loop.prototype.process = function(T) {
    var nT = window.performance.now();

    this.dataUpdater.update(this.mode, T);
    this.cbSeed = setTimeout(function(){this.process(this.miF);}.bind(this), T - (window.performance.now() - nT));
}

/**
 * 
 * @param {*} T 
 */
Loop.prototype.display = function(T) {
    var nT = window.performance.now(),
        updStatus = 0;

    updStatus = this.graphicUpdater.update(this.mode, T, this.engine);
    
    if (updStatus > 0) {
        this.engine.render();
    }
    this.dSeed = setTimeout(function(){this.display(this.miF);}.bind(this), T - (window.performance.now() - nT));
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
/* 5 */
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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var Engine = __webpack_require__(1),
    Canvas = __webpack_require__(0),
    Loop = __webpack_require__(2),
    Logger = __webpack_require__(4),
    Browser = __webpack_require__(5);

document.addEventListener("DOMContentLoaded", function() {
    var initialFPS = 30,
        imgDataDummy = null,
        engine = new Engine(document.querySelector("#board"), document.querySelector('#buffer')),
        debug = new Canvas(document.querySelector("#debug")),
        loop = new Loop(initialFPS, engine),
        logger = new Logger("info", false),
        err = null,
        shittyFps = {
            m: 0,
            cT: 0
        };

        loop.setMode("PLAY");

        (new Browser())
            .onDocumentHidden(loop.pause.bind(loop))
            .onDocumentVisible(loop.start.bind(loop))
            .onBlur(function(){document.querySelector('[data-display="crap"]').innerHTML = '(╯°□°）╯︵ ┻━┻';})
            .onFocus(function(){document.querySelector('[data-display="crap"]').innerHTML = '┬─┬ノ( º _ ºノ)';});

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

    /* ======= */



    /* ======= */
    var fpsSelector = document.querySelector("[data-action='set-fps']");

    document.querySelector("[data-action='loop-start']").addEventListener("click", loop.start.bind(loop));
    document.querySelector("[data-action='loop-pause']").addEventListener("click", loop.pause.bind(loop));
    document.querySelector("[data-action='hide-logs']").addEventListener("click", logger.toggleLogs.bind(logger));

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

/***/ })
/******/ ]);