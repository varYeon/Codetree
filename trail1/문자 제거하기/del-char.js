const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let str = input[0].split('');

for (let i = 1; i < input.length; i++) {
    if (str.length <= 1) break;

    let curIdx = Number(input[i]);

    if (input[i] >= str.length) {
        curIdx = Number(str.length - 1);
    } 

    str = str.filter((_, idx) => idx !== curIdx);

    console.log(str.join(''));
}
