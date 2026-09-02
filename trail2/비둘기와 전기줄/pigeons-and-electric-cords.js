const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const movements = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

let pigeon = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let pigeonChange = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3];

for (let i = 0; i < n; i++) {
    const [p, x] = movements[i];

    if (pigeonChange[p - 1] === 3) {
        pigeonChange[p - 1] = x;
    } else if (x !== pigeonChange[p - 1] && pigeonChange[p - 1] !== 3) {
        pigeon[p - 1] += 1;
        pigeonChange[p - 1] = x;
    }
}

let minSum = 0;

for (let i = 0; i < 10; i++) {
    minSum += pigeon[i];
}

console.log(minSum);
