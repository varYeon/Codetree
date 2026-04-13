const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const s = input[0];

const arr = [...s];
console.log(arr.sort().join(''));
