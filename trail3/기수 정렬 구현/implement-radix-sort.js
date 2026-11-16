const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

// 오름차순
for (let pos = 0; pos < 1; pos++) {
    const arr_new = [];

    for (let i = 0; i < 10; i++) {
        arr_new[i] = [];
    }

    for (let i = 0; i < n; i++) {
        const digit = Math.floor(arr[i] / (10 ** pos)) % 10;
        arr_new[digit].push(arr[i]);
    }

    const store_arr = [];

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < arr_new[i].length; j++) {
            store_arr.push(arr_new[i][j]);
        }
    }

    arr = store_arr;
}

console.log(arr.join(' '));
