const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(" ").map(Number);

function isPrime(n) {
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }

    return true;
}

function isSumEven(n) {
    const ones = n % 10;
    const tens = Math.floor(n / 10);

    if ((ones + tens) % 2 === 0) return true;
    else return false;
}

function primeAndSum(a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        if (isPrime(i) && isSumEven(i)) count++;
    }

    return count
}

console.log(primeAndSum(a, b));
