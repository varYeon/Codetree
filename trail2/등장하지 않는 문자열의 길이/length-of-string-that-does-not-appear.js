const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const string = input[1];

for (let l = 1; l <= n; l++) {
    let parts = [];

    for (let i = 0; i < n; i++) {
        // i+l(x) => i+=l 사용
        // i++ -> 대입 연산자 없지만, i = i + 1 과 같음
        parts.push(string.slice(i, i + l))
    }

    let same = false;
    for (let i = 0; i < parts.length - 1; i++) {
        for (let j = i + 1; j < parts.length; j++) {
            if (parts[i] === parts[j]) {
                same = true;
                break;
            }
        }
    }

    if (same) continue;
    else {
        console.log(l);
        break;
    }
}
