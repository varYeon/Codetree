const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
let newArr = [];
const result = [];

for (i = 0; i < n; i++) {
    newArr.push(arr[i]);

    if (i % 2 === 0) {
        newArr = newArr.sort((a, b) => a - b);
        result.push(newArr[Math.floor(i / 2)]);
    }
}

console.log(result.join(' '));
