const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

function evenDivide(n, arr) {
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 === 0) arr[i] /= 2;
    }
    // 조건 : 함수는 값을 반환하지 않을 것
}

evenDivide(n, arr);
// 배열은 기본형x, 참조형o -> 복사본 아닌 배열을 가리키는 참조를 넘김
// -> 배열을 수정 = 배열 원본 수정 -> 반환값이 없어도 값이 바뀜

console.log(arr.join(' '));
