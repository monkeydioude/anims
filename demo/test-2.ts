var Renderer = require('gloop/renderer'),
    Canvas = require('gloop/canvas'),
    Loop = require('gloop/loop'),
    Map = require('zizo/map'),
    Assets = require('gloop/assets/assets'),
    Camera = require('zizo/camera'),
    Coord = require('zizo/coordinates'),
    Engine = require('zizo/isometric');

import { config } from "../src/config";
import { Browser } from "../src/browser";

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
        assets = new Assets("../assets");
    
    fetch(new Request('../assets/assets.json')).then(function(res) {
        res.json().then(function(data) {
            var err = assets.load(data, function(asset: any) {
                console.log("Just loaded " + asset.name);
            });
            if (err != null) {
                console.log(err.error());
            }
        });
    });

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

    assets.onLoaded(map.loadMap.bind(map));
    // map.loadMap();

    loop.setMode("PLAY");
    loop.addStartingConditions([
        assets.hasFinishedLoading.bind(assets)
    ]);
    loop.start();

    engine.objectUpdater.add("PLAY", function(T: number, objects: any) {
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
    var buildings: any = {};
    var pressFunc: any = {
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

            engine.objectUpdater.add("PLAY", function(T: number, objects: any) {
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
