const fs = require('fs');
let line = fs.readFileSync(0).toString().trim().split('\n');
//[ '3 3 54 5', '2 6 7 81', '3 31 2 1', '95 5 7 1' ]

const arr = line.map(row => row.split(' ').map(Number));
// [ [ 3, 3, 54, 5 ], [ 2, 6, 7, 81 ], [ 3, 31, 2, 1 ], [ 95, 5, 7, 1 ] ]

let result = 0;

for (let i = 0; i < 4; i++) {
    for (let j = i; j < 4; j++) {
        result += arr[j][i];
    }
}

console.log(result);