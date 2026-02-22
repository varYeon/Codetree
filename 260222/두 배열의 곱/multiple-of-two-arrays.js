/**
 * 풀이 1
const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n\n');
const arr1 = input[0].split('\n');
const arr2 = input[1].split('\n');

// console.log(arr1); //[ '1 2 3', '4 5 6', '7 8 9' ]
// console.log(arr2); //[ '2 3 4', '5 6 7', '8 9 10' ]

const arr_multi = [];

for (let i = 0; i < arr1.length; i++) {
    const arr1_num = arr1[i].split(' ').map(Number);
    const arr2_num = arr2[i].split(' ').map(Number);
    // console.log(arr1_num); //[ 1, 2, 3 ]
    // console.log(arr2_num); //[ 2, 3, 4 ]

    for (let j = 0; j < arr1_num.length; j++) {
        arr_multi.push(arr1_num[j] * arr2_num[j]);
    }
    // console.log(arr_multi); //[ 2, 6, 12 ... ]
}

const result = [];
const n = 3;

for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
        row.push(arr_multi[i * n + j]);
    }
    result.push(row);
}

for (let i = 0; i < n; i++) {
    console.log(result[i].join(' '));
}
*/

// 풀이 2
const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();
const [block1, block2] = input.split('\n\n');

const arr1 = block1.split('\n').map(line => line.split(' ').map(Number));
const arr2 = block2.split('\n').map(line => line.split(' ').map(Number));

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    arr1[i][j] *= arr2[i][j];
  }
}

for (let i = 0; i < 3; i++) {
  console.log(arr1[i].join(' '));
}