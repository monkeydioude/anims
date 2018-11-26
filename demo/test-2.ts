import {config} from "../src/config"
import {Browser} from "../src/browser"
import {Canvas} from "gloop/canvas"
import {Renderer} from "gloop/renderer"
import {Loop} from "gloop/loop"
import {Camera} from "zizo/camera"
import {Coordinates} from "zizo/coordinates"
import {Map} from "zizo/map"
import {Isometric} from "zizo/isometric"
import {Loader} from "gloop/assets/loader"

(new Browser()).onReady(function() {
    var camera = new Camera(
        new Coordinates(
            config.tileTopW,
            config.isoDecalX,
            config.isoDecalY,
            6.5,
            6.5,
            config.canvasMX,
            config.canvasMY
        )),
        renderer = new Renderer(
            new Canvas(document.querySelector("#board")),
            new Canvas(document.querySelector('#buffer'))
        ),
        loop = new Loop(30, renderer),
        engine = new Isometric(
            renderer,
            loop.displayUpdater,
            loop.dataUpdater,
            camera
        ),
        assets = new Loader("../assets");
    
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
    console.log(new Coordinates(64, 32, 16, 0, 0, 0, 0).fromTileCoordinates(3, 0))

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

    assets.onLoaded(() => map.loadMap());

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
        objects.add(assets.get("rebot-sprite"), 0, 0);
    }, "buildings")

    loop.displayUpdater.add("PLAY", function() {
        var arrowSize = 8;
        renderer.drawLine(400, (config.canvasH / 2) - (arrowSize / 2), 400, (config.canvasH / 2) + (arrowSize / 2))
        renderer.drawLine((config.canvasW / 2) - (arrowSize / 2), 300, (config.canvasW / 2) + (arrowSize / 2), 300)
    }, "camera");

    var cameraTileMove = 0.25;
    var buildings: any = {},
        anims: any = {};
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
            let label = "building-" + (camera.coord.icX << 0) + (camera.coord.icY << 0);
            if (!buildings.hasOwnProperty(label)){
                buildings[label] = {
                    x: camera.coord.icX,
                    y: camera.coord.icY,
                    rv: 0
                }
            } else {
                buildings[label].rv = -1
            }

            engine.objectUpdater.add("PLAY", function(T: number, objects: any) {
                objects.add(assets.get("building1"), buildings[label].x << 0, buildings[label].y << 0, 10)
                let rv = buildings[label].rv;
                if (rv == -1) {
                    delete buildings[label];
                }
                return rv
            }, label)
        },
        "c": () => {
            let clabel = "rebot-" + (camera.coord.icX << 0) + (camera.coord.icY << 0);
            if (!anims.hasOwnProperty(clabel)){
                let e = assets.copy("rebot-sprite"),
                c = new Coordinates(
                        config.tileTopW,
                        config.isoDecalX,
                        config.isoDecalY,
                        0,
                        0,
                        0,
                        0
                    );
                    // c.computeCenter()
                
                let cc = c.fromTileCoordinates(
                    camera.coord.icX - (camera.coord.icX << 0),
                    camera.coord.icX - (camera.coord.icX << 0)
                )
                e.sprite.dx = cc.x
                e.sprite.dy = cc.y - 32
                anims[clabel] = {
                    entity: e,
                    x: camera.coord.icX,
                    y: camera.coord.icY,
                    rv : 0
                }
            } else {
                anims[clabel].rv = -1
            }
            engine.objectUpdater.add("PLAY", function(T: number, objects: any) {
                objects.add(anims[clabel].entity, anims[clabel].x << 0, anims[clabel].y << 0);
                let rv = anims[clabel].rv;
                if (rv == -1) {
                    delete anims[clabel]
                }
                return rv
            }, clabel)
                // objects.add(assets.get("rebot-sprite"), buildings[label].x << 0, buildings[label].y << 0);
        }
    }
    document.addEventListener("keydown", function(e) {
        if (pressFunc.hasOwnProperty(e.key)) {
            pressFunc[e.key]();
        }
    });
});
