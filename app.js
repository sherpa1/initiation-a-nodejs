'use strict';

const TrafficLight = require("./classes/TrafficLight");
const Pedestrian = require("./classes/Pedestrian");
const Car = require("./classes/vehicles/Car");
const Motorbike = require("./classes/vehicles/Car");

const a_traffic_light = new TrafficLight();
const a_pedestrian = new Pedestrian();
const a_car = new Car();
const a_motorbike = new Motorbike();

a_traffic_light.attach(a_pedestrian);
a_traffic_light.attach(a_car);
a_traffic_light.attach(a_motorbike);

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