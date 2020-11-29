const print = (any, started_at, duration_in_ms = 0) => {
    let ms = time_spent(started_at);
    if (ms < 10000 && ms > 999) ms = `0${ms}`;
    if (ms < 1000 && ms > 99) ms = `00${ms}`;
    if (ms < 100 && ms > 9) ms = `000${ms}`;
    if (ms < 10) ms = `0000${ms}`;

    if (duration_in_ms > 0)
        console.log(`${ms}ms : \t${any}`);
    else
        console.log(`${ms}ms : \t${any}`);

}

const time_spent = (started_at) => {
    const do_now_date = Date.now();
    return do_now_date - started_at;//milliseconds after runtime started
}

const do_during = async (message_when_start, message_when_finish, duration_in_ms = 0, started_at) => {
    return new Promise((resolve, reject) => {

        const callback = () => {
            print(message_when_finish, started_at, duration_in_ms);

            resolve(message_when_finish);
        }

        try {
            if (duration_in_ms > 0)
                print(`${message_when_start} (pendant ${duration_in_ms / 1000}mn)`, started_at, duration_in_ms);
            else
                print(`${message_when_start}`, started_at, duration_in_ms);

            setTimeout(callback, duration_in_ms);
        } catch (error) {
            reject(error);
        }

    });
}

module.exports = { print, time_spent, do_during };