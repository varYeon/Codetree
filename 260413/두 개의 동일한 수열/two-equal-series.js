const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const a = input[1].trim().split(' ').map(Number);
const b = input[2].trim().split(' ').map(Number);

const sortA = a.sort();
const sortB = b.sort();
let same = true;

for (let i = 0; i < n; i++) {
    if (sortA[i] !== sortB[i]) {
        same = false;
        break;
    }
}

console.log(same ? 'Yes' : 'No');
