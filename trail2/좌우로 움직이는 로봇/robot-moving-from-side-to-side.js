const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const movesA = input.slice(1, 1 + n);
const movesB = input.slice(1 + n, 1 + n + m);

// 시간에 따른 위치 배열
let posA = [];
posA[0] = 0;
let posB = [];
posB[0] = 0;

// 시간 만큼의 배열값 채우기
let timeA = 1;
for (let i = 0; i < n; i++) {
  const [tStr, dStr] = movesA[i].trim().split(' ');
  const t = Number(tStr);
  const d = dStr === 'R' ? 1 : -1;

  for (let j = 0; j < t; j++) {
    posA[timeA] = posA[timeA - 1] + d;
    timeA++;
  }
}

let timeB = 1;
for (let i = 0; i < m; i++) {
  const [tStr, dStr] = movesB[i].trim().split(' ');
  const t = Number(tStr);
  const d = dStr === 'R' ? 1 : -1;

  for (let j = 0; j < t; j++) {
    posB[timeB] = posB[timeB - 1] + d;
    timeB++;
  }
}

// 짧은 배열을 긴 배열에 맞춰 마지막 값 연장
let maxTime = timeA;
let counter = 0;

if (timeA > timeB) {
  const lastValue = posB[timeB - 1];

  for (let i = timeB; i < timeA; i++) {
    posB.push(lastValue);
  }
} else {
  maxTime = timeB;

  const lastValue = posA[timeA - 1];
  for (let i = timeA; i < timeB; i++) {
    posA.push(lastValue);
  }
}

// 만나는 위치 판단
for (let i = 1; i < maxTime; i++) { // 0 제외
  if (posA[i] === posB[i] && posA[i - 1] !== posB[i - 1]) {
    counter++;
  }
}

console.log(counter);
