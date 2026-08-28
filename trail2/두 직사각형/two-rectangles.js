const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x1, y1, x2, y2] = input[0].split(' ').map(Number);
const [a1, b1, a2, b2] = input[1].split(' ').map(Number);

let isOverlap = true; // 겹침

if ((x2 <= a1) || (a2 <= x1) || (y2 <= b1) || (b2 <= y1)) isOverlap = false; // 겹치지 않음

console.log(isOverlap ? 'overlapping' : 'nonoverlapping');
