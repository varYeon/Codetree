const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(" ").map(Number);

function isPerfect(n) {
    const condition1 = n % 2 === 0;
    const condition2 = n % 10 === 5;
    const condition3 = n % 3 === 0 && n % 9 !== 0;
    return !condition1 && !condition2 && !condition3;
}

function perfectNumber(a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        if (isPerfect(i)) count++;
    }
    return count;
}

console.log(perfectNumber(a, b));
