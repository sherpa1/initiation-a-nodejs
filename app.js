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
06ms : (theorical) end
07ms : step 3
07ms : step 4
2008ms : step 8
3008ms : step 0
4009ms : step 2
5008ms : step 1
5009ms : step 9
6009ms : step 7
7008ms : step 6
9007ms : step 5
9008ms : All promises have been resolved
9008ms : Pratical end
*/