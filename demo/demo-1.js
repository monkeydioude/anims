var Engine = require('../src/engine'),
    Canvas = require('../src/canvas'),
    Loop = require('../src/loop'),
    Logger = require('../src/logger'),
    Browser = require('../src/browser'),
    Stack = require('../src/render/stack'),
    Color = require('../src/render/color');

document.addEventListener("DOMContentLoaded", function() {
    var initialFPS = 30,
        engine = new Engine(document.querySelector("#board"), document.querySelector('#buffer')),
        debug = new Canvas(document.querySelector("#debug")),
        loop = new Loop(initialFPS, engine),
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
        ];


        var pixelAnim = function(T, engine) {
            if (dummyLock) {
                return  ;
            }
            if (imgDataDummy) {
                engine.drawImageData(imgDataDummy)
            }
            dummyLock = true;
            var m = [6, 6],
                sX = (Math.random() * engine.height()) << 0,
                sY = (Math.random() * engine.width()) << 0,
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

        loop.setMode("PLAY");

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
        
        err = loop.graphicUpdater.add("PLAY", pixelAnim, "pixelAnim");
        if (err != null) {
            console.error(err);
        }

    /* ======= */
    var fpsSelector = document.querySelector("[data-action='set-fps']");

    document.querySelector("[data-action='loop-start']").addEventListener("click", loop.start.bind(loop));
    document.querySelector("[data-action='loop-pause']").addEventListener("click", loop.pause.bind(loop));
    document.querySelector("[data-action='hide-logs']").addEventListener("click", logger.toggleLogs.bind(logger));
    document.querySelector("[data-action='clear-canvas']").addEventListener("click", function() {
        engine.clear();
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