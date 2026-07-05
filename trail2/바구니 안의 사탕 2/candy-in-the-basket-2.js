const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let index = 0;
const [n, k] = input[index++].split(" ").map(Number);

const location = Array(101).fill(0);
for (let i = 0; i < n; i++) {
    const [candy, position] = input[index++].split(" ").map(Number);

    location[position] += candy;
}

// c-k ~ c+k -> 구간 2k
let maxCandy = 0;

if (2 * k >= 100) {
    for (let i = 0; i <= 100; i++) {
        maxCandy += location[i];
    }
} else {
    for (let i = 0; i <= 100; i++) {
        let currentCandy = 0;
        for (let j = i; j <= Math.min(100, i + 2 * k); j++) {
            currentCandy += location[j];
        }
        maxCandy = Math.max(maxCandy, currentCandy);
    }
}

console.log(maxCandy);
