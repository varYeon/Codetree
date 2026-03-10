const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let arr2d = [];
let garow = [];
let serow = [];
let all = 0;

// garow
for (let i = 0; i < 2; i++) {
    arr2d.push(input[i].split(' ').map(Number));

    let sum = 0;
    for (let j = 0; j < 4; j++) {
        sum += arr2d[i][j];
    }
    garow.push((sum / 4).toFixed(1));
}

// serow
for (let i = 0; i < 4; i++) {
    let sum = 0;
    for (let j = 0; j < 2; j++) {
        sum += arr2d[j][i];
    }
    serow.push((sum / 2).toFixed(1));
    all += sum;
}

// all
all = (all / 8).toFixed(1);

console.log(garow.join(' '));
console.log(serow.join(' '));
console.log(all);
