//print a message and time (in ms) spent from runtime start
const print = (something, start) => {
    let ms = time_spent(start);
    if (ms < 10) ms = `0${ms}`;
    console.log(`${ms}ms : ${something}`);
}

//time (in ms) spent from runtime start
const time_spent = (start) => {
    const do_now_date = Date.now();
    return do_now_date - start;//milliseconds after runtime start
}

//print a message synchronously
const do_now = (step_number, start) => {
    print(`step ${step_number}`, start);
}

//print a message asynchronously according to the time in ms passed
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

module.exports = { print, time_spent, do_now, do_after };