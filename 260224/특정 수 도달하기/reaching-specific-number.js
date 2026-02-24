const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let sum = 0;
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 250) break;
    else {
        sum += arr[i];
        count++;
    }
}
const aver = (sum / count).toFixed(1);

console.log(sum, aver);