const hello = (who = "world") => {
    console.log(`Hello ${who}`);
}

const bonjour = (qui = "tout le monde") => {
    console.log(`Bonjour ${qui}`);
}

/*
Autre syntaxe possible :

function hello(who = "world"){
    console.log(`Hello ${who}`);
}
*/


module.exports = { hello, bonjour };