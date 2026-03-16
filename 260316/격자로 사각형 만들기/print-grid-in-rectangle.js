const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

// 초기화
const arr2d = Array.from({ length: n }, () => []);
for (let i = 0; i < n; i++) {
    arr2d[i][0] = 1;
    arr2d[0][i] = 1;
}

// 값
let num = 1;
for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
        num = arr2d[i - 1][j] + arr2d[i][j - 1] + arr2d[i - 1][j - 1];
        arr2d[i][j] = num;
    }
}

// 출력
for (let i = 0; i < n; i++) {
    console.log(arr2d[i].join(' '));
}
