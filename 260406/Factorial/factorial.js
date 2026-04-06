const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);

function factorial(N) {
    if (N === 1) return 1;

    return N * factorial(N - 1);
}

console.log(factorial(N));
