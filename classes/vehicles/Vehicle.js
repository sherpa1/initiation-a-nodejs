const Movable = require("../Movable");
const Observer = require('../gof-desing-patterns/observer/Observer');
const SubjectEvent = require('../gof-desing-patterns/observer/SubjectEvent');
const TrafficLight = require("../TrafficLight");

class Vehicle extends Movable {

    update(event) {

        if (event.name == "color:changed") {

            if (event.data == TrafficLight.RED.color || event.data == TrafficLight.ORANGE.color) {
                this.stop();
            } else if (event.data == TrafficLight.GREEN.color) {
                this.move_forward();
            }

        }

    }

    stop() {
        console.log("----------> Vehicle stops");
    }

    move_forward() {
        console.log("----------> Vehicle moves forward");
    }

    move_back() {
        console.log("----------> Vehicle moves back");
    }

    turn(direction) {
        console.log(`----------> Vehicle turns in ${direction} direction`);
    }
}

module.exports = Vehicle;