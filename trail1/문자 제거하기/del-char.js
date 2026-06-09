const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let str = input[0].split('');
// let newStr = str;

for (let i = 1; i < input.length; i++) {
    if (str.length <= 1) break;

    let curIdx = 1;

    if (input[i] > str.length) {
        curIdx = Number(str.length - 1);
    }
    else {
        curIdx = Number(input[i]);
    }

    str = str.filter((_, idx) => idx !== curIdx);

    console.log(str.join(''));
}
