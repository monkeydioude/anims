var Duration = function(duration) {
    this.duration = duration;
    this.stackedSec = 0;
}

Duration.prototype.update = function(T) {
    if (this.duration === 0) {
        return ;
    }

    this.stackedSec += T;
}

Duration.prototype.isOver = function() {
    return !(this.duration === 0 || this.stackedSec < this.duration);
}