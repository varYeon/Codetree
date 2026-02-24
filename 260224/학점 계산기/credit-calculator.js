const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const scores = input[1].trim().split(/\s+/).map(Number);

let sum = 0;
let result = '';

for(const score of scores) {
    sum += score;
}
const aver = (sum / n).toFixed(1);

if(aver >= 4.0) result = 'Perfect';
else if(aver >= 3.0) result = 'Good';
else result = 'Poor';

console.log(`${aver}
${result}`);