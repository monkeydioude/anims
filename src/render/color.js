var Color = function(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    if (!a) {
        a = 1;
    }
    this.a = a;
}

Color.prototype.RGBA = function() {
    return "rgba("+this.r+", "+this.g+", "+this.b+", "+this.a+")";
}
