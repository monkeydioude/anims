var Engine = function(canvas) {
    this.canvas = canvas;
    this.c = this.canvas.getContext('2d');
}

Engine.prototype.RGBA = function(color) {
    return "rgba("+color.r+","+color.g+","+color.b+","+(color.a/255)+")";
}

Engine.prototype.draw = function(x, y, w, h, color) {
    this.c.fillStyle = this.RGBA(color);
    this.c.fillRect(x, y, w, h);
}