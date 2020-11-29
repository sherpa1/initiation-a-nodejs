const { EventEmitter } = require('events');

class Subject extends EventEmitter {

    constructor() {
        super();
        this.listeners = [];
    }

    notify(event, data = {}) {
        console.log(this.listeners);
        this.emit(event, data);
        this.listeners.forEach(an_observer => {
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