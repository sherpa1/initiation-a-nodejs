const Observer = require('./gof-desing-patterns/observer/Observer');
const SubjectEvent = require('./gof-desing-patterns/observer/SubjectEvent');
const TrafficLight = require("./TrafficLight");

class Pedestrian extends Observer {
    update(event) {

        if (event.name == "color:changed") {

            if (event.data == TrafficLight.RED.color || event.data == TrafficLight.ORANGE.color) {
                this.stop();
            } else if (event.data == TrafficLight.GREEN.color) {
                this.walk();
            }

        }

    }

    walk() {
        console.log("----------> Pedestrian walks\n");
    }

    stop() {
        console.log("----------> Pedestrian stops\n");
    }
}

module.exports = Pedestrian;