var Inquisition = function(x, y, maxX, maxY)
{
    this.x = x;
    this.y = y;
    this.maxX = maxX;
    this.maxY = maxY;
    this.updateCycle = new Cycle(10)
}

Inquisition.prototype.update = function(T)
{
    return this.updateCycle.update(T, function(T) {
        this.x++;
        this.y++;
    }.bind(this));
}
