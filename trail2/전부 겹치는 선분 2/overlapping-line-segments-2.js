const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
let x1List = [], x2List = [];
for (let i = 1; i <= n; i++) {
    const [x1, x2] = input[i].split(' ').map(Number);
    x1List.push(x1);
    x2List.push(x2);
} // x1List : [ 1, 4, 7, 2 ], x2List : [ 5, 6, 10, 4 ]

let overlap = false;

for (let i = 0; i < n; i++) { // 제거할 선분 -> i 선분
    const x1 = x1List[i], x2 = x2List[i];

    for (let j = 0; j < n; j++) {
        if (i === j) continue;
        const x3 = x1List[j], x4 = x2List[j];

        if (x4 < x1 || x3 > x2) {
            overlap = true;
            break;
        }
    }
}

console.log(overlap ? 'Yes' : 'No');
