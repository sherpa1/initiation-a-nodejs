const { EventEmitter } = require("events");

class TrafficLight extends EventEmitter {
    static GREEN = {
        color: "GREEN", duration: 100
    };
    static ORANGE = {
        color: "ORANGE", duration: 50
    };
    static RED = {
        color: "RED", duration: 120
    };

    static COLORS = [TrafficLight.GREEN, TrafficLight.ORANGE, TrafficLight.RED];

    constructor() {
        super();
        this.color = TrafficLight.RED;
        this.start_light();
    }

    start_light() {

        setTimeout(_ => {
            this.on_color_change();
        }, this.color.duration * 10);

    }

    on_color_change() {

        this.print_emoticon();

        this.emit("color:changed", this.color);

        switch (this.color) {
            case TrafficLight.RED:
                this.color = TrafficLight.GREEN;
                break;

            case TrafficLight.ORANGE:
                this.color = TrafficLight.RED;
                break;

            case TrafficLight.GREEN:
                this.color = TrafficLight.ORANGE;
                break;

            default:
                this.color = TrafficLight.RED;
                break;
        }

        this.start_light();
    }

    print_emoticon() {
        switch (this.color) {
            case TrafficLight.RED:
                console.log(`\nTraffic Light color : ${this.color.color} 🟥\n`);
                break;

            case TrafficLight.ORANGE:
                console.log(`\nTraffic Light color : ${this.color.color} 🟧\n`);
                break;

            case TrafficLight.GREEN:
                console.log(`\nTraffic Light color : ${this.color.color} 🟩\n`);
                break;

            default:
                console.log(`\nTraffic Light color : ${this.color.color} 🟥\n`);
                break;
        }
    }
}

module.exports = TrafficLight;