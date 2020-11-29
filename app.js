'use strict';

const TrafficLight = require("./classes/TrafficLight");
const Pedestrian = require("./classes/Pedestrian");

const a_traffic_light = new TrafficLight();
const a_pedestrian = new Pedestrian();


const on_color_change = (event) => {
    a_pedestrian.update(event);
}

a_traffic_light.addListener('color_changed', on_color_change);


/*
Traffic Light color : RED 🟥
------------> Pedestrian stops

Traffic Light color : GREEN 🟩
------------> Pedestrian walks

Traffic Light color : ORANGE 🟧
------------> Pedestrian stops

Traffic Light color : RED 🟥
------------> Pedestrian stops

Traffic Light color : GREEN 🟩
------------> Pedestrian walks

Traffic Light color : ORANGE 🟧
------------> Pedestrian stops

Traffic Light color : RED 🟥
------------> Pedestrian stops
*/