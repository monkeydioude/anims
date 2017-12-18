var Updater = function() {}

Updater.prototype = {
    // json object
    nodes: {},
    // int
    defaultNameCounter: 0
}

/**
 * 
 * @param {int} T 
 */
Updater.prototype.update = function(T) {
    for (var i in this.nodes) {
        if (this.nodes[i](T) == -1) {
            delete this.nodes[i];
        }
    }
}

/**
 * 
 * @param {function} cb
 * @param {string} name 
 * 
 * @return {null|string}
 */
Updater.prototype.add = function(cb, name) {
    if (!name) {
        name = this.defaultNameCounter;
        this.defaultNameCounter++;
    }

    if (this.nodes.hasOwnProperty(name)) {
        return "Could not add element to the updater list, name already exists";
    }

    this.nodes[name] = cb;

    return null;
}
