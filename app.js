'use strict';

const { print, time_spent, do_now, do_after } = require("./utils/asynchronous");

const start_date = Date.now();


print("start", start_date);

do_after(1, 10).then(order => {
    print(`step ${order}`, start_date)
}).catch(error => {
    console.error(error);
})

do_after(2, 5).then(order => {
    print(`step ${order}`, start_date)
}).catch(error => {
    console.error(error);
})

do_now(3, start_date);
do_now(4, start_date);
do_now(5, start_date);
print("(theorical) end", start_date);

/*
00ms : start
06ms : step 3
06ms : step 4
06ms : step 5
06ms : (theorical) end
12ms : step 2
16ms : step 1
*/