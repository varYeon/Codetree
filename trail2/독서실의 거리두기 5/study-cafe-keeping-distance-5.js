const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seat = input[1].split('');

let distanceMax = 0;

for (let i = 0; i < n; i++) {
    if (seat[i] === '1') continue;
    else seat[i] = '2';

    let diatance = 20;
    for (let j = 0; j < n; j++) {
        if (seat[j] === '1')
            diatance = Math.min(diatance, Math.abs(i - j))
    }

    seat[i] = '0';
    distanceMax = Math.max(distanceMax, diatance);
}

console.log(distanceMax);
