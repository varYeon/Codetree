const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const ea = input[0].split(' ').map(Number);
const aEa = ea[0];
const bEa = ea[1];

const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);

let result = 'No';

for (let i = 0; i <= aEa - bEa; i++) {
    let ok = true;

    for (let j = 0; j < bEa; j++) {
        if (a[i + j] !== b[j]) {
            ok = false;
            break;
        }
    }

    if (ok) {
        result = 'Yes';
        break;
    }
}

console.log(result);
