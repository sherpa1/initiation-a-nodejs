const Subject = require("./Subject");

class SubjectEvent {
    constructor(name, data = {}) {
        this._name = name;
        this._data = data;
    }

    get name() {
        return this._name;
    }

    get data() {
        return this._data;
    }
}

module.exports = SubjectEvent;