const Observer = require('./gof-desing-patterns/observer/Observer');
const TrafficLight = require("./TrafficLight");

class Pedestrian extends Observer {
    update(event) {

        if (event == TrafficLight.RED || event == TrafficLight.ORANGE) {
            this.stop();
        } else if (event === TrafficLight.GREEN) {
            this.walk();
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