const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

let cnt = 0;

for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
        let sum = 0;
        const total = j - i + 1;
        let aver = 0;

        for (let k = i; k < j + 1; k++) {
            sum += arr[k];
        }

        aver = sum / total;

        for (let l = i; l < j + 1; l++) {
            if (arr[l] === aver) {
                cnt++;
                break;
            }
        }
    }
}

console.log(cnt);
