const print = (something, start) => {
    let ms = time_spent(start);
    if (ms < 10) ms = `0${ms}`;
    console.log(`${ms}ms : ${something}\n`);
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

module.exports = { print, time_spent, do_now, do_after };