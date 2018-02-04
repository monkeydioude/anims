var Frequencer = function(frequency) {
    this.frequency = frequency;
    this.theoreticalSec = 0;
    this.stackedSec = 0;
    if (frequency) {
        this.theoreticalSec = 1 / this.frequency;
    }
}

Frequencer.prototype.update = function(T) {
    if (this.theoreticalSec === 0) {
        return ;
    }
    this.stackedSec += T;
}

Frequencer.prototype.shouldUpdate = function() {
    if (this.theoreticalSec === 0) {
        return true;
    }

    if (this.stackedSec < this.theoreticalSec) {
        return false;
    }

    this.stackedSec =- this.theoreticalSec;
    return true;
}