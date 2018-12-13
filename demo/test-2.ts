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
import {Frameset} from "gloop/assets/frameset"
import {Updater} from "gloop/updater/updater"
import {DisplayUpdater} from "gloop/updater/displayUpdater"
import {StateMachine} from "gloop/stateMachine"
import {Core} from "zizo/core"

function loadingBehavior(core: Core, state: StateMachine): void {
    core.getDataUpdater().add("LOADING", () => {
        if (core.getAssetsLoader().hasFinishedLoading() == true) {
            state.setState("PLAY")
            return -1
        }
    })
}

function playBehavior(core: Core, state: StateMachine): void {
    let camera = core.getDisplayEngine().getCamera(),
        originalBois: any[] = [],
        maxBoisPerRow = 73,
        aBois = maxBoisPerRow * 14;

    for (let i = 0; i < aBois; i++) {
        originalBois[i] = core.getAssetsLoader().copy("rebot-frameset")
    }

    core.getDisplayEngine().objectUpdater.add("PLAY", function(T: number, objects: any) {
        objects.add(core.getAssetsLoader().get("building1"), 1, 3, 10);
        objects.add(core.getAssetsLoader().get("building1"), 3, 8, 10);
        objects.add(core.getAssetsLoader().get("building1"), 6, 2, 10);
        objects.add(core.getAssetsLoader().get("building1"), 14, 7, 10);
        objects.add(core.getAssetsLoader().get("building1"), 9, 14, 10);
        objects.add(core.getAssetsLoader().get("building1"), 10, 10, 10);
        for (let j = 0; j < aBois; j++) {
            objects.add(originalBois[j], 0.5 + (1 * ((j / maxBoisPerRow) << 0)), 0 + ((j % maxBoisPerRow) * 0.25))
        }
    }, "buildings")

    core.getDisplayUpdater().add("PLAY", function() {
        var arrowSize = 8;
        core.getDisplayEngine().renderer.drawLine(400, (config.canvasH / 2) - (arrowSize / 2), 400, (config.canvasH / 2) + (arrowSize / 2))
        core.getDisplayEngine().renderer.drawLine((config.canvasW / 2) - (arrowSize / 2), 300, (config.canvasW / 2) + (arrowSize / 2), 300)
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

            core.getDisplayEngine().objectUpdater.add("PLAY", function(T: number, objects: any) {
                objects.add(core.getAssetsLoader().get("building1"), buildings[label].x << 0, buildings[label].y << 0, 10)
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
                var e = <Frameset> core.getAssetsLoader().copy("rebot-sprite"),
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
            core.getDisplayEngine().objectUpdater.add("PLAY", function(T: number, objects: any) {
                objects.add(anims[clabel].entity, anims[clabel].x, anims[clabel].y, 0);
                let rv = anims[clabel].rv;
                if (rv == -1) {
                    delete anims[clabel]
                }
                return rv
            }, clabel)
                // objects.add(core.getAssetsLoader().get("rebot-sprite"), buildings[label].x << 0, buildings[label].y << 0);
        },
        "p": (e: any) => {
            state.setState("PAUSE")
            document.removeEventListener("keydown", listener)
        }
    }
    let listener = function(e: any) {
        if (pressFunc.hasOwnProperty(e.key) && state.getState() == "PLAY") {
            pressFunc[e.key](e);
        }
    }
    document.addEventListener("keydown", listener);
}

function pauseBehavior(core: Core, state: StateMachine): void {
    core.getDisplayEngine().getRenderer().scene.c.fillStyle = "rgba(245, 124, 0, 0.5)"
    core.getDisplayEngine().getRenderer().scene.c.fillRect(0, 0, config.canvasW, config.canvasH)
    let pressFunc: any = {
        "p": function(listener: any){
            state.setState("PLAY")
            document.removeEventListener("keydown", listener)
        }
    },
    listener = (e: any) => {
        if (pressFunc.hasOwnProperty(e.key) && state.getState() == "PAUSE") {
            pressFunc[e.key](this);
        }
    };
    document.addEventListener("keydown", listener)
}

(new Browser()).onReady(function() {
    let camera = new Camera(new Coordinates(
            2.5,
            9.5,
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
        displayUpdater = new DisplayUpdater(renderer),
        dataUpdater = new Updater(),
        assets = new Loader("../assets"),
        engine = new Isometric(
            renderer,
            displayUpdater,
            dataUpdater,
            camera
            ),
        core = new Core(displayUpdater, dataUpdater, assets, engine),
        sm = new StateMachine(core),
        loop = new Loop(60, sm, displayUpdater, dataUpdater);
    
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
            ['0_1', '0_0', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_1', '0_0' ],
            ['0_0', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_1' ],
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
            ['0_1', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_0' ],
            ['0_0', '0_1', '0_1', '0_0', '0_1', '0_0', '0_1', '0_0', '0_0', '0_1' ]
        ],
        assets
    );

    core.getDisplayEngine().setMap(map);
    core.getDisplayEngine().start();

    core.getAssetsLoader().onLoaded(() => map.loadMap());
    loop.start();

    sm.addStateBehavior("LOADING", loadingBehavior)
    sm.addStateBehavior("PLAY", playBehavior)
    sm.addStateBehavior("PAUSE", pauseBehavior)

    sm.setState("LOADING");
});
