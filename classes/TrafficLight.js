const Subject = require("./gof-desing-patterns/observer/Subject");

class TrafficLight extends Subject {
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

        this.notify("color_changed", this.color);

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
                console.log(`Traffic Light color : ${this.color.color} 🟥`);
                break;

            case TrafficLight.ORANGE:
                console.log(`Traffic Light color : ${this.color.color} 🟧`);
                break;

            case TrafficLight.GREEN:
                console.log(`Traffic Light color : ${this.color.color} 🟩`);
                break;

            default:
                console.log(`Traffic Light color : ${this.color.color} 🟥`);
                break;
        }
    }
}

module.exports = TrafficLight;