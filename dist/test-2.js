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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./demo/test-2.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../gloop/assets/assets.js":
/*!******************************************!*\
  !*** /mnt/d/work/gloop/assets/assets.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var CouldNotLoad = __webpack_require__(/*! ../errors/couldNotLoad */ \"../../../gloop/errors/couldNotLoad.js\"),\r\n    Img = __webpack_require__(/*! ./img */ \"../../../gloop/assets/img.js\"),\r\n    Frameset = __webpack_require__(/*! ./frameset */ \"../../../gloop/assets/frameset.js\");\r\n\r\nvar Assets = function(basePath) {\r\n    this.assets = [];\r\n    this.stillLoadingIt = 0;\r\n    this.basePath = basePath;\r\n    this.loadedCb = [];\r\n}\r\n\r\nAssets.prototype.loadFrameset = function(name, data, frameset, cb) {\r\n    var img = new Img(name, data);\r\n\r\n    img.loadWithCallback(\r\n        function (img) {\r\n            var fs = new Frameset(name, frameset, img);\r\n            this.assets[data.name] = fs;\r\n            cb(fs)\r\n        }.bind(this)\r\n    )\r\n}\r\n\r\n/**\r\n * @param string name\r\n * @param object data\r\n * @param function cb\r\n * \r\n * loadImage starts the asynchronous loading of a single image\r\n */\r\nAssets.prototype.loadImage = function(name, data, cb) {\r\n    this.assets[name] = new Img(name, data);\r\n    \r\n    this.assetLoadingIt++;\r\n    this.assets[name].loadWithCallback(function() {\r\n        if (cb !== undefined) {\r\n            cb(this.assets[name]);\r\n        }\r\n        this.assetLoadingIt--;\r\n        if (this.hasFinishedLoading) {\r\n            this.triggerOnLoaded()\r\n        }\r\n    }.bind(this));\r\n}\r\n\r\n/**\r\n * @param Object assetObject\r\n * @param function cb\r\n * @return CouldNotLoad|null\r\n * \r\n * loadImages loads an Object of images using the form:\r\n * {\"asset_name\": \"path_to_asset\"}\r\n */\r\nAssets.prototype.load = function(assetObject, cb) {\r\n    if (assetObject.constructor !== {}.constructor){\r\n        return new CouldNotLoad(\"Assets.loadImages: assetObject is not an Object\");\r\n    }\r\n\r\n    for (var k in assetObject) {\r\n        if (!assetObject.hasOwnProperty(k)) {\r\n            continue;\r\n        }\r\n        switch (assetObject[k].type) {\r\n            case 'image':\r\n                this.loadImage(k, assetObject[k].data, cb);\r\n            break;\r\n            case 'frameset':\r\n                this.loadFrameset(k, assetObject[k].data, assetObject[k].frames, cb);\r\n            break;\r\n            default:\r\n                console.log(\"Dunno how to load this Mista\")\r\n        }\r\n    }\r\n    \r\n    return null;\r\n}\r\n\r\n/**\r\n * @return bool\r\n * \r\n * hasFinishLoading returns the state of the assets loading\r\n */\r\nAssets.prototype.hasFinishedLoading = function() {\r\n    return this.stillLoadingIt === 0;\r\n}\r\n\r\n/**\r\n * @return Asset\r\n */\r\nAssets.prototype.get = function(name) {\r\n    if (this.assets[name] == undefined) {\r\n        return null;\r\n    }\r\n\r\n    return this.assets[name];\r\n}\r\n\r\nAssets.prototype.onLoaded = function(cb) {\r\n    this.loadedCb.push(cb);\r\n}\r\n\r\nAssets.prototype.triggerOnLoaded = function() {\r\n    for (i = 0; i < this.loadedCb.length; i++) {\r\n        this.loadedCb[i](this.assets);\r\n    }\r\n    this.loadedCb = [];\r\n}\r\n\r\nmodule.exports = Assets;\r\n\n\n//# sourceURL=webpack:////mnt/d/work/gloop/assets/assets.js?");

/***/ }),

/***/ "../../../gloop/assets/frameset.js":
/*!********************************************!*\
  !*** /mnt/d/work/gloop/assets/frameset.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Frameset = function(name, frames, sprite) {\n    if (name === undefined) {\n        console.error(\"A Frameset requires a name\");\n    }\n    if (frames === undefined) {\n        console.error(\"A Frameset requires frames\");\n    }\n    if (sprite === undefined) {\n        console.error(\"A Frameset requires a sprite (et ca redemarre)\");\n    }\n    this.name = name;\n    this.frames = frames;\n    this.sprite = sprite;\n}\n\nFrameset.prototype.getNext = function () {\n\n}\n\n// Img.prototype.getDecalX = function() {\n//     return this.dX;\n// }\n\n// Img.prototype.getDecalY = function() {\n//     return this.dY;\n// }\n\n// Img.prototype.getDecal = function() {\n//     return {\n//         x: this.getDecalX(),\n//         y: this.getDecalY()\n//     }\n// }\n\n// Img.prototype.getAsset = function() {\n//     return this.asset;\n// }\n\n// Img.prototype.render = function (renderer, x, y) {\n//     renderer.drawImage(this.getAsset(), x + this.getDecalX(), y + this.getDecalY(), this.w, this.h);\n// }\n\nmodule.exports = Frameset;\n\n\n//# sourceURL=webpack:////mnt/d/work/gloop/assets/frameset.js?");

/***/ }),

/***/ "../../../gloop/assets/img.js":
/*!***************************************!*\
  !*** /mnt/d/work/gloop/assets/img.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Img = function(name, data) {\n    if (name === undefined) {\n        console.error(\"An Image requires a name\");\n    }\n    if (data.src === undefined) {\n        console.error(\"An Image requires a source\");\n    }\n    if (!data.hasOwnProperty(\"src\")) {\n        return ;\n    }\n    if (!data.hasOwnProperty(\"dx\")) {\n        data.dx = 0;\n    }\n    if (!data.hasOwnProperty(\"dy\")) {\n        data.dy = 0;\n    }\n    if (data.dx === undefined) {\n        data.dx = 0;\n    }\n    if (data.dy === undefined) {\n        data.dy = 0;\n    }\n    if (data.w === undefined) {\n        data.w = 64;\n    }\n    if (data.h === undefined) {\n        data.h = 64;\n    }\n    this.name = name;\n    this.src = data.src;\n    this.dx = data.dx;\n    this.dy = data.dy;\n    this.w = data.w;\n    this.h = data.h;\n    this.asset = new Image()\n    this.asset.src = data.src;\n    this.asset.crossOrigin = \"Anonymous\";\n}\n\nImg.prototype.getDecalX = function() {\n    return this.dx;\n}\n\nImg.prototype.getDecalY = function() {\n    return this.dy;\n}\n\nImg.prototype.getDecal = function() {\n    return {\n        x: this.getDecalX(),\n        y: this.getDecalY()\n    }\n}\n\nImg.prototype.getAsset = function() {\n    return this.asset;\n}\n\nImg.prototype.render = function (renderer, x, y) {\n    renderer.drawImage(this.getAsset(), x + this.getDecalX(), y + this.getDecalY(), this.w, this.h);\n}\n\nImg.prototype.loadWithCallback = function(cb) {\n    this.asset.onload = cb;\n}\n\nmodule.exports = Img;\n\n\n//# sourceURL=webpack:////mnt/d/work/gloop/assets/img.js?");

/***/ }),

/***/ "../../../gloop/canvas.ts":
/*!***********************************!*\
  !*** /mnt/d/work/gloop/canvas.ts ***!
  \***********************************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return Canvas; });\nvar Canvas = /** @class */ (function () {\n    function Canvas(canvas) {\n        this.canvas = canvas;\n        this.c = this.canvas.getContext(\"2d\");\n    }\n    Canvas.prototype.drawLine = function (fX, fY, tX, tY) {\n        this.c.moveTo(fX, fY);\n        this.c.lineTo(tX, tY);\n        this.c.stroke();\n    };\n    Canvas.prototype.drawImage = function (img, x, y, w, h) {\n        if (!x)\n            x = 0;\n        if (!y)\n            y = 0;\n        if (!w)\n            w = this.width();\n        if (!h)\n            h = this.height();\n        this.c.drawImage(img, x, y, w, h);\n    };\n    Canvas.prototype.width = function () {\n        return this.canvas.width;\n    };\n    Canvas.prototype.height = function () {\n        return this.canvas.height;\n    };\n    //  Draw ImageData element onto canvas\n    Canvas.prototype.drawImageData = function (imgData, x, y, w, h, dx, dy) {\n        this.c.putImageData(imgData, x, y, dx, dy, w, h);\n    };\n    Canvas.prototype.clear = function () {\n        this.c.clearRect(0, 0, this.width(), this.height());\n    };\n    // snapshot captures the canvas and returns its ImageData equivalent\n    Canvas.prototype.snapshot = function () {\n        return this.c.getImageData(0, 0, this.width(), this.height());\n    };\n    return Canvas;\n}());\n\n\n\n//# sourceURL=webpack:////mnt/d/work/gloop/canvas.ts?");

/***/ }),

/***/ "../../../gloop/errors/couldNotLoad.js":
/*!************************************************!*\
  !*** /mnt/d/work/gloop/errors/couldNotLoad.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var CouldNotLoad = function(msg) {\r\n    this.msg = msg;\r\n}\r\n\r\nCouldNotLoad.prototype.error = function() {\r\n    return \"Could not Load: \" + this.msg;\r\n}\r\n\r\nmodule.exports = CouldNotLoad;\n\n//# sourceURL=webpack:////mnt/d/work/gloop/errors/couldNotLoad.js?");

/***/ }),

/***/ "../../../gloop/loop.ts":
/*!*********************************!*\
  !*** /mnt/d/work/gloop/loop.ts ***!
  \*********************************/
/*! exports provided: Loop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Loop\", function() { return Loop; });\n/* harmony import */ var _updater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updater */ \"../../../gloop/updater.ts\");\n\nvar Loop = /** @class */ (function () {\n    function Loop(fps, renderer) {\n        this.renderer = renderer;\n        this.startingConditions = [];\n        this.pT = 0;\n        this.setFrequencies(fps);\n        this.dataUpdater = new _updater__WEBPACK_IMPORTED_MODULE_0__[\"Updater\"](\"data\");\n        this.displayUpdater = new _updater__WEBPACK_IMPORTED_MODULE_0__[\"Updater\"](\"display\");\n    }\n    /**\n     * setFrequencies sets fps, iF & miF\n     * (iF = 1 / FPS, time between too frames)\n     * (miF = iF * 1000, time between frames in milliseconds)\n     */\n    Loop.prototype.setFrequencies = function (fps) {\n        this.fps = fps;\n        this.iF = 1 / fps;\n        this.miF = 1000 * this.iF;\n        console.info(\"setFrequencies(\" + fps + \") = {\", \"\\n\\tfps:\", fps, \"\\n\\tiF:\", this.iF, \"\\n\\tmiF:\", this.miF, \"\\n}\");\n    };\n    // setMode changes loop mode\n    Loop.prototype.setMode = function (mode) {\n        console.info(\"Setting mode from\", this.mode, \"to\", mode);\n        this.mode = mode;\n    };\n    // pause cancels data & display loops\n    Loop.prototype.pause = function () {\n        console.info(\"paused\");\n        clearTimeout(this.cbSeed);\n        clearTimeout(this.dSeed);\n    };\n    // start triggers data & display update loops\n    Loop.prototype.start = function () {\n        var _this = this;\n        if (!this.canStart()) {\n            this.renderer.scene.c.fillText(\"Loading...\", 360, 295);\n            setTimeout(this.start.bind(this), this.miF);\n            return;\n        }\n        console.info(\"started\");\n        setTimeout(function () { return _this.dataLoop(0); }, 30);\n        setTimeout(function () { return _this.displayLoop(0); }, 45);\n    };\n    // canStart checks if every startingConditions are met\n    Loop.prototype.canStart = function () {\n        for (var i = 0; i < this.startingConditions.length; i++) {\n            if (this.startingConditions[i]() === false) {\n                return false;\n            }\n        }\n        return true;\n    };\n    // addStartingConditions adds bulk starting conditions (array of func)\n    Loop.prototype.addStartingConditions = function (conditions) {\n        this.startingConditions = conditions;\n    };\n    // dataLoop is an iteration of the data loop, it calls itself perpetually through setTimeout\n    Loop.prototype.dataLoop = function (T) {\n        var _this = this;\n        var nT = window.performance.now();\n        this.dataUpdater.update(this.mode, T);\n        this.cbSeed = setTimeout(function () { return _this.dataLoop(_this.miF); }, T - (window.performance.now() - nT));\n    };\n    // displayLoop is an iteration of the display loop, it calls itself perpetually through setTimeout\n    Loop.prototype.displayLoop = function (T) {\n        var _this = this;\n        var nT = window.performance.now(), updStatus = 0;\n        updStatus = this.displayUpdater.update(this.mode, T, this.renderer);\n        if (updStatus > 0) {\n            this.renderer.render();\n        }\n        this.dSeed = setTimeout(function () { return _this.displayLoop(_this.miF); }, T - (window.performance.now() - nT));\n    };\n    return Loop;\n}());\n\n\n\n//# sourceURL=webpack:////mnt/d/work/gloop/loop.ts?");

/***/ }),

/***/ "../../../gloop/renderer.ts":
/*!*************************************!*\
  !*** /mnt/d/work/gloop/renderer.ts ***!
  \*************************************/
/*! exports provided: Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Renderer\", function() { return Renderer; });\nvar Renderer = /** @class */ (function () {\n    function Renderer(scene, buffer) {\n        this.scene = scene;\n        this.buffer = buffer;\n    }\n    // Draw a line onto engine's canvas\n    Renderer.prototype.drawLine = function (fX, fY, tX, tY) {\n        this.buffer.drawLine(fX, fY, tX, tY);\n    };\n    // Draw Image element onto engine's canvas\n    Renderer.prototype.drawImage = function (image, x, y, w, h) {\n        this.buffer.drawImage(image, x, y, w, h);\n    };\n    Renderer.prototype.render = function () {\n        // this.scene.clear();\n        var imgData = this.buffer.c.getImageData(0, 0, this.buffer.width(), this.buffer.height());\n        this.scene.drawImageData(imgData, 0, 0, this.scene.width(), this.scene.height(), 0, 0);\n        this.buffer.clear();\n    };\n    Renderer.prototype.drawImageData = function (imgData, x, y, w, h, dx, dy) {\n        this.buffer.drawImageData(imgData, x, y, w, h, dx, dy);\n    };\n    return Renderer;\n}());\n\n\n\n//# sourceURL=webpack:////mnt/d/work/gloop/renderer.ts?");

/***/ }),

/***/ "../../../gloop/updater.ts":
/*!************************************!*\
  !*** /mnt/d/work/gloop/updater.ts ***!
  \************************************/
/*! exports provided: Updater */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Updater\", function() { return Updater; });\nvar Updater = /** @class */ (function () {\n    function Updater(name) {\n        this.name = name;\n        this.nodes = {};\n        this.defaultNameCounter = 0;\n        this.name = name;\n    }\n    // update runs through the update nodes and call them passing\n    // an amount of ms and an entity to the callback\n    Updater.prototype.update = function (mode, T, entity) {\n        if (!this.nodes.hasOwnProperty(mode)) {\n            return;\n        }\n        var n = this.nodes[mode], updIt = 0, updSt = 0;\n        for (var i in n) {\n            updSt = n[i](T, entity);\n            if (updSt === undefined) {\n                updSt = 1;\n            }\n            if (updSt == -1) {\n                delete n[i];\n                continue;\n            }\n            updIt += updSt;\n        }\n        return updIt;\n    };\n    // add adds a callback to the update list after checking if one already exist\n    // for a given mode and maybe a name\n    Updater.prototype.add = function (mode, cb, name) {\n        if (!name) {\n            name = this.defaultNameCounter.toString();\n            this.defaultNameCounter++;\n        }\n        if (!this.nodes.hasOwnProperty(mode)) {\n            this.nodes[mode] = {};\n        }\n        if (this.nodes[mode].hasOwnProperty(name)) {\n            return \"Could not add element to the updater list, name already exists\";\n        }\n        this.nodes[mode][name] = cb;\n        return null;\n    };\n    // remove removes an updater from the list using\n    // a mode and name\n    Updater.prototype.remove = function (mode, name) {\n        if (!this.nodes.hasOwnProperty(mode)) {\n            return \"Could not remove element, mode \" + mode + \" does not exist\";\n        }\n        if (!this.nodes[mode].hasOwnProperty(name)) {\n            return \"Could not remove element, name \" + name + \" does not exist\";\n        }\n        delete this.nodes[mode][name];\n        return null;\n    };\n    return Updater;\n}());\n\n\n\n//# sourceURL=webpack:////mnt/d/work/gloop/updater.ts?");

/***/ }),

/***/ "./demo/test-2.ts":
/*!************************!*\
  !*** ./demo/test-2.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/config */ \"./src/config.ts\");\n/* harmony import */ var _src_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/browser */ \"./src/browser.ts\");\n/* harmony import */ var gloop_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gloop/canvas */ \"../../../gloop/canvas.ts\");\n/* harmony import */ var gloop_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gloop/renderer */ \"../../../gloop/renderer.ts\");\n/* harmony import */ var gloop_loop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gloop/loop */ \"../../../gloop/loop.ts\");\nvar Map = __webpack_require__(/*! zizo/map */ \"./node_modules/zizo/map.js\"), Assets = __webpack_require__(/*! gloop/assets/assets */ \"../../../gloop/assets/assets.js\"), Camera = __webpack_require__(/*! zizo/camera */ \"./node_modules/zizo/camera.js\"), Coord = __webpack_require__(/*! zizo/coordinates */ \"./node_modules/zizo/coordinates.js\"), Engine = __webpack_require__(/*! zizo/isometric */ \"./node_modules/zizo/isometric.js\");\n\n\n\n\n\n(new _src_browser__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"]()).onReady(function () {\n    var camera = new Camera(new Coord(2.5, 6.5, _src_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].canvasMX, _src_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].canvasMY, _src_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].tileTopW, _src_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].isoDecalX, _src_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].isoDecalY)), renderer = new gloop_renderer__WEBPACK_IMPORTED_MODULE_3__[\"Renderer\"](new gloop_canvas__WEBPACK_IMPORTED_MODULE_2__[\"Canvas\"](document.querySelector(\"#board\")), new gloop_canvas__WEBPACK_IMPORTED_MODULE_2__[\"Canvas\"](document.querySelector('#buffer'))), loop = new gloop_loop__WEBPACK_IMPORTED_MODULE_4__[\"Loop\"](15, renderer), engine = new Engine(renderer, loop.displayUpdater, loop.dataUpdater, camera), assets = new Assets(\"../assets\");\n    fetch(new Request('../assets/assets.json')).then(function (res) {\n        res.json().then(function (data) {\n            var err = assets.load(data, function (asset) {\n                console.log(\"Just loaded \" + asset.name);\n            });\n            if (err != null) {\n                console.log(err.error());\n            }\n        });\n    });\n    var map = new Map([\n        ['0_0', '0_0', '0_1', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1'],\n        ['0_1', '0_1', '0_0', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0'],\n        ['0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1'],\n        ['0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0'],\n        ['0_0', '0_1', '0_0', null, null, null, '0_0', '0_1', '0_0', '0_1'],\n        ['0_1', '0_0', '0_1', null, null, null, '0_1', '0_0', '0_1', '0_0'],\n        ['0_0', '0_1', '0_0', null, null, null, '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1'],\n        ['0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0'],\n        ['0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1'],\n        ['0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0'],\n        ['0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1'],\n        ['0_1', '0_0', '0_1', null, null, null, '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0'],\n        ['0_0', '0_1', '0_0', null, null, null, '0_0', '0_1', '0_0', '0_1'],\n        ['0_1', '0_0', '0_1', null, null, null, '0_1', '0_0', '0_1', '0_0'],\n        ['0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1'],\n        ['0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0'],\n        ['0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1'],\n        ['0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0']\n    ], assets);\n    engine.setMap(map);\n    engine.start();\n    assets.onLoaded(map.loadMap.bind(map));\n    // map.loadMap();\n    loop.setMode(\"PLAY\");\n    loop.addStartingConditions([\n        assets.hasFinishedLoading.bind(assets)\n    ]);\n    loop.start();\n    engine.objectUpdater.add(\"PLAY\", function (T, objects) {\n        objects.add(assets.get(\"building1\"), 1, 3);\n        objects.add(assets.get(\"building1\"), 3, 8);\n        objects.add(assets.get(\"building1\"), 6, 2);\n        objects.add(assets.get(\"building1\"), 14, 7);\n        objects.add(assets.get(\"building1\"), 9, 14);\n        objects.add(assets.get(\"building1\"), 10, 10);\n    }, \"buildings\");\n    loop.displayUpdater.add(\"PLAY\", function () {\n        var arrowSize = 8;\n        renderer.drawLine(400, (_src_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].canvasH / 2) - (arrowSize / 2), 400, (_src_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].canvasH / 2) + (arrowSize / 2));\n        renderer.drawLine((_src_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].canvasW / 2) - (arrowSize / 2), 300, (_src_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].canvasW / 2) + (arrowSize / 2), 300);\n    }, \"camera\");\n    var cameraTileMove = 0.25;\n    var buildings = {};\n    var pressFunc = {\n        \"z\": function () {\n            camera.addY(-cameraTileMove);\n        },\n        \"s\": function () {\n            camera.addY(cameraTileMove);\n        },\n        \"q\": function () {\n            camera.addX(-cameraTileMove);\n        },\n        \"d\": function () {\n            camera.addX(cameraTileMove);\n        },\n        \"w\": function () {\n            camera.addY(-cameraTileMove);\n        },\n        \"a\": function () {\n            camera.addX(-cameraTileMove);\n        },\n        \" \": function () {\n            var label = \"building-\" + camera.coord.icX + camera.coord.icY;\n            if (buildings.hasOwnProperty(label)) {\n                return;\n            }\n            buildings[label] = {\n                x: camera.coord.icX,\n                y: camera.coord.icY\n            };\n            engine.objectUpdater.add(\"PLAY\", function (T, objects) {\n                objects.add(assets.get(\"building1\"), buildings[label].x << 0, buildings[label].y << 0, 10);\n            }, label);\n        }\n    };\n    document.addEventListener(\"keydown\", function (e) {\n        if (pressFunc.hasOwnProperty(e.key)) {\n            pressFunc[e.key]();\n        }\n    });\n});\n\n\n//# sourceURL=webpack:///./demo/test-2.ts?");

/***/ }),

/***/ "./node_modules/zizo/camera.js":
/*!*************************************!*\
  !*** ./node_modules/zizo/camera.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Camera = function(coord) {\r\n    this.coord = coord;\r\n    this.coord.computeCenter();\r\n}\r\n\r\nCamera.prototype.setX = function(x) {\r\n    this.set(x, this.coord.icY);\r\n}\r\n\r\nCamera.prototype.setY = function(y) {\r\n    this.set(this.coord.icX, y);\r\n}\r\nCamera.prototype.set = function(x, y) {\r\n    this.coord.icX = x;\r\n    this.coord.icY = y;\r\n    this.coord.computeCenter();\r\n}\r\n\r\nCamera.prototype.addX = function(x) {\r\n    this.add(x, 0)\r\n}\r\n\r\nCamera.prototype.addY = function(y) {\r\n    this.add(0, y)\r\n}\r\n\r\nCamera.prototype.add = function(x, y) {\r\n    this.coord.icX += x;\r\n    this.coord.icY += y;\r\n    this.coord.computeCenter();\r\n}\r\nCamera.prototype.getCoordinates = function () {\r\n    return this.coord;\r\n}\r\n\r\nmodule.exports = Camera;\n\n//# sourceURL=webpack:///./node_modules/zizo/camera.js?");

/***/ }),

/***/ "./node_modules/zizo/coordinates.js":
/*!******************************************!*\
  !*** ./node_modules/zizo/coordinates.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * Coordinates is used to convert isometric's {x:y} coordinates\r\n * into Canvas' {x:y} coordinates.\r\n * Can add Camera coordinates in the conversion.\r\n * \r\n * {icX:icY} describes which {x:y} isometric coordinates the Camera looks at.\r\n * \r\n * {ccX:ccY} describes where the Camera looks at (most likely the center) will be drawn on the canvas.\r\n * \r\n * @param {int} icX isometric X coordinates of the Camera\r\n * @param {int} icY isometric Y coordinates of the Camera\r\n * @param {int} ccX canvas X coordinates where the Camera looks at will be drawn\r\n * @param {int} ccY canvas Y coordinates where the Camera looks at will be drawn\r\n */\r\nvar Coordinates = function(icX, icY, ccX, ccY, tileW, decalX, decalY) {\r\n    this.start = {\r\n        x: 0,\r\n        y: 0\r\n    };\r\n    if (icX === undefined || icY === undefined) {\r\n        icX = 0;\r\n        icY = 0;\r\n    }\r\n    if (ccX === undefined || ccY === undefined) {\r\n        ccX = 0;\r\n        ccY = 0;\r\n    }\r\n    if (tileW === undefined) {\r\n        tileW = 64;\r\n    }\r\n    if (decalX === undefined) {\r\n        decalX = 0\r\n    }\r\n    if ( decalY === undefined) {\r\n        decalY = 0\r\n    }\r\n    this.icX = icX;\r\n    this.icY = icY;\r\n    this.ccX = ccX;\r\n    this.ccY = ccY;\r\n    this.tileW = tileW;\r\n    this.decalX = decalX;\r\n    this.decalY = decalY;\r\n}\r\n\r\n/**\r\n * computeCenter computes icX & icY with ccX & ccY to determine\r\n * where the graphic engine will start drawing the isometric grid.\r\n * \r\n * @return {this}\r\n */\r\nCoordinates.prototype.computeCenter = function() {\r\n    this.start = {\r\n        x: this.ccX - this.decalX + ((this.icY - this.icX) * this.decalX),\r\n        y: this.ccY - ((this.icX + this.icY) * this.decalY)\r\n    }\r\n    return this;\r\n}\r\n\r\nCoordinates.prototype.getStart = function () {\r\n    return this.start;\r\n}\r\n\r\n/**\r\n * fromTileCoordinates computes and returns the canvas {x:y} coordinates\r\n * of an isometric tile, from its isometric {x:y} coordinates.\r\n * \r\n * @param {int} x\r\n * @param {int} y\r\n */\r\nCoordinates.prototype.fromTileCoordinates = function(x, y) {\r\n\r\n    return {\r\n        x: this.start.x + (x * this.tileW) - ((x + y) * this.decalX),\r\n        y: this.start.y + ((x + y) * this.decalY)\r\n    }\r\n}\r\n\r\nmodule.exports = Coordinates;\r\n\n\n//# sourceURL=webpack:///./node_modules/zizo/coordinates.js?");

/***/ }),

/***/ "./node_modules/zizo/isometric.js":
/*!****************************************!*\
  !*** ./node_modules/zizo/isometric.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Updater = __webpack_require__(/*! gloop/updater */ \"./node_modules/zizo/node_modules/gloop/updater.js\"),\r\n    Objects = __webpack_require__(/*! ./objects */ \"./node_modules/zizo/objects.js\");\r\n\r\n/**\r\n * Isometric is the main engine managing the isometric rendering of elements.\r\n * Must be used instead of the canvas Renderer directly\r\n * \r\n * @param {Renderer} renderer \r\n * @param {Updater} displayUpdater \r\n * @param {Updater} dataUpdater \r\n * @param {Camera} camera \r\n * @param {config} config \r\n */\r\nvar Isometric = function(renderer, displayUpdater, dataUpdater, camera) {\r\n    this.renderer = renderer;\r\n    this.displayUpdater = displayUpdater;\r\n    this.dataUpdater = dataUpdater;\r\n    this.map = [];\r\n    this.camera = camera;\r\n    this.objectUpdater = new Updater(\"iso\");\r\n    this.objects = new Objects();\r\n}\r\n\r\n/**\r\n * start must be run after Isometric engine's declaration in order\r\n * to work.\r\n */\r\nIsometric.prototype.start = function() {\r\n    this.displayUpdater.add(\"PLAY\", this.renderMap.bind(this), \"isometricEngineMapDisplay\");\r\n    this.dataUpdater.add(\"PLAY\", this.updateObjectPositions.bind(this), \"isometricUpdateObjectPosition\");\r\n    this.displayUpdater.add(\"PLAY\", this.renderObjects.bind(this), \"isometricRenderObjects\");\r\n}\r\n\r\nIsometric.prototype.setMap = function(map) {\r\n    this.map = map;\r\n}\r\n\r\n/**\r\n * renderMap is called by the displayUpdater of the Loop to renders the map.\r\n * Might change to be working with the \"renderObjects\" function\r\n * \r\n * @return {int}\r\n */\r\nIsometric.prototype.renderMap = function() {\r\n    for (y = 0; y < this.map.map.length; y++) {\r\n        for (x = 0; x < this.map.map[y].length; x++) {\r\n            if (!this.map.map[y][x]) {\r\n                continue;\r\n            }\r\n            this.drawImage(this.map.map[y][x], x, y);\r\n        }\r\n    }\r\n    return 1;\r\n}\r\n\r\n/**\r\n * renderObjects is called by the displayUpdater of the Loop to renders various objects on the scene.\r\n * Use {x:y} coordinates to place the objects and 'z' value to determinate order of display on a same \r\n * {x:y} coordinates.\r\n * \r\n * @return {int}\r\n */\r\nIsometric.prototype.renderObjects = function() {\r\n    var objs = null;\r\n    for (var x in this.objects.objects) {\r\n        for (var y in this.objects.objects[x]) {\r\n            for (var z in this.objects.objects[x][y]) {\r\n                x = parseInt(x);\r\n                y = parseInt(y);\r\n                z = parseInt(z);\r\n                objs = this.objects.get(x, y, z);\r\n                if (!objs) {\r\n                    continue;\r\n                }\r\n                for (i = 0; i < objs.length; i++) {\r\n                    this.drawImage(objs[i], x, y);\r\n                }\r\n            }\r\n        }\r\n    }\r\n    return 1;\r\n}\r\n/**\r\n * updateObjectPositions is called by the dataUpdater of the Loop.\r\n * Triggers the updates contained in the objectUpdater\r\n * \r\n * @param {int} T amount of seconds passed from last Loop iteration\r\n */\r\nIsometric.prototype.updateObjectPositions = function(T) {\r\n    this.objects = new Objects();\r\n    // Object entity passed in every update callbacks\r\n    this.objectUpdater.update(\"PLAY\", T, this.objects);\r\n    return 1;\r\n}\r\n\r\n/**\r\n * drawImage draws an image on the scene using isometric {x:y} coordinates\r\n * \r\n * @param {Image} img\r\n * @param int x\r\n * @param int y\r\n */\r\nIsometric.prototype.drawImage = function(img, x, y) {\r\n    if (img === undefined || img === null) {\r\n        return 1;\r\n    }\r\n    var coords = this.camera.getCoordinates().fromTileCoordinates(x, y);\r\n    img.render(this.renderer, coords.x, coords.y);\r\n}\r\n\r\nIsometric.prototype.getObjectUpdater = function() {\r\n    return this.objectUpdater;\r\n}\r\n \r\nmodule.exports = Isometric;\r\n\n\n//# sourceURL=webpack:///./node_modules/zizo/isometric.js?");

/***/ }),

/***/ "./node_modules/zizo/map.js":
/*!**********************************!*\
  !*** ./node_modules/zizo/map.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Map = function(matrix, assets) {\r\n    this.matrix = matrix;\r\n    this.map = [];\r\n    this.assets = assets;\r\n}\r\n\r\nMap.prototype.loadMap = function() {\r\n    for (x = 0; x < this.matrix.length; x++) {\r\n        this.map[x] = [];\r\n        for (y = 0; y < this.matrix[x].length; y++) {\r\n            this.map[x][y] = this.assets.get(this.matrix[x][y]);\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = Map;\r\n\n\n//# sourceURL=webpack:///./node_modules/zizo/map.js?");

/***/ }),

/***/ "./node_modules/zizo/node_modules/gloop/updater.js":
/*!*********************************************************!*\
  !*** ./node_modules/zizo/node_modules/gloop/updater.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Updater = function(name) {\n    if (!name) {\n        name = Date.now();\n    }\n    this.name = name;\n    this.nodes = {};\n    this.defaultNameCounter = 0;\n}\n\n/**\n * \n * @param {int} T \n */\nUpdater.prototype.update = function(mode, T, engine) {\n    if (!this.nodes.hasOwnProperty(mode)) {\n        return ;\n    }\n    var n = this.nodes[mode],\n        updIt = 0,\n        updSt = 0;\n\n    for (var i in n) {\n        updSt = n[i](T, engine);\n        if (updSt === undefined) {\n            updSt = 1;\n        }\n        if (updSt == -1) {\n            delete n[i];\n            continue;\n        }\n        updIt += updSt;\n    }\n    \n    return updIt;\n}\n\n/**\n * \n * @param {function} cb\n * @param {string} name \n * \n * @return {null|string}\n */\nUpdater.prototype.add = function(mode, cb, name) {\n    if (!mode) {\n        return \"Mode must be provided\";\n    }\n    \n    if (!name) {\n        name = this.defaultNameCounter;\n        this.defaultNameCounter++;\n    }\n\n    if (!this.nodes.hasOwnProperty(mode)) {\n        this.nodes[mode] = {};\n    }\n\n    if (this.nodes[mode].hasOwnProperty(name)) {\n        return \"Could not add element to the updater list, name already exists\";\n    }\n\n    this.nodes[mode][name] = cb;\n\n    return null;\n}\n\nUpdater.prototype.remove = function(mode, name) {\n    if (!this.nodes.hasOwnProperty(mode)) {\n        return \"Could not remove element, mode \" + mode + \" does not exist\";\n    }\n\n    if (!this.nodes[mode].hasOwnProperty(name)) {\n        return \"Could not remove element, name \" + name + \" does not exist\";\n    }\n\n    delete this.nodes[mode][name];\n\n    return null;\n}\n\nmodule.exports = Updater;\n\n//# sourceURL=webpack:///./node_modules/zizo/node_modules/gloop/updater.js?");

/***/ }),

/***/ "./node_modules/zizo/objects.js":
/*!**************************************!*\
  !*** ./node_modules/zizo/objects.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Objects = function() {\r\n    this.objects = [];\r\n    this.zSafeThreshold = 3;\r\n}\r\n\r\nObjects.prototype.exists = function(x, y, z) {\r\n    return this.objects[x] != undefined\r\n        && Array.isArray(this.objects[x])\r\n        && this.objects[x][y] != undefined\r\n        && Array.isArray(this.objects[x][y])\r\n        && this.objects[x][y][z] != undefined;\r\n}\r\n\r\nObjects.prototype.get = function(x, y, z) {\r\n    return this.exists(x, y, z) ? this.objects[x][y][z] : null;\r\n}\r\n\r\nObjects.prototype.canAddObject = function(entity, x, y, z) {\r\n    return entity !== undefined \r\n        && x != undefined \r\n        && y != undefined \r\n        && z != undefined;\r\n}\r\n\r\nObjects.prototype.prepareObjectsArray = function(x, y) {\r\n    if (this.objects[x] === undefined) {\r\n        this.objects[x] = [];\r\n        this.objects[x][y] = [];\r\n        return;\r\n    }\r\n\r\n    if (this.objects[x][y] === undefined) {\r\n        this.objects[x][y] = [];\r\n    }\r\n}\r\n\r\nObjects.prototype.add = function(entity, x, y, z) {\r\n    if (z === undefined) {\r\n        z = 0;\r\n    }\r\n    z += this.zSafeThreshold;\r\n    if (!this.canAddObject(entity, x, y, z)) {\r\n        return -1;\r\n    }\r\n\r\n    this.prepareObjectsArray(x, y);\r\n    if (this.objects[x][y][z] === undefined) {\r\n        this.objects[x][y][z] = [];\r\n    }\r\n    this.objects[x][y][z].push(entity);\r\n}\r\n\r\nmodule.exports = Objects;\r\n\n\n//# sourceURL=webpack:///./node_modules/zizo/objects.js?");

/***/ }),

/***/ "./src/browser.ts":
/*!************************!*\
  !*** ./src/browser.ts ***!
  \************************/
/*! exports provided: Browser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Browser\", function() { return Browser; });\nvar Browser = /** @class */ (function () {\n    function Browser() {\n    }\n    Browser.prototype.onReady = function (cb) {\n        document.addEventListener(\"DOMContentLoaded\", cb);\n    };\n    return Browser;\n}());\n\n\n\n//# sourceURL=webpack:///./src/browser.ts?");

/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\nvar config;\n(function (config) {\n    config.canvasW = 800;\n    config.canvasH = 600;\n    config.tileW = 64;\n    config.tileH = 64;\n    config.tileTopW = 64;\n    config.tileTopH = 32;\n    config.isoDecalX = config.tileTopW / 2;\n    config.isoDecalY = config.tileTopH / 2;\n    config.canvasMX = config.canvasW / 2;\n    config.canvasMY = config.canvasH / 2;\n})(config || (config = {}));\n\n\n//# sourceURL=webpack:///./src/config.ts?");

/***/ })

/******/ });