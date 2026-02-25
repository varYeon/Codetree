const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split('\n');

const people = arr[0];
let count = 0;

for (let i = 1; i <= people; i++) {
    scores = arr[i].split(' ').map(Number);
    let sum = 0;
    let state = '';

    for (const score of scores) sum += score;
    if ((sum / 4) >= 60) {
        state = 'pass';
        count++;
    }
    else state = 'fail';

    console.log(state);
}

console.log(count);