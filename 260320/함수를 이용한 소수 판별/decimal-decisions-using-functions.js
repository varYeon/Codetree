const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

function isPrime(n) {
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }

    return true;
}

function primeNumber(A, B) {
    const prime = [];

    for (let i = A; i <= B; i++) {
        if (isPrime(i)) prime.push(i);
    }

    let sum = 0;
    // for (let i = 0; i < prime.length; i++) {
    //     sum += prime[i];
    // }
    prime.map((num) => sum += num);

    return sum;
}

console.log(primeNumber(A, B));
