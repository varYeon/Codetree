const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

let maxTime = 0;

for (let i = 0; i < n; i++) {
    const officeHour = Array(1001).fill(0);
    let time = 0;

    for (let j = 0; j < n; j++) {
        if (i === j) continue;

        const [start, finish] = segments[j];
        for (let k = start; k < finish; k++) officeHour[k] += 1;
    }

    for (let l = 0; l < officeHour.length; l++) {
        if (officeHour[l] >= 1) time += 1;
    }

    maxTime = Math.max(maxTime, time);
}

console.log(maxTime);
