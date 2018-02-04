var Animer = function(prototype, frequency, duration) {
    this.prototype = prototype;
    this.frequencer = new Frequencer(frequency);
    this.duration = new Duration(duration);

    
}