const print = (something, start, already_known_time_spent = false) => {
    let ms;

    if (already_known_time_spent) {
        ms = already_known_time_spent;
    } else {
        ms = time_spent(start);
    }
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

    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve({ step: `step ${order}`, resolved_at: Date.now(), started_at: start });

            }, ms);
        } catch (error) {
            reject(error);
        }
    });

}

module.exports = { print, time_spent, do_now, do_after };