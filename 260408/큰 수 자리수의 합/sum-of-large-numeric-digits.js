const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [a, b, c] = input[0].split(" ").map(Number);

function sum(n) {
    if (n < 10) return n;

    return (n % 10) + sum(Math.floor(n / 10));
}

const multiply = a * b * c;
console.log(sum(multiply));
