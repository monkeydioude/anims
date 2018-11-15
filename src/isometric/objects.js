var Objects = function() {
    this.objects = [];
}

Objects.prototype.exists = function(x, y, z) {
    return this.objects[x] != undefined
        && Array.isArray(this.objects[x])
        && this.objects[x][y] != undefined
        && Array.isArray(this.objects[x][y])
        && this.objects[x][y][z] != undefined;
}

Objects.prototype.get = function(x, y, z) {
    return this.exists(x, y, z) ? this.objects[x][y][z] : null;
}

Objects.prototype.canAddObject = function(entity, x, y, z) {
    return entity !== undefined 
        && x != undefined 
        && y != undefined 
        && z != undefined;
}

Objects.prototype.prepareObjectsArray = function(x, y) {
    if (this.objects[x] === undefined) {
        this.objects[x] = [];
        this.objects[x][y] = [];
        return;
    }

    if (this.objects[x][y] === undefined) {
        this.objects[x][y] = [];
    }
}

Objects.prototype.add = function(entity, x, y, z) {
    if (z === undefined) {
        z = 0;
    }
    if (!this.canAddObject(entity, x, y, z)) {
        return -1;
    }

    this.prepareObjectsArray(x, y);
    this.objects[x][y][z] = entity;
}

module.exports = Objects;