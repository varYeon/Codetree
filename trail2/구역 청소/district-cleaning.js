const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number); // a 포함, b 미포함
const [c, d] = input[1].split(' ').map(Number);

let totalArea = 0;
let isOverlap = false;

if (a <= d && c <= b) isOverlap = true;

if (isOverlap) {
    const max = Math.max(a, b, c, d);
    const min = Math.min(a, b, c, d);
    totalArea = max - min;

} else {
    let aArea = 0, bArea = 0;

    for (let i = a; i < b; i++) {
        aArea++;
    }
    for (let i = c; i < d; i++) {
        bArea++;
    }

    totalArea = aArea + bArea;
}

console.log(totalArea)
