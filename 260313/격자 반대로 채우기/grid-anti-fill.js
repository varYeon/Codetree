const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

const result = [];
let num = 1;

// 배열 초기화
for (let i = 0; i < n; i++) {
    result[i] = [];
    for (let j = 0; j < n; j++) {
        result[i][j] = 0;
    }
}
// 33 23 13 03 02 12 22 32
// [i] -> 조건부 -> 행
// [j] -> 하나씩 감소 -> 열
// 열이 짝수일 때 -> 00 10 20 30, 02 12 22 32 (i가 늘어남, 위->아래)
// 열이 홀수일 때 -> 31 21 11 01, 33 23 13 03 (i가 줄어듦, 아래->위)
// 시작점 : 33

// 값 넣기
for (let j = n - 1; j >= 0; j--) {

    if (j % 2 === 0) {
        for (let i = 0; i < n; i++) {
            result[i][j] = num;
            num += 1;
        }
    } else {
        for (let i = n - 1; i >= 0; i--) {
            result[i][j] = num;
            num += 1;
        }
    }
}

for (let i = n - 1; i >= 0; i--) {
    console.log(result[i].join(' '));
}
