'use strict';

const TrafficLight = require("./classes/TrafficLight");
const Pedestrian = require("./classes/Pedestrian");
const Motorbike = require("./classes/vehicles/Motorbike");
const Car = require("./classes/vehicles/Car");

const a_traffic_light = new TrafficLight();
const a_pedestrian = new Pedestrian();
const a_car = new Car();
const a_motorbike = new Motorbike();


const on_color_change = (event) => {
    a_pedestrian.update(event);
    a_car.update(event);
    a_motorbike.update(event);
}

a_traffic_light.addListener('color:changed', on_color_change);


/*
Traffic Light color : GREEN 🟩

----------> Pedestrian walks
----------> Vehicle moves forward
----------> Vehicle moves forward

Traffic Light color : ORANGE 🟧

----------> Pedestrian stops
----------> Vehicle stops
----------> Vehicle stops

Traffic Light color : RED 🟥

----------> Pedestrian stops
----------> Vehicle stops
----------> Vehicle stops
*/