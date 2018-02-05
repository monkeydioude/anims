var Pixel = require('./pixel');

var Stack = function(x, y, color, m) {
    this.x = x;
    this.y = y;
    this.c = color;
    this.m = [];

    if (m) {
        this.computeMatrix(m);
    }
}

Stack.prototype.update = function() {

}

/**
 * Render entity and apply an update function, if any, to each pixel before rendering
 * @param {*} engine 
 * @param {function(Pixel)} updateLogic
 */
Stack.prototype.render = function(engine, updateLogic) {
    for (var p in this.m) {
        if (updateLogic) {
            updateLogic(this.m[p]);
        }
        this.m[p].render(engine)
    }
}

Stack.prototype.computeMatrix = function(m) {
    try {
        var x = 0,
            y = 0;

        for (var r in m) {
            x = 0;
            for (var p in m[r]) {
                if (m[r][p] === 1) {
                    this.m.push(new Pixel(this.x + x, this.y + y, this.c));
                }
                x++;
            }
            y++;
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = Stack;