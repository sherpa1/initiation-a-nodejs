const Robot = require("./classes/Robot");

const hal9000 = new Robot("HAL9000");//Hi, my name is "HAL9000" !
//const hal9000 = new Robot();//constructor test : You must provide the constructor "ref" param, "undefined" given
//const hal9000 = new Robot("");//constructor test : You must provide the constructor "" param, "undefined" given

console.log(Robot.CONCEPTION_YEAR);//2001

const result = hal9000.fibonacci(50);//20365011074

console.log(result);//20365011074
