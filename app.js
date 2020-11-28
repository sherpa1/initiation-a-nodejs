'use strict';

const print = (something) => {
    const ms = what_time_is_it();
    console.log(`${ms}ms : ${something}`);
}

const what_time_is_it = () => {
    const now_date = Date.now();
    return now_date - start_date;//milliseconds after runtime start
}

const now = (order) => {
    print(`step ${order}`);
}

const after = (order, ms) => {

    setTimeout(() => {
        print(`step ${order}`)

    }, ms);
}

const start_date = Date.now();


print("start");
after(1, 10);
after(2, 5);
now(3);
now(4);
now(5);
print("end");

/*
0ms : start
6ms : step 3
6ms : step 4
6ms : step 5
6ms : end
12ms : step 2
18ms : step 1
*/