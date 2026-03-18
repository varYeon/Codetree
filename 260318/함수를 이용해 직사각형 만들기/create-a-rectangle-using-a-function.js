/*
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
const n = input[0];
const m = input[1];

for (let i = 0; i < n; i++) {
    let str = ''
    for (let j = 0; j < m; j++) {
        str += '1';
    }
    console.log(str);
} */

// 함수 사용
function printOne(n, m) {
    for (let i = 0; i < n; i++) {
        let str = ''
        for (let j = 0; j < m; j++) {
            str += '1';
        }
        console.log(str);
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
printOne(input[0], input[1]);
