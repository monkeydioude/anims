var Animer = function(prototype, frequency, duration, mode) {
    this.shouldUpdate = true;
    if (!this.isValidPrototype(prototype)) {
        console.info("Could not start Animer")
        this.shouldUpdate = false;
    }
    this.prototype = prototype;
    this.frequencer = new Frequencer(frequency);
    this.duration = new Duration(duration);
    this.mode = mode || 'PLAY';
    this.shouldDisplay = false;
}

Animer.prototype.isValidPrototype = function(prototype) {
    return prototype.hasOwnProperty('updateData') && prototype.hasOwnProperty('updateDisplay');
}

/**
 * 
 * @param int T 
 * @param Engine engine 
 * 
 * @return int
 */
Animer.prototype.updateData = function(T, engine) {
    if (!this.shouldUpdate) {
        this.shouldDisplay = false;
        return -1;
    }

    var ret = this.prototype.updateData(T, engine);

    this.shouldDisplay = ret > 0;
    return ret;
}

/**
 * 
 * @param int T
 * @param Engine engine
 * 
 * @return int
 */
Animer.prototype.updateDisplay = function(T, engine) {
    if (!this.shouldUpdate) {
        return -1;
    }

    return this.prototype.updateDisplay(T, engine);
}