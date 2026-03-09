const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

/*
for (let i = 0; i < 4; i++) {
    const nums = input[i].split(' ').map(Number);
    let sum = 0;

    for (let j = 0; j < nums.length; j++) {
        sum += nums[j];
    }

    console.log(sum);
}
*/

// 다른 풀이 : 2차원 배열
let arr2d = [];

for (let i = 0; i < 4; i++) {
    arr2d.push(input[i].split(' ').map(Number));
    let sum = 0;

    for (let j = 0; j < 4; j++) {
        sum += arr2d[i][j];
    }

    console.log(sum);
}
