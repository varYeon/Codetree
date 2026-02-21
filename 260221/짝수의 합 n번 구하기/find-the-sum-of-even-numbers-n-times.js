// 해설 참고 (다른 풀이)

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
    let x = input[i].split(' ');
    let a = Number(x[0]);
    let b = Number(x[1]);
    let sum = 0;

    for (let j = a; j <= b; j++) {
        if (j % 2 === 0) sum += j;
    }
    console.log(sum);
}

// 이전 풀이 
/*
const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(/\s+/);

for (let i = 1; i < input.length; i += 2) {
    let a = Number(input[i]);
    let b = Number(input[i + 1]);
    let sum = 0;

    for (let j = a; j <= b; j++) {
        if (j % 2 === 0) sum += j;
    }
    console.log(sum);
}
*/
