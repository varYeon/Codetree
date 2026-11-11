const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// 오름차순
for (let i = 0; i < n - 1; i++) {
    let min = i;

    for (let j = i; j < n - 1; j++) {
        if (arr[j] < arr[min]) min = j;
    }

    const temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
}

console.log(arr.join(' '));
