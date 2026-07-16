const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);
const arr = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

let cnt = 0;

// tip. 구하는 것에 대한 반복문 구조
for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
        if (a === b) continue;

        let aWin = true;
        for (let i = 0; i < k; i++) {
            // tip. indexOf()
            const aIdx = arr[i].indexOf(a);
            const bIdx = arr[i].indexOf(b);

            if (aIdx >= bIdx) { // 숫자가 작아야 높은 등수
                aWin = false;
                break;
            }
        }

        if (aWin) cnt++;
    }
}

console.log(cnt);
