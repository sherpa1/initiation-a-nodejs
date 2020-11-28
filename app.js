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


print("start");

after(1, 10).then(order => {
    print(`step ${order}`)
}).catch(error => {
    console.error(error);
})

after(2, 5).then(order => {
    print(`step ${order}`)
}).catch(error => {
    console.error(error);
})

now(3);
now(4);
now(5);
print("end");

/*
0ms : start
5ms : step 3
5ms : step 4
5ms : step 5
5ms : end
10ms : step 2
15ms : step 1
*/