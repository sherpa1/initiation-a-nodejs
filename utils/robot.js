const say_hello = (what = "world") => {
    console.log(`Hello ${what}`);
}

/*
Autre syntaxe possible :

function say_hello(what = "world"){
    console.log(`Hello ${what}`);
}
*/


module.exports = say_hello;