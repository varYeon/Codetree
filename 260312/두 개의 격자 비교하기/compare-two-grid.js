const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const nm = input[0].split(' ').map(Number);
const n = nm[0];
const m = nm[1];

const arr1 = [];
const arr2 = [];

for (let i = 1; i <= n; i++) {
    arr1.push(input[i].split(' ').map(Number));
}
for (let i = n + 1; i <= 2*n; i++) {
    arr2.push(input[i].split(' ').map(Number));
}

for (let i = 0; i < n; i++) {
    const arrResult = [];
    for (let j = 0; j < m; j++) {
        if(arr1[i][j] === arr2[i][j]) arrResult.push(0);
        else arrResult.push(1);
    }
    console.log(arrResult.join(' '));
}
