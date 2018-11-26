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

/***/ "./demo/test-2.ts":
/*!************************!*\
  !*** ./demo/test-2.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/config */ \"./src/config.ts\");\n/* harmony import */ var _src_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/browser */ \"./src/browser.ts\");\n/* harmony import */ var gloop_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gloop/canvas */ \"./node_modules/gloop/canvas.ts\");\n/* harmony import */ var gloop_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gloop/renderer */ \"./node_modules/gloop/renderer.ts\");\n/* harmony import */ var gloop_loop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gloop/loop */ \"./node_modules/gloop/loop.ts\");\n/* harmony import */ var zizo_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zizo/camera */ \"./node_modules/zizo/camera.ts\");\n/* harmony import */ var zizo_coordinates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! zizo/coordinates */ \"./node_modules/zizo/coordinates.ts\");\n/* harmony import */ var zizo_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! zizo/map */ \"./node_modules/zizo/map.ts\");\n/* harmony import */ var zizo_isometric__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! zizo/isometric */ \"./node_modules/zizo/isometric.ts\");\n/* harmony import */ var gloop_assets_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gloop/assets/loader */ \"./node_modules/gloop/assets/loader.ts\");\n\n\n\n\n\n\n\n\n\n\n(new _src_browser__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"]()).onReady(function () {\n    var camera = new zizo_camera__WEBPACK_IMPORTED_MODULE_5__[\"Camera\"](new zizo_coordinates__WEBPACK_IMPORTED_MODULE_6__[\"Coordinates\"](_src_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].tileTopW, _src_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].isoDecalX, _src_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].isoDecalY, 6.5, 6.5, _src_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].canvasMX, _src_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].canvasMY)), renderer = new gloop_renderer__WEBPACK_IMPORTED_MODULE_3__[\"Renderer\"](new gloop_canvas__WEBPACK_IMPORTED_MODULE_2__[\"Canvas\"](document.querySelector(\"#board\")), new gloop_canvas__WEBPACK_IMPORTED_MODULE_2__[\"Canvas\"](document.querySelector('#buffer'))), loop = new gloop_loop__WEBPACK_IMPORTED_MODULE_4__[\"Loop\"](30, renderer), engine = new zizo_isometric__WEBPACK_IMPORTED_MODULE_8__[\"Isometric\"](renderer, loop.displayUpdater, loop.dataUpdater, camera), assets = new gloop_assets_loader__WEBPACK_IMPORTED_MODULE_9__[\"Loader\"](\"../assets\");\n    fetch(new Request('../assets/assets.json')).then(function (res) {\n        res.json().then(function (data) {\n            var err = assets.load(data, function (asset) {\n                console.log(\"Just loaded \" + asset.name);\n            });\n            if (err != null) {\n                console.log(err.error());\n            }\n        });\n    });\n    console.log(new zizo_coordinates__WEBPACK_IMPORTED_MODULE_6__[\"Coordinates\"](64, 32, 16, 0, 0, 0, 0).fromTileCoordinates(3, 0));\n    var map = new zizo_map__WEBPACK_IMPORTED_MODULE_7__[\"Map\"]([\n        ['0_0', '0_0', '0_1', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1'],\n        ['0_1', '0_1', '0_0', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0'],\n        ['0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1'],\n        ['0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0'],\n        ['0_0', '0_1', '0_0', null, null, null, '0_0', '0_1', '0_0', '0_1'],\n        ['0_1', '0_0', '0_1', null, null, null, '0_1', '0_0', '0_1', '0_0'],\n        ['0_0', '0_1', '0_0', null, null, null, '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1'],\n        ['0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0'],\n        ['0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1'],\n        ['0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0'],\n        ['0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1'],\n        ['0_1', '0_0', '0_1', null, null, null, '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0'],\n        ['0_0', '0_1', '0_0', null, null, null, '0_0', '0_1', '0_0', '0_1'],\n        ['0_1', '0_0', '0_1', null, null, null, '0_1', '0_0', '0_1', '0_0'],\n        ['0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1'],\n        ['0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0'],\n        ['0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1'],\n        ['0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0']\n    ], assets);\n    engine.setMap(map);\n    engine.start();\n    assets.onLoaded(function () { return map.loadMap(); });\n    loop.setMode(\"PLAY\");\n    loop.addStartingConditions([\n        assets.hasFinishedLoading.bind(assets)\n    ]);\n    loop.start();\n    engine.objectUpdater.add(\"PLAY\", function (T, objects) {\n        objects.add(assets.get(\"building1\"), 1, 3);\n        objects.add(assets.get(\"building1\"), 3, 8);\n        objects.add(assets.get(\"building1\"), 6, 2);\n        objects.add(assets.get(\"building1\"), 14, 7);\n        objects.add(assets.get(\"building1\"), 9, 14);\n        objects.add(assets.get(\"building1\"), 10, 10);\n        objects.add(assets.get(\"rebot-sprite\"), 0, 0);\n    }, \"buildings\");\n    loop.displayUpdater.add(\"PLAY\", function () {\n        var arrowSize = 8;\n        renderer.drawLine(400, (_src_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].canvasH / 2) - (arrowSize / 2), 400, (_src_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].canvasH / 2) + (arrowSize / 2));\n        renderer.drawLine((_src_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].canvasW / 2) - (arrowSize / 2), 300, (_src_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].canvasW / 2) + (arrowSize / 2), 300);\n    }, \"camera\");\n    var cameraTileMove = 0.25;\n    var buildings = {}, anims = {};\n    var pressFunc = {\n        \"z\": function () {\n            camera.addY(-cameraTileMove);\n        },\n        \"s\": function () {\n            camera.addY(cameraTileMove);\n        },\n        \"q\": function () {\n            camera.addX(-cameraTileMove);\n        },\n        \"d\": function () {\n            camera.addX(cameraTileMove);\n        },\n        \"w\": function () {\n            camera.addY(-cameraTileMove);\n        },\n        \"a\": function () {\n            camera.addX(-cameraTileMove);\n        },\n        \" \": function () {\n            var label = \"building-\" + (camera.coord.icX << 0) + (camera.coord.icY << 0);\n            if (!buildings.hasOwnProperty(label)) {\n                buildings[label] = {\n                    x: camera.coord.icX,\n                    y: camera.coord.icY,\n                    rv: 0\n                };\n            }\n            else {\n                buildings[label].rv = -1;\n            }\n            engine.objectUpdater.add(\"PLAY\", function (T, objects) {\n                objects.add(assets.get(\"building1\"), buildings[label].x << 0, buildings[label].y << 0, 10);\n                var rv = buildings[label].rv;\n                if (rv == -1) {\n                    delete buildings[label];\n                }\n                return rv;\n            }, label);\n        },\n        \"c\": function () {\n            var clabel = \"rebot-\" + (camera.coord.icX << 0) + (camera.coord.icY << 0);\n            if (!anims.hasOwnProperty(clabel)) {\n                var e = assets.copy(\"rebot-sprite\"), c = new zizo_coordinates__WEBPACK_IMPORTED_MODULE_6__[\"Coordinates\"](_src_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].tileTopW, _src_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].isoDecalX, _src_config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].isoDecalY, 0, 0, 0, 0);\n                // c.computeCenter()\n                var cc = c.fromTileCoordinates(camera.coord.icX - (camera.coord.icX << 0), camera.coord.icX - (camera.coord.icX << 0));\n                e.sprite.dx = cc.x;\n                e.sprite.dy = cc.y - 32;\n                anims[clabel] = {\n                    entity: e,\n                    x: camera.coord.icX,\n                    y: camera.coord.icY,\n                    rv: 0\n                };\n            }\n            else {\n                anims[clabel].rv = -1;\n            }\n            engine.objectUpdater.add(\"PLAY\", function (T, objects) {\n                objects.add(anims[clabel].entity, anims[clabel].x << 0, anims[clabel].y << 0);\n                var rv = anims[clabel].rv;\n                if (rv == -1) {\n                    delete anims[clabel];\n                }\n                return rv;\n            }, clabel);\n            // objects.add(assets.get(\"rebot-sprite\"), buildings[label].x << 0, buildings[label].y << 0);\n        }\n    };\n    document.addEventListener(\"keydown\", function (e) {\n        if (pressFunc.hasOwnProperty(e.key)) {\n            pressFunc[e.key]();\n        }\n    });\n});\n\n\n//# sourceURL=webpack:///./demo/test-2.ts?");

/***/ }),

/***/ "./node_modules/gloop/assets/frame.ts":
/*!********************************************!*\
  !*** ./node_modules/gloop/assets/frame.ts ***!
  \********************************************/
/*! exports provided: Frame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Frame\", function() { return Frame; });\nvar Frame = /** @class */ (function () {\n    function Frame(frameData, duration) {\n        this.duration = duration;\n        this.stackedTime = 0;\n        this.sx = frameData.x;\n        this.sy = frameData.y;\n        this.w = frameData.w;\n        this.h = frameData.h;\n    }\n    Frame.prototype.render = function (renderer, x, y, sprite, T) {\n        this.stackedTime += T;\n        renderer.drawImage(sprite.getAsset(), x + sprite.getDecalX(), y + sprite.getDecalY(), this.w, this.h, this.sx, this.sy);\n    };\n    Frame.prototype.reset = function () {\n        this.stackedTime = 0;\n    };\n    return Frame;\n}());\n\n\n\n//# sourceURL=webpack:///./node_modules/gloop/assets/frame.ts?");

/***/ }),

/***/ "./node_modules/gloop/assets/frameset.ts":
/*!***********************************************!*\
  !*** ./node_modules/gloop/assets/frameset.ts ***!
  \***********************************************/
/*! exports provided: Frameset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Frameset\", function() { return Frameset; });\n/* harmony import */ var _frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frame */ \"./node_modules/gloop/assets/frame.ts\");\n\nvar Frameset = /** @class */ (function () {\n    function Frameset(name, sprite) {\n        this.name = name;\n        this.sprite = sprite;\n        this.frames = [];\n        this.fit = 0;\n    }\n    Frameset.prototype.render = function (renderer, x, y, T) {\n        this.setCurrentFrame();\n        this.currentFrame.render(renderer, x, y, this.sprite, T);\n        this.iterateFrame();\n    };\n    Frameset.prototype.parseFrames = function (framesData) {\n        for (var i = 0; i < framesData.length; i++) {\n            this.frames.push(new _frame__WEBPACK_IMPORTED_MODULE_0__[\"Frame\"](framesData[i].frame, framesData[i].duration));\n        }\n        this.currentFrame = this.frames[0];\n    };\n    Frameset.prototype.setCurrentFrame = function () {\n        if (this.fit >= this.frames.length) {\n            this.fit = 0;\n        }\n        this.currentFrame = this.frames[this.fit];\n    };\n    Frameset.prototype.shouldIterateFrame = function () {\n        return this.currentFrame.stackedTime >= this.currentFrame.duration;\n    };\n    Frameset.prototype.iterateFrame = function () {\n        if (!this.shouldIterateFrame()) {\n            return;\n        }\n        this.currentFrame.reset();\n        this.fit++;\n    };\n    Frameset.prototype.getAsset = function () {\n        return this.sprite.getAsset();\n    };\n    Frameset.prototype.copy = function () {\n        var f = new Frameset(this.name, this.sprite.copy());\n        f.frames = this.frames;\n        f.fit = 0;\n        f.setCurrentFrame();\n        return f;\n    };\n    return Frameset;\n}());\n\n\n\n//# sourceURL=webpack:///./node_modules/gloop/assets/frameset.ts?");

/***/ }),

/***/ "./node_modules/gloop/assets/img.ts":
/*!******************************************!*\
  !*** ./node_modules/gloop/assets/img.ts ***!
  \******************************************/
/*! exports provided: Img */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Img\", function() { return Img; });\n/* harmony import */ var _xy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../xy */ \"./node_modules/gloop/xy.ts\");\n\nvar Img = /** @class */ (function () {\n    function Img(name, data) {\n        this.name = name;\n        if (data.src === undefined) {\n            console.error(\"An Image requires a source\");\n        }\n        if (data.dx === undefined) {\n            data.dx = 0;\n        }\n        if (data.dy === undefined) {\n            data.dy = 0;\n        }\n        if (data.w === undefined) {\n            data.w = 64;\n        }\n        if (data.h === undefined) {\n            data.h = 64;\n        }\n        this.dx = data.dx;\n        this.dy = data.dy;\n        this.w = data.w;\n        this.h = data.h;\n        this.src = data.src;\n    }\n    Img.prototype.getDecalX = function () {\n        return this.dx;\n    };\n    Img.prototype.getDecalY = function () {\n        return this.dy;\n    };\n    Img.prototype.getDecal = function () {\n        return new _xy__WEBPACK_IMPORTED_MODULE_0__[\"XY\"](this.getDecalX(), this.getDecalY());\n    };\n    Img.prototype.getAsset = function () {\n        return this.asset;\n    };\n    Img.prototype.copy = function () {\n        var a = new Img(this.name, {\n            src: this.src,\n            dx: this.dx,\n            dy: this.dy,\n            w: this.w,\n            h: this.h\n        });\n        a.asset = this.asset;\n        return a;\n    };\n    Img.prototype.render = function (renderer, x, y, T) {\n        renderer.drawImage(this.getAsset(), x + this.getDecalX(), y + this.getDecalY(), this.w, this.h);\n    };\n    Img.prototype.loadWithCallback = function (cb) {\n        this.asset = new Image();\n        this.asset.src = this.src;\n        this.asset.crossOrigin = \"Anonymous\";\n        this.asset.onload = cb;\n    };\n    return Img;\n}());\n\n\n\n//# sourceURL=webpack:///./node_modules/gloop/assets/img.ts?");

/***/ }),

/***/ "./node_modules/gloop/assets/loader.ts":
/*!*********************************************!*\
  !*** ./node_modules/gloop/assets/loader.ts ***!
  \*********************************************/
/*! exports provided: Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Loader\", function() { return Loader; });\n/* harmony import */ var _img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img */ \"./node_modules/gloop/assets/img.ts\");\n/* harmony import */ var _frameset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frameset */ \"./node_modules/gloop/assets/frameset.ts\");\n/* harmony import */ var _errors_couldNotLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errors/couldNotLoad */ \"./node_modules/gloop/errors/couldNotLoad.ts\");\n\n\n\nvar Loader = /** @class */ (function () {\n    function Loader(basePath) {\n        this.basePath = basePath;\n        this.assets = {};\n        this.stillLoadingIt = 0;\n        this.loadedCb = [];\n        /**\n         * @param string name\n         * @param object data\n         * @param function cb\n         *\n         * loadImage starts the asynchronous loading of a single image\n         */\n        this.loadImage = function (name, data, cb) {\n            var _this = this;\n            this.assets[name] = new _img__WEBPACK_IMPORTED_MODULE_0__[\"Img\"](name, data);\n            this.assetLoadingIt++;\n            this.assets[name].loadWithCallback(function () {\n                if (cb !== undefined) {\n                    cb(_this.assets[name]);\n                }\n                _this.assetLoadingIt--;\n                if (_this.hasFinishedLoading) {\n                    _this.triggerOnLoaded();\n                }\n            });\n        };\n    }\n    Loader.prototype.loadFrameset = function (name, data, frameset, cb) {\n        var _this = this;\n        this.loadImage(name, data, function (img) {\n            var fs = new _frameset__WEBPACK_IMPORTED_MODULE_1__[\"Frameset\"](name, img.copy());\n            fs.parseFrames(frameset);\n            _this.assets[name] = fs;\n            cb(fs);\n        });\n    };\n    /**\n     * @param Object assetObject\n     * @param function cb\n     * @return CouldNotLoad|null\n     *\n     * loadImages loads an Object of images using the form:\n     * {\"asset_name\": \"path_to_asset\"}\n     */\n    Loader.prototype.load = function (assetObject, cb) {\n        if (assetObject.constructor !== {}.constructor) {\n            return new _errors_couldNotLoad__WEBPACK_IMPORTED_MODULE_2__[\"CouldNotLoad\"](\"Assets.loadImages: assetObject is not an Object\");\n        }\n        for (var k in assetObject) {\n            if (!assetObject.hasOwnProperty(k)) {\n                continue;\n            }\n            switch (assetObject[k].type) {\n                case 'image':\n                    this.loadImage(k, assetObject[k].data, cb);\n                    break;\n                case 'frameset':\n                    this.loadFrameset(k, assetObject[k].data, assetObject[k].frames, cb);\n                    break;\n                default:\n                    console.log(\"Dunno how to load this Mista\");\n            }\n        }\n        return null;\n    };\n    /**\n     * @returns {boolean}\n     *\n     * hasFinishLoading returns the state of the assets loading\n     */\n    Loader.prototype.hasFinishedLoading = function () {\n        return this.stillLoadingIt === 0;\n    };\n    /**\n     * @returns Asset\n     */\n    Loader.prototype.get = function (name) {\n        if (this.assets[name] == undefined) {\n            return null;\n        }\n        return this.assets[name];\n    };\n    Loader.prototype.copy = function (name) {\n        var a = this.get(name);\n        if (a == null) {\n            return;\n        }\n        return a.copy();\n    };\n    Loader.prototype.onLoaded = function (cb) {\n        this.loadedCb.push(cb);\n    };\n    Loader.prototype.triggerOnLoaded = function () {\n        for (var i = 0; i < this.loadedCb.length; i++) {\n            this.loadedCb[i](this.assets);\n        }\n        this.loadedCb = [];\n    };\n    return Loader;\n}());\n\n\n\n//# sourceURL=webpack:///./node_modules/gloop/assets/loader.ts?");

/***/ }),

/***/ "./node_modules/gloop/canvas.ts":
/*!**************************************!*\
  !*** ./node_modules/gloop/canvas.ts ***!
  \**************************************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return Canvas; });\nvar Canvas = /** @class */ (function () {\n    function Canvas(canvas) {\n        this.canvas = canvas;\n        this.c = this.canvas.getContext(\"2d\");\n    }\n    Canvas.prototype.drawLine = function (fX, fY, tX, tY) {\n        this.c.moveTo(fX, fY);\n        this.c.lineTo(tX, tY);\n        this.c.stroke();\n    };\n    Canvas.prototype.drawImage = function (img, x, y, w, h, sx, sy) {\n        if (!x)\n            x = 0;\n        if (!y)\n            y = 0;\n        if (!w)\n            w = this.width();\n        if (!h)\n            h = this.height();\n        if (!sx)\n            sx = 0;\n        if (!sy)\n            sy = 0;\n        this.c.drawImage(img, sx, sy, w, h, x, y, w, h);\n    };\n    Canvas.prototype.width = function () {\n        return this.canvas.width;\n    };\n    Canvas.prototype.height = function () {\n        return this.canvas.height;\n    };\n    //  Draw ImageData element onto canvas\n    Canvas.prototype.drawImageData = function (imgData, x, y, w, h, dx, dy) {\n        this.c.putImageData(imgData, x, y, dx, dy, w, h);\n    };\n    Canvas.prototype.clear = function () {\n        this.c.clearRect(0, 0, this.width(), this.height());\n    };\n    // snapshot captures the canvas and returns its ImageData equivalent\n    Canvas.prototype.snapshot = function () {\n        return this.c.getImageData(0, 0, this.width(), this.height());\n    };\n    return Canvas;\n}());\n\n\n\n//# sourceURL=webpack:///./node_modules/gloop/canvas.ts?");

/***/ }),

/***/ "./node_modules/gloop/errors/couldNotLoad.ts":
/*!***************************************************!*\
  !*** ./node_modules/gloop/errors/couldNotLoad.ts ***!
  \***************************************************/
/*! exports provided: CouldNotLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CouldNotLoad\", function() { return CouldNotLoad; });\nvar CouldNotLoad = /** @class */ (function () {\n    function CouldNotLoad(msg) {\n        this.msg = msg;\n    }\n    CouldNotLoad.prototype.error = function () {\n        return \"Could not Load: \" + this.msg;\n    };\n    return CouldNotLoad;\n}());\n\n\n\n//# sourceURL=webpack:///./node_modules/gloop/errors/couldNotLoad.ts?");

/***/ }),

/***/ "./node_modules/gloop/loop.ts":
/*!************************************!*\
  !*** ./node_modules/gloop/loop.ts ***!
  \************************************/
/*! exports provided: Loop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Loop\", function() { return Loop; });\n/* harmony import */ var _updater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updater */ \"./node_modules/gloop/updater.ts\");\n\nvar Loop = /** @class */ (function () {\n    function Loop(fps, renderer) {\n        this.renderer = renderer;\n        this.startingConditions = [];\n        this.pT = 0;\n        this.setFrequencies(fps);\n        this.dataUpdater = new _updater__WEBPACK_IMPORTED_MODULE_0__[\"Updater\"](\"data\");\n        this.displayUpdater = new _updater__WEBPACK_IMPORTED_MODULE_0__[\"Updater\"](\"display\");\n    }\n    /**\n     * setFrequencies sets fps, iF & miF\n     * (iF = 1 / FPS, time between too frames)\n     * (miF = iF * 1000, time between frames in milliseconds)\n     */\n    Loop.prototype.setFrequencies = function (fps) {\n        this.fps = fps;\n        this.iF = 1 / fps;\n        this.miF = 1000 * this.iF;\n        console.info(\"setFrequencies(\" + fps + \") = {\", \"\\n\\tfps:\", fps, \"\\n\\tiF:\", this.iF, \"\\n\\tmiF:\", this.miF, \"\\n}\");\n    };\n    // setMode changes loop mode\n    Loop.prototype.setMode = function (mode) {\n        console.info(\"Setting mode from\", this.mode, \"to\", mode);\n        this.mode = mode;\n    };\n    // pause cancels data & display loops\n    Loop.prototype.pause = function () {\n        console.info(\"paused\");\n        clearTimeout(this.cbSeed);\n        clearTimeout(this.dSeed);\n    };\n    // start triggers data & display update loops\n    Loop.prototype.start = function () {\n        var _this = this;\n        if (!this.canStart()) {\n            this.renderer.scene.c.fillText(\"Loading...\", 360, 295);\n            setTimeout(this.start.bind(this), this.miF);\n            return;\n        }\n        console.info(\"started\");\n        setTimeout(function () { return _this.dataLoop(0); }, 30);\n        setTimeout(function () { return _this.displayLoop(0); }, 45);\n    };\n    // canStart checks if every startingConditions are met\n    Loop.prototype.canStart = function () {\n        for (var i = 0; i < this.startingConditions.length; i++) {\n            if (this.startingConditions[i]() === false) {\n                return false;\n            }\n        }\n        return true;\n    };\n    // addStartingConditions adds bulk starting conditions (array of func)\n    Loop.prototype.addStartingConditions = function (conditions) {\n        this.startingConditions = conditions;\n    };\n    // dataLoop is an iteration of the data loop, it calls itself perpetually through setTimeout\n    Loop.prototype.dataLoop = function (T) {\n        var _this = this;\n        var nT = window.performance.now();\n        this.dataUpdater.update(this.mode, T);\n        this.cbSeed = setTimeout(function () { return _this.dataLoop(_this.miF); }, T - (window.performance.now() - nT));\n    };\n    // displayLoop is an iteration of the display loop, it calls itself perpetually through setTimeout\n    Loop.prototype.displayLoop = function (T) {\n        var _this = this;\n        var nT = window.performance.now(), updStatus = 0;\n        updStatus = this.displayUpdater.update(this.mode, T, this.renderer);\n        if (updStatus > 0) {\n            this.renderer.render();\n        }\n        this.dSeed = setTimeout(function () { return _this.displayLoop(_this.miF); }, T - (window.performance.now() - nT));\n    };\n    return Loop;\n}());\n\n\n\n//# sourceURL=webpack:///./node_modules/gloop/loop.ts?");

/***/ }),

/***/ "./node_modules/gloop/renderer.ts":
/*!****************************************!*\
  !*** ./node_modules/gloop/renderer.ts ***!
  \****************************************/
/*! exports provided: Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Renderer\", function() { return Renderer; });\nvar Renderer = /** @class */ (function () {\n    function Renderer(scene, buffer) {\n        this.scene = scene;\n        this.buffer = buffer;\n    }\n    // Draw a line onto engine's canvas\n    Renderer.prototype.drawLine = function (fX, fY, tX, tY) {\n        this.buffer.drawLine(fX, fY, tX, tY);\n    };\n    // Draw Image element onto engine's canvas\n    Renderer.prototype.drawImage = function (image, x, y, w, h, sx, sy) {\n        this.buffer.drawImage(image, x, y, w, h, sx, sy);\n    };\n    Renderer.prototype.render = function () {\n        // this.scene.clear();\n        var imgData = this.buffer.c.getImageData(0, 0, this.buffer.width(), this.buffer.height());\n        this.scene.drawImageData(imgData, 0, 0, this.scene.width(), this.scene.height(), 0, 0);\n        this.buffer.clear();\n    };\n    Renderer.prototype.drawImageData = function (imgData, x, y, w, h, dx, dy) {\n        this.buffer.drawImageData(imgData, x, y, w, h, dx, dy);\n    };\n    return Renderer;\n}());\n\n\n\n//# sourceURL=webpack:///./node_modules/gloop/renderer.ts?");

/***/ }),

/***/ "./node_modules/gloop/updater.ts":
/*!***************************************!*\
  !*** ./node_modules/gloop/updater.ts ***!
  \***************************************/
/*! exports provided: Updater */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Updater\", function() { return Updater; });\nvar Updater = /** @class */ (function () {\n    function Updater(name) {\n        this.name = name;\n        this.nodes = {};\n        this.defaultNameCounter = 0;\n        this.name = name;\n    }\n    // update runs through the update nodes and call them passing\n    // an amount of ms and an entity to the callback\n    Updater.prototype.update = function (mode, T, entity) {\n        if (!this.nodes.hasOwnProperty(mode)) {\n            return;\n        }\n        var n = this.nodes[mode], updIt = 0, updSt = 0;\n        for (var i in n) {\n            updSt = n[i](T, entity);\n            if (updSt === undefined) {\n                updSt = 1;\n            }\n            if (updSt == -1) {\n                delete n[i];\n                continue;\n            }\n            updIt += updSt;\n        }\n        return updIt;\n    };\n    // add adds a callback to the update list after checking if one already exist\n    // for a given mode and maybe a name\n    Updater.prototype.add = function (mode, cb, name) {\n        if (!name) {\n            name = this.defaultNameCounter.toString();\n            this.defaultNameCounter++;\n        }\n        if (!this.nodes.hasOwnProperty(mode)) {\n            this.nodes[mode] = {};\n        }\n        if (this.nodes[mode].hasOwnProperty(name)) {\n            return \"Could not add element to the updater list, name already exists\";\n        }\n        this.nodes[mode][name] = cb;\n        return null;\n    };\n    // remove removes an updater from the list using\n    // a mode and name\n    Updater.prototype.remove = function (mode, name) {\n        if (!this.nodes.hasOwnProperty(mode)) {\n            return \"Could not remove element, mode \" + mode + \" does not exist\";\n        }\n        if (!this.nodes[mode].hasOwnProperty(name)) {\n            return \"Could not remove element, name \" + name + \" does not exist\";\n        }\n        delete this.nodes[mode][name];\n        return null;\n    };\n    return Updater;\n}());\n\n\n\n//# sourceURL=webpack:///./node_modules/gloop/updater.ts?");

/***/ }),

/***/ "./node_modules/gloop/xy.ts":
/*!**********************************!*\
  !*** ./node_modules/gloop/xy.ts ***!
  \**********************************/
/*! exports provided: XY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"XY\", function() { return XY; });\nvar XY = /** @class */ (function () {\n    function XY(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    return XY;\n}());\n\n\n\n//# sourceURL=webpack:///./node_modules/gloop/xy.ts?");

/***/ }),

/***/ "./node_modules/zizo/camera.ts":
/*!*************************************!*\
  !*** ./node_modules/zizo/camera.ts ***!
  \*************************************/
/*! exports provided: Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Camera\", function() { return Camera; });\nvar Camera = /** @class */ (function () {\n    function Camera(coord) {\n        this.coord = coord;\n        this.coord.computeCenter();\n    }\n    Camera.prototype.setX = function (x) {\n        this.set(x, this.coord.icY);\n    };\n    Camera.prototype.setY = function (y) {\n        this.set(this.coord.icX, y);\n    };\n    Camera.prototype.set = function (x, y) {\n        this.coord.icX = x;\n        this.coord.icY = y;\n        this.coord.computeCenter();\n    };\n    Camera.prototype.addX = function (x) {\n        this.add(x, 0);\n    };\n    Camera.prototype.addY = function (y) {\n        this.add(0, y);\n    };\n    Camera.prototype.add = function (x, y) {\n        this.coord.icX += x;\n        this.coord.icY += y;\n        this.coord.computeCenter();\n    };\n    Camera.prototype.getCoordinates = function () {\n        return this.coord;\n    };\n    return Camera;\n}());\n\n\n\n//# sourceURL=webpack:///./node_modules/zizo/camera.ts?");

/***/ }),

/***/ "./node_modules/zizo/coordinates.ts":
/*!******************************************!*\
  !*** ./node_modules/zizo/coordinates.ts ***!
  \******************************************/
/*! exports provided: Coordinates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Coordinates\", function() { return Coordinates; });\n/* harmony import */ var gloop_xy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gloop/xy */ \"./node_modules/zizo/node_modules/gloop/xy.ts\");\n\n/**\n * Coordinates is used to convert isometric's {x:y} coordinates\n * into Canvas' {x:y} coordinates.\n * Can add Camera coordinates in the conversion.\n *\n * {icX:icY} describes which {x:y} isometric coordinates the Camera looks at.\n *\n * {ccX:ccY} describes where the Camera looks at (most likely the center) will be drawn on the canvas.\n *\n * @param {int} icX isometric X coordinates of the Camera\n * @param {int} icY isometric Y coordinates of the Camera\n * @param {int} ccX canvas X coordinates where the Camera looks at will be drawn\n * @param {int} ccY canvas Y coordinates where the Camera looks at will be drawn\n */\nvar Coordinates = /** @class */ (function () {\n    function Coordinates(tileW, decalX, decalY, icX, icY, ccX, ccY) {\n        this.tileW = tileW;\n        this.decalX = decalX;\n        this.decalY = decalY;\n        this.start = new gloop_xy__WEBPACK_IMPORTED_MODULE_0__[\"XY\"](0, 0);\n        this.icX = 0;\n        this.icY = 0;\n        this.ccX = 0;\n        this.ccY = 0;\n        if (icX != undefined) {\n            this.icX = icX;\n        }\n        if (icY != undefined) {\n            this.icY = icY;\n        }\n        if (ccX != undefined) {\n            this.ccX = ccX;\n        }\n        if (ccY != undefined) {\n            this.ccY = ccY;\n        }\n        if (decalX != undefined) {\n            this.decalX = decalX;\n        }\n    }\n    /**\n     * computeCenter computes icX & icY with ccX & ccY to determine\n     * where the graphic engine will start drawing the isometric grid.\n     *\n     * @return {this}\n     */\n    Coordinates.prototype.computeCenter = function () {\n        this.start.x = this.icX && this.icY ? this.ccX - this.decalX + ((this.icY - this.icX) * this.decalX) : this.ccX;\n        this.start.y = this.icX && this.icY ? this.ccY - ((this.icX + this.icY) * this.decalY) : this.ccY;\n        return this;\n    };\n    Coordinates.prototype.getStart = function () {\n        return this.start;\n    };\n    /**\n     * fromTileCoordinates computes and returns the canvas {x:y} coordinates\n     * of an isometric tile, from its isometric {x:y} coordinates.\n     *\n     * @param {int} x\n     * @param {int} y\n     * @returns {XY}\n     */\n    Coordinates.prototype.fromTileCoordinates = function (x, y) {\n        return new gloop_xy__WEBPACK_IMPORTED_MODULE_0__[\"XY\"](this.start.x + (x * this.tileW) - ((x + y) * this.decalX), this.start.y + ((x + y) * this.decalY));\n    };\n    return Coordinates;\n}());\n\n\n\n//# sourceURL=webpack:///./node_modules/zizo/coordinates.ts?");

/***/ }),

/***/ "./node_modules/zizo/isometric.ts":
/*!****************************************!*\
  !*** ./node_modules/zizo/isometric.ts ***!
  \****************************************/
/*! exports provided: Isometric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Isometric\", function() { return Isometric; });\n/* harmony import */ var gloop_updater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gloop/updater */ \"./node_modules/zizo/node_modules/gloop/updater.ts\");\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects */ \"./node_modules/zizo/objects.ts\");\n\n\nvar Isometric = /** @class */ (function () {\n    /**\n     * Isometric is the main engine managing the isometric rendering of elements.\n     * Must be used instead of the canvas Renderer directly\n     *\n     * @param {Renderer} renderer\n     * @param {Updater} displayUpdater\n     * @param {Updater} dataUpdater\n     * @param {Camera} camera\n     * @param {config} config\n     */\n    function Isometric(renderer, displayUpdater, dataUpdater, camera) {\n        this.renderer = renderer;\n        this.displayUpdater = displayUpdater;\n        this.dataUpdater = dataUpdater;\n        this.camera = camera;\n        this.map = [];\n        this.objectUpdater = new gloop_updater__WEBPACK_IMPORTED_MODULE_0__[\"Updater\"](\"iso\");\n        this.objects = new _objects__WEBPACK_IMPORTED_MODULE_1__[\"Objects\"]();\n    }\n    /**\n     * start must be run after Isometric engine's declaration in order\n     * to work.\n     */\n    Isometric.prototype.start = function () {\n        this.displayUpdater.add(\"PLAY\", this.renderMap.bind(this), \"isometricEngineMapDisplay\");\n        this.dataUpdater.add(\"PLAY\", this.updateObjectPositions.bind(this), \"isometricUpdateObjectPosition\");\n        this.displayUpdater.add(\"PLAY\", this.renderObjects.bind(this), \"isometricRenderObjects\");\n    };\n    Isometric.prototype.setMap = function (map) {\n        this.map = map;\n    };\n    /**\n     * renderMap is called by the displayUpdater of the Loop to renders the map.\n     * Might change to be working with the \"renderObjects\" function\n     *\n     * @return {number}\n     */\n    Isometric.prototype.renderMap = function () {\n        for (var y = 0; y < this.map.map.length; y++) {\n            for (var x = 0; x < this.map.map[y].length; x++) {\n                if (!this.map.map[y][x]) {\n                    continue;\n                }\n                this.renderObject(this.map.map[y][x], x, y);\n            }\n        }\n        return 1;\n    };\n    /**\n     * renderObjects is called by the displayUpdater of the Loop to renders various objects on the scene.\n     * Use {x:y} coordinates to place the objects and 'z' value to determinate order of display on a same\n     * {x:y} coordinates.\n     *\n     * @return {number}\n     */\n    Isometric.prototype.renderObjects = function (T) {\n        var objs = null;\n        for (var x in this.objects.objects) {\n            for (var y in this.objects.objects[x]) {\n                for (var z in this.objects.objects[x][y]) {\n                    var nx = parseInt(x);\n                    var ny = parseInt(y);\n                    var nz = parseInt(z);\n                    objs = this.objects.get(nx, ny, nz);\n                    if (!objs) {\n                        continue;\n                    }\n                    for (var i = 0; i < objs.length; i++) {\n                        this.renderObject(objs[i], nx, ny, T);\n                    }\n                }\n            }\n        }\n        return 1;\n    };\n    /**\n     * updateObjectPositions is called by the dataUpdater of the Loop.\n     * Triggers the updates contained in the objectUpdater\n     *\n     * @param {number} T amount of seconds passed from last Loop iteration\n     */\n    Isometric.prototype.updateObjectPositions = function (T) {\n        this.objects = new _objects__WEBPACK_IMPORTED_MODULE_1__[\"Objects\"]();\n        // Object entity passed in every update callbacks\n        this.objectUpdater.update(\"PLAY\", T, this.objects);\n        return 1;\n    };\n    /**\n     * drawImage draws an image on the scene using isometric {x:y} coordinates\n     *\n     * @param {Asset} asset\n     * @param {number} x\n     * @param {number} y\n     */\n    Isometric.prototype.renderObject = function (asset, x, y, T) {\n        if (asset === undefined || asset === null) {\n            return 1;\n        }\n        var coords = this.camera.getCoordinates().fromTileCoordinates(x, y);\n        asset.render(this.renderer, coords.x, coords.y, T);\n    };\n    Isometric.prototype.getObjectUpdater = function () {\n        return this.objectUpdater;\n    };\n    return Isometric;\n}());\n\n\n\n//# sourceURL=webpack:///./node_modules/zizo/isometric.ts?");

/***/ }),

/***/ "./node_modules/zizo/map.ts":
/*!**********************************!*\
  !*** ./node_modules/zizo/map.ts ***!
  \**********************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Map\", function() { return Map; });\nvar Map = /** @class */ (function () {\n    function Map(matrix, assets) {\n        this.matrix = matrix;\n        this.assets = assets;\n        this.map = [];\n    }\n    Map.prototype.loadMap = function () {\n        for (var x = 0; x < this.matrix.length; x++) {\n            this.map[x] = [];\n            for (var y = 0; y < this.matrix[x].length; y++) {\n                this.map[x][y] = this.assets.get(this.matrix[x][y]);\n            }\n        }\n    };\n    return Map;\n}());\n\n\n\n//# sourceURL=webpack:///./node_modules/zizo/map.ts?");

/***/ }),

/***/ "./node_modules/zizo/node_modules/gloop/updater.ts":
/*!*********************************************************!*\
  !*** ./node_modules/zizo/node_modules/gloop/updater.ts ***!
  \*********************************************************/
/*! exports provided: Updater */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Updater\", function() { return Updater; });\nvar Updater = /** @class */ (function () {\n    function Updater(name) {\n        this.name = name;\n        this.nodes = {};\n        this.defaultNameCounter = 0;\n        this.name = name;\n    }\n    // update runs through the update nodes and call them passing\n    // an amount of ms and an entity to the callback\n    Updater.prototype.update = function (mode, T, entity) {\n        if (!this.nodes.hasOwnProperty(mode)) {\n            return;\n        }\n        var n = this.nodes[mode], updIt = 0, updSt = 0;\n        for (var i in n) {\n            updSt = n[i](T, entity);\n            if (updSt === undefined) {\n                updSt = 1;\n            }\n            if (updSt == -1) {\n                delete n[i];\n                continue;\n            }\n            updIt += updSt;\n        }\n        return updIt;\n    };\n    // add adds a callback to the update list after checking if one already exist\n    // for a given mode and maybe a name\n    Updater.prototype.add = function (mode, cb, name) {\n        if (!name) {\n            name = this.defaultNameCounter.toString();\n            this.defaultNameCounter++;\n        }\n        if (!this.nodes.hasOwnProperty(mode)) {\n            this.nodes[mode] = {};\n        }\n        if (this.nodes[mode].hasOwnProperty(name)) {\n            return \"Could not add element to the updater list, name already exists\";\n        }\n        this.nodes[mode][name] = cb;\n        return null;\n    };\n    // remove removes an updater from the list using\n    // a mode and name\n    Updater.prototype.remove = function (mode, name) {\n        if (!this.nodes.hasOwnProperty(mode)) {\n            return \"Could not remove element, mode \" + mode + \" does not exist\";\n        }\n        if (!this.nodes[mode].hasOwnProperty(name)) {\n            return \"Could not remove element, name \" + name + \" does not exist\";\n        }\n        delete this.nodes[mode][name];\n        return null;\n    };\n    return Updater;\n}());\n\n\n\n//# sourceURL=webpack:///./node_modules/zizo/node_modules/gloop/updater.ts?");

/***/ }),

/***/ "./node_modules/zizo/node_modules/gloop/xy.ts":
/*!****************************************************!*\
  !*** ./node_modules/zizo/node_modules/gloop/xy.ts ***!
  \****************************************************/
/*! exports provided: XY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"XY\", function() { return XY; });\nvar XY = /** @class */ (function () {\n    function XY(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    return XY;\n}());\n\n\n\n//# sourceURL=webpack:///./node_modules/zizo/node_modules/gloop/xy.ts?");

/***/ }),

/***/ "./node_modules/zizo/objects.ts":
/*!**************************************!*\
  !*** ./node_modules/zizo/objects.ts ***!
  \**************************************/
/*! exports provided: Objects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Objects\", function() { return Objects; });\nvar Objects = /** @class */ (function () {\n    function Objects() {\n        this.objects = [];\n        this.zSafeThreshold = 3;\n    }\n    Objects.prototype.exists = function (x, y, z) {\n        return this.objects[x] != undefined\n            && Array.isArray(this.objects[x])\n            && this.objects[x][y] != undefined\n            && Array.isArray(this.objects[x][y])\n            && this.objects[x][y][z] != undefined;\n    };\n    Objects.prototype.get = function (x, y, z) {\n        return this.exists(x, y, z) ? this.objects[x][y][z] : null;\n    };\n    Objects.prototype.canAddObject = function (entity, x, y, z) {\n        return entity !== undefined\n            && x != undefined\n            && y != undefined\n            && z != undefined;\n    };\n    Objects.prototype.prepareObjectsArray = function (x, y) {\n        if (this.objects[x] === undefined) {\n            this.objects[x] = [];\n            this.objects[x][y] = [];\n            return;\n        }\n        if (this.objects[x][y] === undefined) {\n            this.objects[x][y] = [];\n        }\n    };\n    Objects.prototype.add = function (entity, x, y, z) {\n        if (z === undefined) {\n            z = 0;\n        }\n        z += this.zSafeThreshold;\n        if (!this.canAddObject(entity, x, y, z)) {\n            return false;\n        }\n        this.prepareObjectsArray(x, y);\n        if (this.objects[x][y][z] === undefined) {\n            this.objects[x][y][z] = [];\n        }\n        this.objects[x][y][z].push(entity);\n        return true;\n    };\n    return Objects;\n}());\n\n\n\n//# sourceURL=webpack:///./node_modules/zizo/objects.ts?");

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