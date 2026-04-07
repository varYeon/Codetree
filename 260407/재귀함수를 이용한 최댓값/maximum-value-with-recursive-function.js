const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

function f(n, arr) {
    if (n === 1) return arr[0];

    return Math.max(f(n - 1, arr), arr[n - 1]);
}

console.log(f(n, arr));
