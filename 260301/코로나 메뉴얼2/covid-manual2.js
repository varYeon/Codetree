const fs = require('fs');
let info = fs.readFileSync(0).toString().trim().split('\n');

const arr = [0, 0, 0, 0, 0]; // [A, B, C, D, E]

for (let i = 0; i < info.length; i++) {
    const person = info[i].split(' ');
    const cold = person[0];
    const temp = Number(person[1]);

    if (cold === 'Y' && temp >= 37) arr[0] += 1;
    else if (cold === 'N' && temp >= 37) arr[1] += 1;
    else if (cold === 'Y' && temp < 37) arr[2] += 1;
    else arr[3] += 1;
}

if (arr[0] >= 2) arr[4] = 'E';
else arr[4] = '';

console.log(arr.join(' '));
