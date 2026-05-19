const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 입력 데이터 가공
let index = 0;
const [n, m] = input[index++].split(' ').map(Number);
let A_moves = [];
for (let i = 0; i < n; i++) {
  const [v, t] = input[index++].split(' ').map(Number);
  A_moves.push([v, t]);
}
let B_moves = [];
for (let i = 0; i < m; i++) {
  const [v, t] = input[index++].split(' ').map(Number);
  B_moves.push([v, t]);
}

// 새배열 생성 및 시간에 따른 위치 정보 저장
// [ 보완 ] 처음부터 시간 길이에 맞는 배열 제작 (기존 : 1000에서 뒷 부분을 자름)
// let posA = Array(1000).fill(0);
let posA = [0];
// let posB = Array(1000).fill(0);
let posB = [0];

let timeA = 1;
for (let i = 0; i < n; i++) {
  const [v, t] = A_moves[i];
  for (let j = 0; j < t; j++) {
    // posA[timeA] = posA[timeA - 1] + v;
    timeA = timeA - 1 + v;
    posA.push(timeA);
    timeA++;
  }
}
// posA = posA.slice(0, timeA);

let timeB = 1;
for (let i = 0; i < m; i++) {
  const [v, t] = B_moves[i];
  for (let j = 0; j < t; j++) {
    // posB[timeB] = posB[timeB - 1] + v;
    timeB = timeB - 1 + v;
    posB.push(timeB);
    timeB++;;
  }
}
// posB = posB.slice(0, timeB);

// 시간에 따른 선두 위치
const totaltime = timeA; // timeA = timeB
let frontRunner = [];

for (let i = 0; i <= totaltime; i++) {
  if (posA[i] > posB[i]) frontRunner.push('A');
  else if (posA[i] < posB[i]) frontRunner.push('B');
  else if (posA[i] === posB[i]) frontRunner.push('A,B');
}

// 조합 변화
let count = 0;
let compare = frontRunner[1]; // 맨 시작점은 제외하고 비교

for (let i = 2; i < frontRunner.length; i++) {
  if (compare !== frontRunner[i]) count++;

  compare = frontRunner[i];
}

console.log(count);
