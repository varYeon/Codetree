const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

function calcula(n, count = 0) {
    if (n === 1) return count;

    if (n % 2 === 0) {
        return calcula(n / 2, count + 1);
    } else {
        return calcula(Math.floor(n / 3), count + 1);
    }
}

console.log(calcula(n));
