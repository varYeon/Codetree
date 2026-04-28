const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0]; // 10011

let num = 0;
let digits = [];

for (let i = 0; i < binaryInput.length; i++) {
    num = num * 2 + Number(binaryInput[i]);
} // num = 19

num *= 17;

while (true) {
    if (num < 2) {
        digits.push(num);
        break;
    }

    digits.push(num % 2);
    num = Math.floor(num / 2);
}

// 출력
let binaryNumber = '';
for (let i = digits.length - 1; i >= 0; i--) {
    binaryNumber += digits[i];
}

console.log(binaryNumber);
