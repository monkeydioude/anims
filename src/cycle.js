var Cycle = function(fps, cbAction)
{
    this.fps = fps;
    this.iF = 1 / fps;
    this.miF = this.iF * 1000;
    this.cT = 0;
    this.cbAction = cbAction;
}

Cycle.prototype.update = function(T)
{
    this.cT += T;

    while (this.cT >= this.miF) {
        this.cbAction(this.miF);
        this.cT -= this.miF;
    }
}