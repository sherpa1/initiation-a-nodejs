'use strict';

const print = (something, start) => {
    let ms = time_spent(start);
    if (ms < 10) ms = `0${ms}`;
    console.log(`${ms}ms : ${something}`);
}

const time_spent = (start) => {
    const do_now_date = Date.now();
    return do_now_date - start;//milliseconds after runtime start
}

const do_now = (step_number, start) => {
    print(`step ${step_number}`, start);
}

const do_after = (order, ms, start) => {

    setTimeout(() => {
        print(`step ${order}`, start)

    }, ms);

}

const start_date = Date.now();


print("start", start_date);
do_after(1, 10, start_date);
do_after(2, 5, start_date);
do_now(3, start_date);
do_now(4, start_date);
do_now(5, start_date);
print("(theorical) end", start_date);

/*
00ms : start
05ms : step 3
05ms : step 4
05ms : step 5
05ms : (theorical) end
11ms : step 2
16ms : step 1
*/