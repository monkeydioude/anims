var Loop = function(fps, engine)
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
};

Loop.prototype.pause = function() {
    console.info("paused");
    clearTimeout(this.cbSeed);
}

Loop.prototype.start = function() {
    console.info("started");
    setTimeout(function(){this.process(0);}.bind(this), 0);
    setTimeout(function(){this.display();}.bind(this), 0);
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

Loop.prototype.process = function(T) {
    var nT = window.performance.now();

    this.dataUpdater.update(T);
    this.cbSeed = setTimeout(function(){this.process(this.miF);}.bind(this), T - (window.performance.now()- nT));
}

Loop.prototype.display = function() {
    this.graphicUpdater.update(this.engine);
}
