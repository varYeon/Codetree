const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [x1, x2, x3, x4] = input[0].split(' ').map(Number);

let isOverlap = false;

for (let i = x1; i <= x2; i++) {
    for (let j = x3; j <= x4; j++) {
        if (i === j) {
            isOverlap = true;
            break;
        }
    }
}

if (isOverlap) console.log('intersecting');
else console.log('nonintersecting');
