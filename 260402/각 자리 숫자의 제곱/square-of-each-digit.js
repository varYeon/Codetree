const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

function Recursion(n) {
    if (n < 10) {
        return n ** 2;
    }

    return Recursion(parseInt(n / 10)) + (n % 10) * (n % 10);
}

console.log(Recursion(n));
