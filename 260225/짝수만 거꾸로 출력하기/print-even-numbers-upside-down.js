const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const numbers = input[1].split(' ').map(Number);
const result = [];

for(const number of numbers) {
    if(number % 2 === 0) result.push(number);
}

console.log(result.reverse().join(' '));