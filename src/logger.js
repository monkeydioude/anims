var Logger = function(type, shouldDisplayLogs) {
    if (!type) {
        type = "info"
    }

    this.type = type;

    if (!shouldDisplayLogs && shouldDisplayLogs !== false) {
        shouldDisplayLogs = true;
    }

    this.shouldDisplayLogs = shouldDisplayLogs;
}

Logger.prototype.log = function(msg) {
    if (!this.shouldDisplayLogs) {
        return ;
    }
    console[this.type](msg);
}

Logger.prototype.toggleLogs = function() {
    console[this.type]("Setting logs from", this.shouldDisplayLogs, "to", !this.shouldDisplayLogs);
    this.shouldDisplayLogs = !this.shouldDisplayLogs;
}

module.exports = Logger;