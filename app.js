'use strict';

//await must be inside async
(async () => {

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