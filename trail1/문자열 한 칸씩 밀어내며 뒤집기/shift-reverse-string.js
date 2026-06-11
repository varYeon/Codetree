const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const info = input[0].split(' ');
let str = info[0];
const q = Number(info[1]);
const l = str.length;

for (let i = 1; i <= q; i++) {
    const quest = input[i];

    if (quest === '1') str = str.slice(1) + str[0];
    else if (quest === '2') str = str[l - 1] + str.slice(0, l - 1);
    else str = str.split('').reverse().join('');

    console.log(str);
}
