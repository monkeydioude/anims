var Renderer = require('gloop/renderer'),
    Canvas = require('gloop/canvas'),
    Loop = require('gloop/loop'),
    Map = require('zizo/map'),
    Browser = require('../src/browser'),
    Assets = require('gloop/assets/assets'),
    Camera = require('zizo/camera'),
    config = require('../src/config'),
    Coord = require('zizo/coordinates'),
    Engine = require('zizo/isometric');

(new Browser()).onReady(function() {
    var camera = new Camera(
        new Coord(
            2.5,
            6.5,
            config.canvasMX,
            config.canvasMY,
            config.tileTopW,
            config.isoDecalX,
            config.isoDecalY
        )),
        renderer = new Renderer(
            new Canvas(document.querySelector("#board")),
            new Canvas(document.querySelector('#buffer'))
        ),
        loop = new Loop(15, renderer),
        engine = new Engine(
            renderer,
            loop.displayUpdater,
            loop.dataUpdater,
            camera
        ),
        assets = new Assets();
    
    var err = assets.loadImages(
        {
            "0_0": {
                src: "../assets/map/tiles/0_0.png",
                dx: 0,
                dy: 0,
                w: 64,
                h: 64
            },
            "0_1": {
                src: "../assets/map/tiles/0_1.png",
                dx: 0,
                dy: 0,
                w: 64,
                h: 64
            },
            "building1": {
                src: "../assets/building/building1.png",
                dx: 0,
                dy: -32,
                w: 64,
                h: 64
            }
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

    engine.objectUpdater.add("PLAY", function(T, objects) {
        objects.add(assets.get("building1"), 1, 3);
        objects.add(assets.get("building1"), 3, 8);
        objects.add(assets.get("building1"), 6, 2);
        objects.add(assets.get("building1"), 14, 7);
        objects.add(assets.get("building1"), 9, 14);
        objects.add(assets.get("building1"), 10, 10);
    }, "buildings")

    loop.displayUpdater.add("PLAY", function() {
        var arrowSize = 8;
        renderer.drawLine(400, (config.canvasH / 2) - (arrowSize / 2), 400, (config.canvasH / 2) + (arrowSize / 2))
        renderer.drawLine((config.canvasW / 2) - (arrowSize / 2), 300, (config.canvasW / 2) + (arrowSize / 2), 300)
    }, "camera");

    var cameraTileMove = 0.25;
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
        "w":  function(){
            camera.addY(-cameraTileMove)
        },
        "a": function(){
            camera.addX(-cameraTileMove)
        },
        " ": function() {
            var label = "building-" + camera.coord.icX + camera.coord.icY;
            if (buildings.hasOwnProperty(label)){
                return
            }
            buildings[label] = {
                x: camera.coord.icX,
                y: camera.coord.icY
            }

            engine.objectUpdater.add("PLAY", function(T, objects) {
                objects.add(assets.get("building1"), buildings[label].x << 0, buildings[label].y << 0, 10)
            }, label)
        }
    }
    document.addEventListener("keydown", function(e) {
        if (pressFunc.hasOwnProperty(e.key)) {
            pressFunc[e.key]();
        }
    });
});
