const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + n).map(Number).sort((a, b) => a - b);;
// [ 1, 1, 3, 4, 6 ]

let a = 1; // a = 원소 최대 개수

for (let i = 0; i < n; i++) {
    let min = arr[i];
    let divide = 0;
    for (let j = n - 1; j >= i; j--) {
        let max = arr[j];
        divide = Math.abs(max - min);

        if (divide <= k) {
            a = Math.max(a, j - i + 1);
            break;
        }
    }
}

console.log(a);
