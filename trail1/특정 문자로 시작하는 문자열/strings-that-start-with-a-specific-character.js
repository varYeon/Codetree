const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);
let strArr = [];
let alphabet = input[n + 1];

for (let i = 1; i < n + 1; i++) {
   strArr.push(input[i]);
}

let count = 0;
let sum = 0;

for (let i = 0; i < n; i++) {
   if (strArr[i][0] === alphabet) {
      count++;
      sum += strArr[i].length;
   }
}

const avg = Math.floor(sum / count).toFixed(2);
console.log(count, avg)
