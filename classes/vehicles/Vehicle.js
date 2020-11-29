const Movable = require("../Movable");
const TrafficLight = require("../TrafficLight");

class Vehicle extends Movable {
    update(event) {

        if (event === TrafficLight.RED || event === TrafficLight.ORANGE) {
            this.stop();
        } else if (event === TrafficLight.GREEN) {
            this.move_forward();
        }

    }

    move_forward() {
        console.log("----------> Vehicle moves forward");
    }

    stop() {
        console.log("----------> Vehicle stops");
    }
}

module.exports = Vehicle;