'use strict';

const { print, time_spent, do_now, do_after } = require("./utils/asynchronous");

const get_random_int = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const start_date = Date.now();


print("start", start_date);

const promises = [];

for (let index = 0; index < 6; index++) {

    const random_duration = get_random_int(10) * 1000;//get a random duration between 1000ms and 10000ms

    const a_promise = do_after(index, random_duration, start_date).catch(error => {
        console.error(error);
    });

    promises.push(a_promise);
}

Promise.all(promises).then(results => {
    //sort promises by time spent for resolve it
    results.sort((a, b) => {
        return a.resolved_at - b.resolved_at;
    });

    results.forEach(a_result => {
        print(a_result.step, start_date, a_result.resolved_at - a_result.started_at);
    })
    print(`All promises have been resolved`, start_date);
    print(`Pratical end`, start_date);
}).catch(error => {
    console.error(error);
});

print("(theorical) end", start_date);

/*
00ms : start
08ms : (theorical) end
09ms : step 1
6015ms : step 0
7009ms : step 3
7010ms : step 4
7010ms : step 5
9009ms : step 2
9011ms : All promises have been resolved
9011ms : Pratical end
*/