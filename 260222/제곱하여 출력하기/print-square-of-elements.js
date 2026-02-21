const fs = require('fs');
let input = fs.readFileSync(0).toString().trim()
const arr = input.split(/\s+/);
const result = [];

for (let i = 1; i < arr.length; i++) {
    result.push(arr[i] ** 2);
}

console.log(result.join(' '));