var Cycle = function(fps)
{
    this.fps = fps;
    this.iF = 1 / fps;
    this.miF = this.iF * 1000;
    this.cT = 0;
    this.cbAction = cbAction;
}

Cycle.prototype.update = function(T, cbAction)
{
    this.cT += T;

    while (this.cT >= this.miF) {
        cbAction(this.miF);
        this.cT -= this.miF;
    }
}

module.exports = Cycle;