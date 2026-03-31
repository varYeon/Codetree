const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

function increase(n) {
    if (n === 0) return;

    increase(n - 1);
    process.stdout.write(n + " ");
}

function decrease(n) {
    if (n === 0) return;

    process.stdout.write(n + " ");
    decrease(n - 1);
}

increase(n);
console.log()
decrease(n);
