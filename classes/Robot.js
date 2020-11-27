class Robot {

    static CONCEPTION_YEAR = 2001;

    constructor(ref) {
        if (ref == undefined || ref === "") throw new Error(`You must provide the constructor "ref" param, "${ref}" given`);
        this._ref = ref;

        console.log(`Hi, my name is "${ref}" !`);
    }

    get ref() {
        return this._ref;
    }

    set ref(ref) {
        if (ref == undefined || ref === "") throw new Error(`You must provide the "ref" setter param, "${ref}" given`);
        this._ref = ref;
    }

    //https://gist.githubusercontent.com/zzarcon/c3a80a9a4cc0a9ec4fc1/raw/84017ae7fd02c007c11fca3ff4521f0f14ac4dd2/fibonacci.js
    //memoization
    fibonacci(num, memo) {

        if (num == undefined || num < 0) throw new Error(`You must provide an integer number >= 1, "${num}" given`);

        memo = memo || {};

        if (memo[num]) return memo[num];
        if (num <= 1) return 1;

        return memo[num] = this.fibonacci(num - 1, memo) + this.fibonacci(num - 2, memo);
    }


}

module.exports = Robot;