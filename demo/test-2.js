var Renderer = require('../src/canvas/renderer'),
    Canvas = require('../src/canvas/canvas'),
    Loop = require('../src/loop'),
    Map = require('../src/isometric/map'),
    Browser = require('../src/browser'),
    Assets = require('../src/assets/assets'),
    Camera = require('../src/camera'),
    config = require('../src/config'),
    Coord = require('../src/isometric/coordinates'),
    Engine = require('../src/isometric/isometric');

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
    }, "building1")

    loop.displayUpdater.add("PLAY", function() {
        renderer.drawLine(400, 0, 400, 600)
        renderer.drawLine(0, 300, 800, 300)
    }, "middle");

    var cameraTileMove = 1;
    var pressFunc = {
        "z": function(){
            camera.add(-cameraTileMove, -cameraTileMove)
        },
        "s": function(){
            camera.add(cameraTileMove, cameraTileMove)
        },
        "q": function(){
            camera.add(-cameraTileMove, cameraTileMove)
        },
        "d": function(){
            camera.add(cameraTileMove, -cameraTileMove)
        }
    }
    document.addEventListener("keydown", function(e) {
        if (pressFunc.hasOwnProperty(e.key)) {
            pressFunc[e.key]();
        }
    });
});