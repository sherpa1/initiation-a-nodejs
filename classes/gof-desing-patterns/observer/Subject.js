const SubjectEvent = require("./SubjectEvent");

class Subject {

    constructor() {
        this.listeners = [];
    }

    notify(event, data = {}) {
        this.listeners.forEach(an_observer => {
            an_observer.update(new SubjectEvent("color:changed", this.color.color));
        });
    }

    attach(observer) {
        this.listeners.push(observer);
    }

    detach(observer) {
        this.listeners.pull(observer);
    }
}

module.exports = Subject;