var Logger = function(type, shouldDisplayLogs) {
    if (type) {
        type = type
    }

    if (!shouldDisplayLogs) {
        shouldDisplayLogs = true;
    }

    this.shouldDisplayLogs = shouldDisplayLogs;
}

Logger.prototype = {
    type: "info",
    shouldDisplayLogs: false
}

Logger.prototype.log = function(msg) {
    if (!this.shouldDisplayLogs) {
        return ;
    }
    console[this.type](msg);
}

Logger.prototype.toggleLogs = function() {
    console.log("Setting logs from", this.shouldDisplayLogs, "to", !this.shouldDisplayLogs)
    this.shouldDisplayLogs = !this.shouldDisplayLogs;
}
