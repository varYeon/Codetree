const fs = require("fs");
let inputs = fs.readFileSync(0).toString().trim().split(' ');

let start = Number(inputs[0]);
let end = Number(inputs[1]);

let resultCnt = 0;

for (let i = start; i <= end; i++) {
    let cnt = 0;

    for (let j = 1; j <= i; j++) {
        if (i % j === 0) cnt++;
    }

    if (cnt === 3) resultCnt++;
}

console.log(resultCnt);
