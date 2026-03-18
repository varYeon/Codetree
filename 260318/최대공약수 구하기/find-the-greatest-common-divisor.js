const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let n = input[0];
let m = input[1];

const factor = [];

function findCommonFactor(n, m) {
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            if (m % i === 0) factor.push(i);
        }
    }
}

function findMax(n, m) {
    const index = factor.length;
    console.log(factor[index - 1]);
}

findCommonFactor(n, m);
findMax(n, m);
