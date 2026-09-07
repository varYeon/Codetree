const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b, x, y] = input[0].split(' ').map(Number);

// case 1. 순간이동 x
const distance1 = Math.abs(b - a);

// case 2. x -> y로 순간이동 (a~x, y~b)
const distance2 = Math.abs(x - a) + Math.abs(b - y);

// case 3. y -> x로 순간이동
const distance3 = Math.abs(y - a) + Math.abs(b - x);

const disMin = Math.min(distance1, distance2, distance3)

console.log(disMin);
