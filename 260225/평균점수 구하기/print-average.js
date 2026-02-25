const fs = require('fs');
let scores = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sum = 0;
for (const score of scores) sum += score;
const result = (sum / scores.length).toFixed(1);

console.log(result);