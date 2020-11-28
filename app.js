'use strict';

const { print } = require("./utils/asynchronous");

const axios = require('axios').default;

const axios_instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

const start_date = Date.now();

print("start", start_date);

//get todo #7 title
axios_instance("todos/7", { method: "GET" }).then(result => {
    print("Get Todo #7", start_date);
    console.log(`Todo #7 title : "${result.data.title}"`);
}).catch(error => {
    console.error(error.message);
})

axios_instance("todos", { method: "GET" }).then(result => {
    print("Get Todos total number", start_date);
    console.log(`Total number of todos : ${result.data.length}`);
}).catch(error => {
    console.error(error.message);
})

axios_instance("todos", { method: "POST", data: { title: "Learn Node.js", body: "Learn Node.js in LP Ciasie", userId: 1 }, headers: { 'content-type': 'application/json' } }).then(result => {
    print("Post a new Todo", start_date);
    console.log(`Code HTTP after success POST : ${result.status}`);
    console.log(`Created todo :`);
    console.log(result.data);
}).catch(error => {
    console.error(error.message);
})

print("(theorical) end", start_date);

/*

00ms : start

02ms : (theorical) end

66ms : Get Todo #7

Todo #7 title : "illo expedita consequatur quia in"
85ms : Get Todos total number

Total number of todos : 200
492ms : Post a new Todo

Code HTTP after success POST : 201
Created todo :
{
  title: 'Learn Node.js',
  body: 'Learn Node.js in LP Ciasie',
  userId: 1,
  id: 201
}

*/

