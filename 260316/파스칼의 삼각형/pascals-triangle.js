const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

/* 방법 1
// 초기화
const arr2d = [];

for (let i = 0; i < n; i++) {
    arr2d[i] = [];
    for (let j = 0; j < i + 1; j++) {
        arr2d[i][j] = 1;
    }
}

// 값
let num = 1;
for (let i = 2; i < n; i++) {
    for (let j = 1; j < i + 1; j++) {
        // 각 행, 열의 최대값 에서는 arr2d[i-1][j] -> NaN : if문 구분
        if (j === i) {
            num = arr2d[i - 1][j - 1];
        } else {
            num = arr2d[i - 1][j - 1] + arr2d[i - 1][j];
        }
        arr2d[i][j] = num;
    }
}

// 출력
for (let i = 0; i < n; i++) {
    console.log(arr2d[i].join(' '));
}
*/

// 방법 2
// 초기화
const arr2d = Array.from({ length: n }, () => []);
for (let i = 0; i < n; i++) {
    arr2d[i][i] = 1;
    arr2d[i][0] = 1;
}

// 값
for (let i = 0; i < n; i++) {
    for (let j = 1; j < i; j++) {
        arr2d[i][j] = arr2d[i - 1][j - 1] + arr2d[i - 1][j];
    }
}

// 출력
for (let i = 0; i < n; i++) {
    console.log(arr2d[i].join(' '));
}
