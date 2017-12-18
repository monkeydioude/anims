var Loop = function(fps) {
    if (!fps) {
        console.error("fps parameter needed");
        return ;
    }

    this.setFrequencies(fps);
    this.dataUpdater = new Updater();
    this.graphicUpdater = new Updater();
};

Loop.prototype = {
    // loop frequency
    fps: 0,
    // duration between loop iteration
    iF: 0,
    // duration between loop iteration in milliseconds
    miF: 0,
    // Timestamp of previous loop iteration (not requestAnimationFrame call)
    pT: 0,

    dT: 0,

    cbSeed: null,
    dataUpdater: null,
    graphicUpdater: null
}

Loop.prototype.pause = function() {
    console.info("paused");
    clearTimeout(this.cbSeed);
}

Loop.prototype.start = function() {
    console.info("started");
    this.process(0);    
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

    this.dataUpdater.update(T);

    this.cbSeed = setTimeout(function(){this.process(this.miF);}.bind(this), this.miF);
}
