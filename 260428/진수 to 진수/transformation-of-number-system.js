const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = input[1];

let num = 0;
let digits = [];

for (let i = 0; i < n.length; i++) {
    num = num * a + Number(n[i]);
} // 10진수

while (true) {
    if (num < b) {
        digits.push(num);
        break;
    }

    digits.push(num % b);
    num = Math.floor(num / b);
}

let resultNumber = '';
for (let i = digits.length - 1; i >= 0; i--) {
    resultNumber += digits[i];
}

console.log(resultNumber);
