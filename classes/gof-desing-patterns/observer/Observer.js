const SubjectEvent = require("./SubjectEvent");

class Observer {
    update(event) {
        if (!event instanceof SubjectEvent) throw new Error(`event param must be an instance of "SubjectEvent", "${typeof event}" given`);
    }
}

module.exports = Observer;