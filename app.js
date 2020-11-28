'use strict';

//await must be inside async
(async () => {

    const print = (something) => {
        let ms = time_spent();
        if (ms < 10) ms = `0${ms}`;
        console.log(`${ms}ms : ${something}`);
    }

    const time_spent = () => {
        const do_now_date = Date.now();
        return do_now_date - start_date;//milliseconds after runtime start
    }

    const do_now = (step_number) => {
        print(`step ${step_number}`);
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

    print("start");

    do_after(1, 10).then(order => {
        print(`step ${order}`)
    }).catch(error => {
        console.error(error);
    })

    await do_after(2, 5).then(order => {
        print(`step ${order}`)
    }).catch(error => {
        console.error(error);
    })

    do_now(3);
    do_now(4);
    do_now(5);

    print("end");

    /*
    0ms : start
    11ms : step 2
    11ms : step 3
    11ms : step 4
    11ms : step 5
    11ms : end
    15ms : step 1
    */
})();