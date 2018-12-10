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
import { Frameset } from "../../gloop/assets/frameset";

(new Browser()).onReady(function() {
    let camera = new Camera(new Coordinates(
            6.5,
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
    // console.log(new Coordinates(64, 32, 16, 0, 0, 0, 0).fromTileCoordinates(3, 0))

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

    let originalBois = [
        assets.copy("rebot-sprite"),
        assets.copy("rebot-sprite"),
        assets.copy("rebot-sprite"),
        assets.copy("rebot-sprite"),
        assets.copy("rebot-sprite"),
        assets.copy("rebot-sprite"),
        assets.copy("rebot-sprite"),
        assets.copy("rebot-sprite"),
        assets.copy("rebot-sprite"),
    ];        
    engine.objectUpdater.add("PLAY", function(T: number, objects: any) {
        objects.add(assets.get("building1"), 1, 3, 10);
        objects.add(assets.get("building1"), 3, 8, 10);
        objects.add(assets.get("building1"), 6, 2, 10);
        objects.add(assets.get("building1"), 14, 7, 10);
        objects.add(assets.get("building1"), 9, 14, 10);
        objects.add(assets.get("building1"), 10, 10, 10);
        objects.add(originalBois[0], 2, 7)
        // objects.add(originalBois[1], 6.5, 6.5)
        // objects.add(originalBois[2], 6.5, 6.75)
        // objects.add(originalBois[3], 6.5, 7)
        // objects.add(originalBois[4], 6.5, 7.25)
        // objects.add(originalBois[5], 6.5, 7.5)
        // objects.add(originalBois[6], 6.5, 7.75)
        // objects.add(originalBois[7], 6.5, 8)
        // objects.add(originalBois[8], 6.5, 8.25)
        // objects.add(originalBois[9], 6.5, 8.5)
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
        "e": function() {
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
            let clabel = "rebot-" + (camera.coord.icX) + (camera.coord.icY);
            if (!anims.hasOwnProperty(clabel)){
                var e = <Frameset> assets.copy("rebot-sprite"),
                c = new Coordinates(
                        0,
                        0,
                        0,
                        0,
                        config.tileTopW,
                        config.isoDecalX,
                        config.isoDecalY
                    );
                
                e.sprite.addDecalY(-config.isoDecalY)
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
                objects.add(anims[clabel].entity, anims[clabel].x, anims[clabel].y, 0);
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
