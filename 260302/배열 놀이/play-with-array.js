const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0].split(' ').map(Number);
const n = a[0];
const q = a[1];

// *주의 : x번'째' 원소
const nArr = input[1].split(' ').map(Number);

for (let i = 2; i < 2 + q; i++) {
    const qArr = input[i].split(' ').map(Number);

    if (qArr[0] === 1) {
        const a = qArr[1] - 1;
        console.log(nArr[a]);
    }

    else if (qArr[0] === 2) {
        const b = qArr[1];
        let found = false;

        for (let j = 0; j < n; j++) {
            if (nArr[j] === b) {
                console.log(j + 1);
                found = true;
                break;
            }
            if (!found) console.log(0);
        }
    }

    else if (qArr[0] === 3) {
        const s = qArr[1];
        const e = qArr[2];
        const result = [];
        for (let j = s - 1; j <= e - 1; j++) {
            result.push(nArr[j]);
        }
        console.log(result.join(' '));
    }
}
