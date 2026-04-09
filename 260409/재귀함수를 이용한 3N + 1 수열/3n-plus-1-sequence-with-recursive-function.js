const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

function sequence(n, count = 0) {
    if (n === 1) return count;

    if (n % 2 === 0) {
        return sequence(n / 2, count + 1);
    } else {
        return sequence(n * 3 + 1, count + 1);
    }
}

console.log(sequence(n));
