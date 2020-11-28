'use strict';

const { print, time_spent, do_now, do_after } = require("./utils/asynchronous");

//await must be inside async
(async () => {

    const start_date = Date.now();

    print("start", start_date);

    do_after(1, 10).then(order => {
        print(`step ${order}`, start_date)
    }).catch(error => {
        console.error(error);
    })

    await do_after(2, 5).then(order => {
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
    12ms : step 2
    12ms : step 3
    12ms : step 4
    12ms : step 5
    12ms : (theorical) end
    16ms : step 1
    */
})();