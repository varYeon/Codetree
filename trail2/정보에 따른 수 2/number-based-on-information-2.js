const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [t, a, b] = input[0].split(' ').map(Number);
const snData = input.slice(1, 1 + t).map(line => line.split(' '));

// 특별한 위치 | x=k ~ 'S' : d1 <= x=k ~ 'N' : d2
let specialCnt = 0;
const location = Array(1001).fill(0); // 1 ~ 1000

for (let i = 0; i < t; i++) {
    let [alphabet, distance] = snData[i];
    distance = Number(distance);

    location[distance] = alphabet;
}

for (let x = a; x <= b; x++) {
    let IdxS = 0, IdxN = 0;
    let d1 = 1001, d2 = 1001;

    // 가장 가까운 하나씩만 찾기 위해 반복문 2개 사용
    for (let j = 1; j <= 1000; j++) {
        if (location[j] === 'S') {
            IdxS = j;
            d1 = Math.min(d1, Math.abs(IdxS - x));
        }

        if (location[j] === 'N') {
            IdxN = j;
            d2 = Math.min(d2, Math.abs(IdxN - x));
        }
    }

    if (d1 <= d2) specialCnt++;
}

console.log(specialCnt);
