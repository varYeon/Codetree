const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const arr1 = [];
const arr2 = [];

for (let i = 0; i < 3; i++) {
    arr1.push(input[i].split(' ').map(Number));
}
for (let i = 4; i < 7; i++) {
    arr2.push(input[i].split(' ').map(Number));
}

for (let i = 0; i < 3; i++) {
    const arrResult = [];
    for (let j = 0; j < 3; j++) {
        arrResult.push(arr1[i][j] * arr2[i][j]);
    }
    console.log(arrResult.join(' '));
}
