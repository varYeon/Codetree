const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const nums = input.slice(1, n + 1).map(Number);

let maxBombNum = -1;

for (let i = 0; i < n; i++) {
    let bombNum = -1;

    for (let j = i + 1; j <= i + k; j++) {
        if (nums[i] === nums[j]) {
            bombNum = nums[i]
        }
    }

    maxBombNum = Math.max(maxBombNum, bombNum);
}

console.log(maxBombNum)
