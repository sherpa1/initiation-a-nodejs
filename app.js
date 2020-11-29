'use strict';

const TrafficLight = require("./classes/TrafficLight");
const Pedestrian = require("./classes/Pedestrian");

const a_traffic_light = new TrafficLight();
const a_pedestrian = new Pedestrian();

a_traffic_light.attach(a_pedestrian);


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