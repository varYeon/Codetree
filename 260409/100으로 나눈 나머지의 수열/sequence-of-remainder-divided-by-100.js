const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);

function f(N) {
    if (N === 1) return 2;
    if (N === 2) return 4;

    return (f(N - 1) * f(N - 2)) % 100;
}

console.log(f(N));
