const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);
/* 
tip 1. 이동 거리는 "한 사람 기준"으로 도착 좌표 - 출발 좌표 / "집 기준" X -> 펼치기 필요
** 펼치기 : ex. [0, 3, 0] -> [2, 2, 2] : "2번집에 3명이 있다"는 의미 사람 기준으로 펼치는 것
tip 2. 정렬 매칭 O / 교차 매칭 X -> 규칙을 지키기 위함
*/

// 펼침
const A = [];
for (let i = 0; i < n; i++) {
    const house = i + 1;
    const people = a[i];
    for (let j = 0; j < people; j++) {
        A.push(house);
    }
}

const B = [];
for (let i = 0; i < n; i++) {
    const house = i + 1;
    const people = b[i];
    for (let j = 0; j < people; j++) {
        B.push(house);
    }
}

// 정렬 (확인)
A.sort((a, b) => a - b);
B.sort((a, b) => a - b);

// 정렬 매칭
let disSum = 0;
let allPeople = A.length;

for (let i = 0; i < allPeople; i++) {
    const distance = B[i] - A[i];
    // Math.abs 사용 X -> q-p 라고 명시 되어 있으므로

    disSum += distance;
}

console.log(disSum);
