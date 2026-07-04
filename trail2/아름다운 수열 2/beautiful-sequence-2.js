const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr1 = input[1].split(" ").map(Number);
const arr2 = input[2].split(" ").map(Number);

let cnt = 0;

// [1] 1. 아름다운 수열 만들기, 2. A에 부분수열인지 확인 => X
// [2] 전부 오름차순으로 정렬해서 구성만 맞는지 확인

arr2.sort((a, b) => a - b);

for (let i = 0; i <= n - m; i++) {
    const check = [];
    for (let j = i; j < i + m; j++) {
        check.push(arr1[j]);
    }

    check.sort((a, b) => a - b);

    let same = true;
    for (let k = 0; k < m; k++) {
        if (check[k] !== arr2[k]) {
            same = false;
            break;
        }
    }
    if (same) cnt++;
}

console.log(cnt);
