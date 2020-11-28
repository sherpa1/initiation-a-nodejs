'use strict';

const { print, time_spent, do_now, do_after } = require("./utils/asynchronous");

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