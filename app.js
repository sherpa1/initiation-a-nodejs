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

const do_after = (order, ms) => {

    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(order);
            }, ms);
        } catch (error) {
            reject(error);
        }
    })

}


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