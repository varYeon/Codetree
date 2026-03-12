const fs = require('fs');
let nums = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const n = nums[0];
const m = nums[1];

const result = [];
let num = 0;

// 배열 초기화
// j 행(n), i 열(m)
for (let j = 0; j < n; j++) {
    result[j] = [];
    for (let i = 0; i < m; i++) {
        result[j][i] = 0;
    }
}

// 값 넣기
for (let i = 0; i < m; i++) {
    if (i % 2 === 0) {
        for (let j = 0; j < n; j++) {
            result[j][i] = num;
            num += 1;
        }
    } else {
        for (let j = n - 1; j >= 0; j--) {
            result[j][i] = num;
            num += 1;
        }
    }

}
// j가 행이고 i가 열, i가 짝수일 때는 증가/홀수일 때는 감소
// 값 채워짐 00, 10, 20, 30, 31, 21, 11, 01 순서
// 출력은 행 별로 해야 됨

for (let j = 0; j < n; j++) {
    console.log(result[j].join(' '));
}