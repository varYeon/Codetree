const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

let max = -1;

function isNoCarry(a, b, c) {
    // 1. (% 10) - 일의 자리 추출
    // 2. (/ 10), (소숫점 버리기) - 일의 자리 버리기

    while (a > 0 || b > 0 || c > 0) {
        // 세 숫자가 모두 0이 되지 않는 이상 반복 -> 하나라도 0보다 크면 반복

        let sum = a % 10 + b % 10 + c % 10;

        if (sum >= 10) return false;

        // 3. (a,b,c) === let a, b, c; 
        a = Math.floor(a / 10);
        b = Math.floor(b / 10);
        c = Math.floor(c / 10);
    }

    return true;
}

for (let i = 0; i < n; i++) {
    const a = arr[i];

    for (let j = i + 1; j < n; j++) {
        const b = arr[j];

        for (let k = j + 1; k < n; k++) {
            const c = arr[k];

            if (isNoCarry(a, b, c)) {
                max = Math.max(max, a + b + c);
            }
        }
    }
}

console.log(max);
