const Movable = require("./Movable");
const TrafficLight = require("./TrafficLight");

class Pedestrian extends Movable {
    update(event) {

        if (event === TrafficLight.RED || event === TrafficLight.ORANGE) {
            this.stop();
        } else if (event === TrafficLight.GREEN) {
            this.walk();
        }

    }

    walk() {
        console.log("----------> Pedestrian walks");
    }

    stop() {
        console.log("----------> Pedestrian stops");
    }
}

module.exports = Pedestrian;