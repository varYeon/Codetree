const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);

let cnt = 0;
for (let i = x; i <= y; i++) {
    const num = i.toString().split('');
    let palindrome = true;

    for (let j = 0; j < num.length; j++) {
        if (num[j] !== num[num.length - 1 - j]) palindrome = false;
    }

    if (palindrome) cnt++;
}

console.log(cnt);
