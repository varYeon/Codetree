const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, b] = input[0].split(' ').map(Number);
const p = input.slice(1, 1 + n).map(Number).sort((a, b) => a - b); // point : 정렬 필요

let maxStud = 0;

for (let i = 0; i < n; i++) {
    let totalPrice = b;
    const halfPrice = p[i] / 2;
    totalPrice -= halfPrice;

    if (totalPrice < 0) continue;
    let students = 1; // i 구매 완료 => 1시작

    for (let j = 0; j < n; j++) {
        if (i === j) continue;
        if (totalPrice < p[j]) break;

        totalPrice -= p[j];
        students += 1;
    }

    maxStud = Math.max(maxStud, students);
}

console.log(maxStud);
